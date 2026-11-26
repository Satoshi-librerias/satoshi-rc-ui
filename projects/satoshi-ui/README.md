# satoshi-ui

Libreria React de componentes reutilizables (atoms, molecules, organisms) con
Tailwind CSS 4, DaisyUI, gestion de temas e internacionalizacion. Este paquete
es el codigo fuente que compila el `vite.config.ts` de la raiz del repositorio.

## Estructura

```text
projects/satoshi-ui/
├── src/
│   ├── components/         # UI React
│   │   ├── atoms/          #   <nombre>/{components,types,constants,utils,index.ts}
│   │   ├── molecules/
│   │   ├── organisms/
│   │   └── index.ts        # barril: atoms + molecules + organisms
│   ├── libs/               # transversal, sin JSX de UI
│   │   ├── constants/      contexts/   enums/     hooks/
│   │   ├── interface/      providers/  services/  storage/
│   │   ├── types/          utils/      styles/    (Tailwind + DaisyUI)
│   │   └── index.ts        # barril publico de libs
│   └── index.ts            # API publica del paquete
├── test/                   # pruebas unitarias centralizadas (jsdom + Testing Library)
│   ├── components/         # espeja src/components
│   ├── libs/               # espeja src/libs
│   └── setup/              # setup.ts: setup global de Vitest
└── README.md
```

## Alias

| Alias                          | Resuelve a          | Declarado en                                                                    |
| ------------------------------ | ------------------- | ------------------------------------------------------------------------------- |
| `@components`, `@components/*` | `src/components`    | `tsconfig.app.json`, `vite.config.ts`, `vitest.config.ts`, `.storybook/main.ts` |
| `@libs`, `@libs/*`             | `src/libs`          | `tsconfig.app.json`, `vite.config.ts`, `vitest.config.ts`, `.storybook/main.ts` |
| `@test/*`                      | `test/`             | `tsconfig.app.json`, `vite.config.ts`, `vitest.config.ts`, `.storybook/main.ts` |
| `@assets/*`, `@/*`             | `src/assets`, `src` | `tsconfig.app.json`, `vite.config.ts`, `vitest.config.ts`, `.storybook/main.ts` |

`tsconfig.test.json` extiende `tsconfig.app.json` e incluye `test/` para que
TypeScript y el IDE resuelvan los alias en las pruebas; esta referenciado desde
el `tsconfig.json` raiz.

## Reglas

1. Direccion de dependencias: `components -> libs`; `libs` nunca importa de
   `components`.
2. Cada carpeta exporta su API publica por su `index.ts`; la API del paquete es
   unicamente `src/index.ts`.
3. Los alias oficiales son `@libs`, `@components`, `@test/*`, `@assets/*` y
   `@/*`; mantenlos sincronizados en los cuatro entornos de la tabla anterior.
4. Un solo import por alias: los valores y los tipos (`type`) van juntos en la
   misma importacion de `@libs` o `@components`, nunca en imports separados del
   mismo alias ni mezclando `@libs` con `@libs/<modulo>` en el mismo archivo.
5. Los modulos internos de `libs` se importan entre si con `@libs/<modulo>` (por
   ejemplo `@libs/contexts`, `@libs/interface`), nunca con `../`. Los imports
   relativos solo se permiten dentro de la misma carpeta de modulo (por ejemplo
   `./theme-manifest.interface` en `libs/interface`).
6. Pruebas centralizadas en `test/` (espejando `src/`) con el setup de
   `test/setup/setup.ts`; importan el codigo bajo prueba desde `@libs` /
   `@components` y los recursos de testing desde `@test/*`.
7. TypeScript estricto, sin `any`; JSDoc en espanol sin caracteres especiales.

## Comandos (desde la raiz del repositorio)

```bash
npm test                 # pruebas unitarias
npm run lint             # ESLint
npm run format:check     # Prettier
npm run build:lib        # compilacion de la libreria hacia dist/
npm run storybook        # Storybook en desarrollo (puerto 6006)
npm run build:storybook  # compilacion de Storybook
```

Consulta el README de la raiz para la guia completa de instalacion, temas,
internacionalizacion y empaquetado.
