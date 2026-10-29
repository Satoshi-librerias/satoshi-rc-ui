# RFC-001 — Corrección del contrato de tipos y empaquetado del paquete

- **Estado:** Propuesto → Aceptado (ejecución en Fase 1 del plan)
- **Fecha:** 23/10/2026
- **Relacionado:** H-01, H-11, H-12 · [backlog.md](../backlog.md)

---

## 1. Contexto

`package.json` declara:

```json
"main": "./dist/index.cjs",
"module": "./dist/index.js",
"types": "./dist/index.d.ts",
"exports": {
  ".": {
    "types": "./dist/index.d.ts",
    "import": "./dist/index.js",
    "require": "./dist/index.cjs"
  }
}
```

El build (`vite build` + `unplugin-dts` con `entryRoot: src/`) genera las
declaraciones preservando la estructura de `src/`, y como el único entry de
Rollup es `src/index.ts` (que solo hace `export * from "./libs"`), el resultado
es:

- `dist/libs/index.d.ts` ✅ existe
- `dist/index.d.ts` ❌ **no existe**

TypeScript resuelve `types` literalmente: cualquier consumidor obtiene el error
`TS7016: Could not find a declaration file for module '@steveencues/starter-react-ui'`.
**La librería es inutilizable para su público objetivo.**

Adicionalmente:

- `public/` (favicon, icons) se copia a `dist/` porque Vite copia `publicDir`
  por defecto también en builds de librería.
- No existe `sideEffects`, por lo que el `import "./libs/styles/index.css"` en
  el entry hace que los bundlers de los consumidores preserven todos los módulos
  por precaución.
- Faltan `engines` y `exports["./package.json"]`.

## 2. Decisión

1. **Generar `dist/index.d.ts` en la raíz de dist.** Causa raíz verificada
   durante la auditoría: `OUTPUT_DIRECTORY` en `vite.config.ts` se construye con
   `new URL("./dist/")` y produce la ruta `/…/dist/` **con barra final**. El
   check `strictOutput` de `unplugin-dts` compara
   `dirname(archivo).startsWith(outDir)` y la barra final hace fallar la
   comparación **solo para los archivos de la raíz de dist** (por eso
   `dist/libs/**` sí se emite y `dist/index.d.ts` no; el log del plugin lo
   confirma: `Outside emitted: …/dist/index.d.ts`). Corrección: eliminar la
   barra final (`new URL("./dist", import.meta.url)`).
2. **Desactivar la copia de `public/`** en el build de librería
   (`publicDir: false` en `vite.config.ts`).
3. **Declarar `sideEffects: ["*.css"]`** para habilitar tree-shaking seguro del
   JS.
4. **Añadir `engines`** (`node >=20`, npm 10+) y
   `exports["./package.json"]: "./package.json"`.

## 3. Alternativas consideradas

| Alternativa                                               | Descartada porque                                                                                                                              |
| --------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Cambiar `types` a `./dist/libs/index.d.ts`                | Engaña al consumidor: los imports `@/` internos y las rutas relativas de los .d.ts anidados quedan frágiles; el entry público debe ser la raíz |
| Mover `src/index.ts` a re-exportar directamente las capas | No cambia nada: el problema es la ruta de emisión, no el contenido                                                                             |
| Bundlear tipos con `rollup-plugin-dts`                    | Añade dependencia; la corrección de la barra final en `OUTPUT_DIRECTORY` es suficiente (verificada en ejecución)                               |

## 4. Consecuencias

- ✅ Los consumidores TypeScript resuelven los tipos automáticamente.
- ✅ Tarball limpio (sin favicon/icons).
- ✅ Tree-shaking efectivo en bundlers de consumidores.
- ⚠️ Requiere verificación con `npm pack --dry-run` + proyecto de consumo de
  prueba en cada release (se añade al plan de verificación).

## 5. Criterio de aceptación

```bash
npm run build:lib
test -f dist/index.d.ts        # debe existir
test ! -f dist/favicon.svg     # no debe existir
npm pack --dry-run             # el tarball lista index.d.ts y style.css, sin favicon
```
