# React UI Library

Librería de componentes reutilizables desarrollada con **React, TypeScript y
Vite**, diseñada para proporcionar una base de interfaz consistente,
personalizable y mantenible para aplicaciones React.

## ✨ Características

- **React + TypeScript:** componentes reutilizables con tipado estático.
- **Vite:** servidor de desarrollo rápido y compilaciones optimizadas.
- **Gestión de temas:** configuración centralizada de temas y tokens de diseño.
- **Internacionalización (i18n):** soporte para múltiples idiomas.
- **ESLint:** validación automática de la calidad del código.
- **Prettier:** formato consistente del código.
- **Conventional Commits:** estandarización de los mensajes de commit.
- **Git Hooks:** ejecución automática de validaciones antes de confirmar
  cambios.
- **Distribución privada:** generación de paquetes instalables en formato
  `.tgz`.
- **GitHub Actions:** automatización de validaciones y generación de artefactos.

## UI Kit y composición

Usa `Container` para anchos, insets responsive y ritmo vertical semántico
(`sectionSpacing="standard"`); combina `SectionHeading` para eyebrow, título,
subtítulo y acción. El nivel HTML (`level`) es independiente del tamaño visual
(`size`), y `align` permite una composición inicial o centrada. Para preservar
consistencia entre temas, usa tokens DaisyUI semánticos (`base-100`,
`base-content`, `primary`) y evita colores específicos de una aplicación
consumidora.

La especificación, el plan y las tareas están en
[`.github/specs/ui-kit/`](./.github/specs/ui-kit/). Síguelos antes de cambiar el
contrato visual o agregar patrones compartidos.

## 📋 Requisitos

Antes de comenzar, asegúrate de tener instalado:

- Node.js 22 o superior (el CI usa Node 24).
- npm 11 o superior.
- Git.

## 🚀 Instalación

### Instalar desde un paquete local

Genera el paquete de la librería:

```bash
npm run package:lib
```

El archivo `.tgz` generado se almacena en el directorio `resources/`.

Instálalo en otra aplicación React:

```bash
npm install ../ruta-de-la-libreria/resources/satoshi-rc-ui-1.0.0.tgz
```

Reemplaza la ruta y el número de versión por los valores reales generados por el
proyecto.

### Instalar desde un registro privado de npm

Si la librería se publica en GitHub Packages, configura el registro en el
archivo `.npmrc` del proyecto consumidor:

```ini
@tu-organizacion:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}
```

Instala la librería:

```bash
npm install @satoshi-librerias/satoshi-rc-ui
```

Reemplaza el nombre de la organización y el paquete por los valores definidos en
`package.json`.

> Generar un archivo `.tgz` no publica automáticamente la librería en un
> registro. La publicación debe configurarse por separado.

Nunca guardes tokens de autenticación directamente en el repositorio.

## 🛠️ Configuración del entorno de desarrollo

Clona el repositorio e instala las dependencias:

```bash
git clone <url-del-repositorio>
cd satoshi-rc-ui
npm install
```

Compila la librería:

```bash
npm run build:lib
```

Compila y empaqueta la librería con validaciones completas:

```bash
npm run build
```

Explora los componentes en Storybook:

```bash
npm run storybook
```

Para desarrollo en tiempo real con un proyecto consumidor, consulta la seccion
[Desarrollo en tiempo real](#⚡-desarrollo-en-tiempo-real-con-un-proyecto-consumidor).

## 📦 Scripts disponibles

| Comando                 | Descripción                                                       |
| ----------------------- | ----------------------------------------------------------------- |
| `npm run storybook`     | Inicia Storybook para explorar los componentes.                   |
| `npm run dev:lib`       | Compila la librería en modo watch para desarrollo con `npm link`. |
| `npm run link:consumer` | Registra la librería globalmente (`npm link`) para desarrollo.    |
| `npm run build`         | Compila la aplicación o librería según la configuración de Vite.  |
| `npm run lint`          | Ejecuta ESLint para validar el código.                            |
| `npm run format`        | Formatea los archivos con Prettier.                               |
| `npm run format:check`  | Comprueba el formato sin modificar archivos.                      |
| `npm run package:lib`   | Ejecuta el proceso de empaquetado de la librería.                 |
| `npm run prepare`       | Inicializa los Git Hooks configurados.                            |

Los comandos disponibles dependen de los scripts definidos en `package.json`.
Ajusta esta tabla según la configuración real del proyecto.

En el proyecto consumidor (`starter-scaffolding-react-web`) están disponibles:

| Comando                        | Descripción                                              |
| ------------------------------ | -------------------------------------------------------- |
| `npm run ui:link:dev`          | Enlaza la librería local vía `npm link` para desarrollo. |
| `npm run ui:unlink:dev`        | Deshace el enlace y reinstala desde el `.tgz` local.     |
| `npm run ui:install:local`     | Instala la librería desde el `.tgz` de `resource/`.      |
| `npm run ui:install:published` | Instala la última versión publicada en el registro.      |

## ⚡ Desarrollo en tiempo real con un proyecto consumidor

Para ver los cambios de la librería reflejados al instante en un proyecto que la
consume (por ejemplo, una aplicación Vite + React), usa `npm link` junto con el
modo watch. No hace falta generar el `.tgz` ni reinstalar en cada cambio.

### 1. Enlazar la librería

En el repositorio de la librería:

```bash
npm run build:lib        # genera dist/ una sola vez
npm run link:consumer    # crea el enlace global (npm link)
```

En el proyecto consumidor:

```bash
npm run ui:link:dev      # enlaza la libreria (npm link satoshi-rc-ui)
```

Con esto, `node_modules/satoshi-rc-ui` apunta al repositorio de la librería.

### 2. Configurar Vite en el proyecto consumidor

Añade al `vite.config.ts` del proyecto consumidor:

```ts
export default defineConfig({
  // ...
  resolve: {
    dedupe: ["react", "react-dom"],
  },
  server: {
    fs: {
      allow: [".."],
    },
  },
});
```

- `server.fs.allow` permite a Vite servir los archivos del repositorio enlazado,
  que están fuera de la raíz del proyecto.
- `resolve.dedupe` garantiza una sola copia de React y evita el error "Invalid
  hook call" por duplicidad.

### 3. Compilar en modo watch

Deja corriendo en una terminal, dentro de la librería:

```bash
npm run dev:lib
```

Y en otra terminal, el servidor del proyecto consumidor:

```bash
npm run dev
```

Cada cambio en `src/` de la librería regenera `dist/` (JavaScript ESM y CJS,
declaraciones `.d.ts` y `style.css`) en unos segundos; al recargar el navegador
del consumidor se ven los cambios. Los cambios de tipos pueden requerir
reiniciar el TS server del editor.

### 4. Volver al modo producción

```bash
cd <proyecto-consumidor>
npm run ui:unlink:dev
```

Este comando deshace el enlace y reinstala la librería desde el `.tgz` local
(`resource/satoshi-rc-ui-<version>.tgz`, carpeta `resource/` del proyecto
consumidor).

## 🎨 Storybook con Docker

Storybook se puede desplegar como sitio estático en un contenedor, sin necesidad
de Node instalado en la máquina destino.

### Requisitos

- Docker con el plugin Compose.

### Desplegar

```bash
docker compose up -d --build
```

Storybook queda disponible en `http://localhost:8080`.

### Comandos útiles

| Comando                        | Descripción                          |
| ------------------------------ | ------------------------------------ |
| `docker compose up -d --build` | Reconstruye y levanta el contenedor. |
| `docker compose down`          | Detiene y elimina el contenedor.     |
| `docker compose logs -f`       | Muestra los logs del contenedor.     |

La imagen se construye en dos etapas: Node compila `npm run build:storybook` y
nginx sirve la salida estática de `docs/storybook` en el puerto 80.

### Desplegar en un servidor

Copia el contexto del repositorio al servidor y ejecuta
`docker compose up -d --build`, o publica la imagen en un registro:

```bash
docker tag satoshi-storybook:latest <registro>/<usuario>/satoshi-storybook:latest
docker push <registro>/<usuario>/satoshi-storybook:latest
```

## 🎨 Gestión de temas

La librería permite centralizar la configuración visual mediante proveedores de
temas y definiciones reutilizables.

Sus responsabilidades pueden incluir:

- Definir paletas de colores y tokens de diseño.
- Aplicar un tema seleccionado a los componentes.
- Resolver el tema inicial de la aplicación.
- Persistir las preferencias del usuario cuando esté implementado.
- Incorporar nuevos temas sin duplicar la lógica de los componentes.

Ejemplo de uso, si la librería exporta un `ThemeProvider`:

```tsx
import { ThemeProvider } from "@tu-organizacion/react-ui";

export function App() {
  return (
    <ThemeProvider>
      <main>
        <h1>Mi aplicación</h1>
      </main>
    </ThemeProvider>
  );
}
```

Adapta el import y las propiedades según la API pública real de la librería.

## 🌍 Internacionalización

La librería puede proporcionar un mecanismo centralizado para gestionar
traducciones y múltiples idiomas.

Sus responsabilidades pueden incluir:

- Administrar catálogos de traducciones.
- Resolver el idioma inicial.
- Definir un idioma de respaldo.
- Exponer utilidades o hooks de traducción.
- Persistir la preferencia de idioma cuando esté implementado.

Ejemplo de uso, si la librería exporta un `TranslateProvider`:

```tsx
import { TranslateProvider } from "@tu-organizacion/react-ui";

export function App() {
  return (
    <TranslateProvider>
      <main>
        <h1>Mi aplicación</h1>
      </main>
    </TranslateProvider>
  );
}
```

Consulta la API real del proveedor para conocer los idiomas soportados, los
catálogos y las opciones de configuración.

## 🧹 Calidad del código

### ESLint

ESLint identifica posibles errores y verifica el cumplimiento de las reglas de
calidad del código.

```bash
npm run lint
```

### Prettier

Formatea los archivos:

```bash
npm run format
```

Comprueba el formato sin modificar archivos:

```bash
npm run format:check
```

En los flujos de integración continua se recomienda comprobar el formato sin
modificar archivos.

### TypeScript

TypeScript ayuda a detectar errores de tipos y mantener una API pública
predecible.

Si la configuración del proyecto lo permite, ejecuta:

```bash
npx tsc --noEmit
```

Si existen configuraciones de TypeScript separadas, valida las correspondientes
a la aplicación y a las herramientas de Node.js.

## 🪝 Conventional Commits

El proyecto utiliza Conventional Commits para estandarizar los mensajes de
commit.

### Formato

```text
tipo(alcance): descripción
```

### Ejemplos

```text
feat(theme): agregar soporte para temas
fix(i18n): corregir la inicialización del idioma
refactor(hooks): simplificar la lógica de temas
docs(readme): actualizar las instrucciones de instalación
test(theme): agregar pruebas del proveedor
build(package): configurar el empaquetado
ci(actions): agregar flujo de despliegue
```

### Tipos de commit

| Tipo       | Uso                                                |
| ---------- | -------------------------------------------------- |
| `feat`     | Nuevas funcionalidades.                            |
| `fix`      | Correcciones de errores.                           |
| `refactor` | Reestructuración del código.                       |
| `test`     | Pruebas automatizadas.                             |
| `docs`     | Documentación.                                     |
| `style`    | Cambios de formato o estilo sin alterar la lógica. |
| `build`    | Compilación y dependencias.                        |
| `ci`       | Configuración de CI/CD.                            |
| `chore`    | Tareas de mantenimiento.                           |

### Git Hooks automatizados

Cuando los hooks locales están configurados (Husky, se inicializan con
`npm install` vía el script `prepare`), se ejecutan:

1. **pre-commit:** ESLint + comprobación de formato con Prettier + formateo.
2. **commit-msg:** Commitlint verifica que el mensaje cumpla con Conventional
   Commits.
3. **pre-push:** ESLint.

Si falla ESLint o el mensaje no cumple la convención, Git rechaza la operación.

## 📦 Empaquetado de la librería

Genera el paquete instalable:

```bash
npm run package:lib
```

El proceso de empaquetado debe:

1. Ejecutar las validaciones de formato y calidad configuradas.
2. Generar la compilación distribuible de la librería.
3. Empaquetar los archivos generados.
4. Guardar el archivo `.tgz` en `resources/`.

Asegúrate de incluir el JavaScript compilado, las declaraciones de TypeScript,
los recursos necesarios y los metadatos del paquete.

Los campos `main`, `module`, `types` y `exports` de `package.json` deben apuntar
a los archivos generados correspondientes, cuando aplique.

## ⚙️ GitHub Actions

GitHub Actions permite automatizar las validaciones y la distribución de la
librería.

### Validación de código y formato

El workflow de CI (`deploy.yml`) se ejecuta en los pushes y pull requests
dirigidos a `main` y `develop`. Las validaciones incluyen:

- Instalación de dependencias.
- Comprobación del formato con Prettier.
- Ejecución de ESLint.
- Ejecución de pruebas unitarias con Vitest.
- Compilación de la librería.

Otros workflows: `unit-tests.yml` (pruebas), `lint.yml` (lint y formato),
`commitlint.yml` (mensajes de commit), `security.yml` (auditoría de
dependencias) y `validate-kit.yml` (validación del kit de personalización).

### Despliegue del paquete

Actualmente el CI valida pero no publica ni adjunta artefactos. Para obtener el
paquete instalable, genera el `.tgz` localmente con `npm run package:lib` o
añade un paso de publicación al workflow cuando se necesite.

> Subir un artefacto a GitHub Actions no equivale a publicar la librería en npm
> o GitHub Packages.

## 🔐 Distribución privada

Para distribuir la librería de forma privada:

- Guarda los tokens en secretos de GitHub Actions o variables de entorno.
- Nunca incluyas credenciales en el código fuente.
- Otorga únicamente los permisos necesarios.
- Configura correctamente el registro y el alcance del paquete.
- Publica versiones identificables.
- Mantén un historial de cambios cuando corresponda.

## 📁 Estructura del proyecto

```text
satoshi-rc-ui/
├── .github/
│   ├── tools/              # validador del kit de personalizacion
│   ├── skills/             # skill ops-lifecycle
│   └── workflows/          # flujos de CI
├── scripts/
│   └── package-library.mjs # empaquetado de la libreria
├── src/
│   ├── assets/             # recursos estaticos
│   ├── libs/
│   │   ├── aplicacion/     # contexts, hooks, providers, services, utils
│   │   ├── domain/         # constants, enums, interface, types
│   │   ├── infraestructura/# storage
│   │   ├── presentation/   # atoms, molecules, organisms
│   │   ├── styles/
│   │   └── index.ts
│   ├── test/               # setup y utilidades de prueba
│   └── index.ts            # punto de entrada
├── stories/                # historias de Storybook
├── resources/              # paquetes .tgz generados
├── commitlint.config.cjs
├── eslint.config.js
├── vite.config.ts
├── vitest.config.ts
└── package.json
```

## 🤝 Guía de contribución

1. Crea una rama para la funcionalidad o corrección.
2. Realiza cambios pequeños, claros y mantenibles.
3. Ejecuta ESLint, las comprobaciones de formato y las pruebas disponibles.
4. Utiliza mensajes de commit que cumplan con Conventional Commits.
5. Abre un pull request hacia la rama de desarrollo correspondiente.

## 🔒 Licencia y propiedad intelectual

**Software propietario. Todos los derechos reservados.**

Esta librería es propiedad privada de sus titulares. Su código fuente,
componentes, diseños, documentación y demás materiales están protegidos por las
leyes aplicables de propiedad intelectual.

Queda prohibido, sin autorización previa y por escrito del titular:

- Copiar o redistribuir el código fuente o los paquetes compilados.
- Publicar, sublicenciar o comercializar la librería a terceros.
- Modificar o crear obras derivadas para su distribución externa.
- Compartir credenciales, archivos privados o acceso al repositorio.
- Utilizar la librería fuera del alcance de la autorización concedida.

El acceso al repositorio o la posibilidad de instalar el paquete no implica la
transferencia de propiedad ni la concesión de derechos de redistribución.

Cualquier permiso de uso debe ser autorizado expresamente por el titular y
limitarse a las condiciones acordadas.

Copyright © 2026. Todos los derechos reservados.
