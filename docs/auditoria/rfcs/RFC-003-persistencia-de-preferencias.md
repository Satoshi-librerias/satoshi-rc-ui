# RFC-003 — Estrategia de persistencia de preferencias (cifrado vs. simplicidad)

- **Estado:** Propuesto → Aceptado (ejecución en Fase 2 del plan)
- **Fecha:** 23/10/2026
- **Relacionado:** H-06, H-08 · [backlog.md](../backlog.md)

---

## 1. Contexto

La librería cifra con AES-GCM las preferencias que guarda en `localStorage`
(idioma y, en código muerto, tema). El consumidor debe pasar
`languageEncryptionKey` a `TranslateProvider`.

Análisis de valor:

- Los datos cifrados son **el nombre de un tema o un código de idioma** (`"es"`,
  `"dark"`). No hay PII, tokens ni nada sensible.
- El cifrado **no aporta confidencialidad real**: la clave viaja en el mismo
  bundle JS del consumidor; un atacante con acceso a localStorage también tiene
  acceso al JS que contiene la clave.
- El coste es real: API asíncrona (`async/await` en restore), complejidad en el
  provider (máquina de estados `isLoaded`), superficie de error, y obliga al
  consumidor a gestionar una clave.
- Además, el tema **no usa** esta infraestructura: persiste en texto plano con
  la clave mágica `"app_theme"` — dos estrategias distintas para el mismo
  problema.

## 2. Decisión

**Simplificar: persistir preferencias en texto plano**, con un diseño que
preserve la opción de cifrado si algún consumidor lo necesita:

1. `TranslateProvider` deja de requerir `languageEncryptionKey` (prop eliminada
   de la API pública → cambio breaking menor, la librería está en 1.x privado).
2. `infraestructura/storage` expone `readPreference(key)` /
   `writePreference(key, value)` síncronos sobre `localStorage` con manejo
   defensivo (try/catch, SSR-safe).
3. Los módulos `language-preference.storage.ts` y `theme-local.storage.ts` usan
   esas primitivas con sus claves versionadas (`starter-react-ui:language:v1`,
   `starter-react-ui:theme:v1`).
4. El módulo de cifrado (`encryption.service.ts`,
   `encrypted-preference.storage.ts`) **se conserva** en infraestructura como
   utilidad opcional, documentado como "para preferencias sensibles del
   consumidor", pero deja de estar en el camino crítico de los providers.
5. La clave `"app_theme"` se mueve a `domain/constants` como
   `THEME_STORAGE_KEY`.

## 3. Alternativas consideradas

| Alternativa                                | Descartada porque                                                                                           |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------- |
| Mantener cifrado obligatorio               | Coste async + complejidad sin beneficio de seguridad real para datos no sensibles                           |
| Cifrado opcional con flag en el provider   | Duplica caminos de código y estados (`isLoaded`) por un valor de estética; YAGNI                            |
| Eliminar el módulo de cifrado por completo | Podría ser útil para consumidores con preferencias realmente sensibles; conservarlo documentado cuesta poco |

## 4. Consecuencias

- ✅ `TranslateProvider` se vuelve síncrono en su restauración → se elimina la
  máquina de estados `isLoaded` y el efecto async (menos ~80 LOC, menos bugs
  potenciales).
- ✅ API pública más simple (una prop menos).
- ✅ Una sola estrategia de persistencia para tema e idioma.
- ⚠️ **Breaking change** en la prop `languageEncryptionKey` (aceptable: librería
  privada pre-1.x estable; se documenta en el release).
- ⚠️ Los valores en localStorage pasan a ser legibles (eran nombres de
  tema/idioma: sin impacto).

## 5. Criterio de aceptación

```bash
# TranslateProvider sin languageEncryptionKey
grep -rn "languageEncryptionKey" src/  # → solo en módulos opcionales de cifrado, no en provider
# Persistencia síncrona
grep -rn "async" src/libs/aplicacion/providers/  # → 0 resultados
npm run lint && npm run build:lib  # ✅
```
