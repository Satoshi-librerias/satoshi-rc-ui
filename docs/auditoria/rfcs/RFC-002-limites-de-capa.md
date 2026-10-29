# RFC-002 — Restauración de los límites de capa (infraestructura autocontenida)

- **Estado:** Propuesto → Aceptado (ejecución en Fase 2 del plan)
- **Fecha:** 23/10/2026
- **Relacionado:** H-03, H-04, H-06, H-08 · [backlog.md](../backlog.md)

---

## 1. Contexto

La arquitectura declarada es una jerarquía de capas:

```
presentation → aplicacion → infraestructura → domain
```

Sin embargo, el código actual presenta tres violaciones:

1. **Dependencia invertida:**
   `infraestructura/storage/encrypted-preference.storage.ts` importa
   `decryptText`, `encryptText`, `getLocalStorage` desde `@aplicacion`. La capa
   de infraestructura (la más baja después de domain) no puede depender de la
   capa de aplicación.
2. **Bypass de infraestructura:** `aplicacion/utils/theme.utils.ts` accede a
   `window.localStorage` directamente (`resolveInitialTheme`, `persistTheme`)
   con la clave mágica `"app_theme"`, duplicando la responsabilidad que ya tiene
   `infraestructura/storage`.
3. **Tipos duplicados:** `translate.provider.tsx` redeclara
   `LanguagePreferenceConfiguration`, `LanguagePreferenceState`,
   `LanguagePreferenceResult` y `SetLanguagePreferenceState`, que ya existen en
   `domain` con formas idénticas.

## 2. Decisión

### 2.1 Mover las primitivas de plataforma a `infraestructura`

Las utilidades que envuelven APIs del navegador son, por definición,
infraestructura:

| Archivo                 | Origen                 | Destino                     |
| ----------------------- | ---------------------- | --------------------------- |
| `crypto-api.util.ts`    | `aplicacion/utils/`    | `infraestructura/platform/` |
| `storage-api.util.ts`   | `aplicacion/utils/`    | `infraestructura/platform/` |
| `text-encoding.util.ts` | `aplicacion/utils/`    | `infraestructura/platform/` |
| `base64.util.ts`        | `aplicacion/utils/`    | `infraestructura/platform/` |
| `encryption.service.ts` | `aplicacion/services/` | `infraestructura/crypto/`   |

`encrypted-preference.storage.ts` pasa a importar de rutas relativas dentro de
`infraestructura` (sin alias cruzado de capa). `aplicacion` consume
`@infraestructura` como corresponde.

### 2.2 Centralizar la persistencia de tema en infraestructura

- Crear `infraestructura/storage/theme-local.storage.ts` con
  `readStoredThemeName()` / `writeStoredThemeName()` (localStorage síncrono,
  clave `"app_theme"` extraída a constante de `domain/constants`).
- `theme.utils.ts` deja de tocar `window.localStorage`; `resolveInitialTheme`
  recibe el valor leído como parámetro (función pura, testeable).

### 2.3 Eliminar los tipos duplicados

`translate.provider.tsx` importa `LanguagePreferenceConfiguration`,
`LanguagePreferenceState`, `LanguagePreferenceResult` y
`SetLanguagePreferenceState` desde `@domain` y se borran las declaraciones
locales.

## 3. Alternativas consideradas

| Alternativa                                                                                | Descartada porque                                                                                                                          |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Introducir puertos/puertos-adaptadores (interfaces en domain, implementaciones inyectadas) | Sobre-ingeniería para una librería de 2 moléculas; la inversión de dependencias completa se justificaría con múltiples backends de storage |
| Dejar `encryption` en aplicacion y solo mover `storage`                                    | `encryption.service.ts` también envuelve APIs de plataforma (`crypto.subtle`); su lugar natural es infraestructura                         |
| Mantener los tipos duplicados "por desacoplar el provider"                                 | Domain ya es la capa de contratos; duplicarlos crea dos fuentes de verdad que divergen                                                     |

## 4. Consecuencias

- ✅ Grafo de dependencias acíclico y coherente:
  `presentation → aplicacion → infraestructura → domain`.
- ✅ `theme.utils` se vuelve función pura testeable sin mocks de `window`.
- ✅ Una sola definición de cada tipo de preferencia.
- ⚠️ Cambio interno (no rompe API pública: los barrels re-exportan desde las
  nuevas rutas).
- ⚠️ Requiere actualizar barrels (`aplicacion/index.ts`,
  `infraestructura/index.ts`) y verificar que ningún import cruzado quede roto.

## 5. Criterio de aceptación

```bash
# Ningún archivo de infraestructura importa de @aplicacion o @presentation
grep -rn "@aplicacion\|@presentation" src/libs/infraestructura/  # → 0 resultados
# Ningún archivo de aplicacion toca window.localStorage/document directamente
grep -rn "window.localStorage\|window.document" src/libs/aplicacion/  # → 0 resultados
npm run lint && npm run build:lib  # ✅
```
