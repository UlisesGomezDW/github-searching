# GitHub Searching

GitHub Searching es una herramienta que ofrece una experiencia única en la búsqueda de usuarios y repositorios públicos. Obteniendo datos oficiales de la API de Github.

El proyecto actualmente se puede consultar a trávez del siguiente [link](https://github-searching.vercel.app/).

## Motivos

GitHub es actualmente una de las herramientas más conocidas en el mundo tecnológico. Gran parte de sus usuarios son profesionales, estudiantes y personas interesadas en temas de programación.
La gran mayoría de usuarios tiene noción de como buscar algún usuario o repositorio de su interés. Sin embargo, las personas que no tienen conocimiento de GitHub suelen tardar en encontrar lo que desean buscar. En algunas ocaciones tienen el pensamiento que debe crearse una cuenta, lo cual no es necesario pero muchos lo suponen.

GitHub Searching, propone una solución a la búsqueda de usuarios y repositorios de forma directa y sencilla. Se ha pensado en la usabilidad y experiencia de usuario, por ende este proyecto contempla:

-   UX/UI similar al de GitHub
-   Adaptable (Diseño responsivo)
-   Soporte para PWA
-   Tema (Claro / Obscuro)

## Ejecución

En primera instancia se requiere _clonar_, el repositorio remoto a uno local en su propia computadora. Para ello es necesario escribir el siguiente comando en su terminal:

#### `git clone https://github.com/UlisesGomezDW/github-searching.git`

Para poder ejecutar el proyecto de forma local, es necesario instalar las dependencias, para ello se debe escribir y ejecutar el siguiente comando:

#### `yarn`

o bien,

#### `npm install`

Después de haber terminado, ejecutar el comando:

#### `yarn dev`

Si requiere ver una versión en producción, ejecute:

#### `yarn build`

Al terminar el proceso, ejecute:

#### `yarn start`

> Es requerido que en su navegador preferido, se diriga a la ruta: http://localhost:3000/

## Organización

La organización de archivos esta basada en los principios de la metodología **atomic design**. Fijando cada carpeta con el nombre preciso de lo que contiene. La estructura es la siguiente:

```bash
📦src
 ┣ 📂components
 ┃ ┣ 📂common
 ┃ ┗ 📂layout
 ┃ ┗ 📂sections
 ┣ 📂context
 ┣ 📂hooks
 ┣ 📂pages
 ┣ 📂services
 ┣ 📂styles
 ┣ 📂theme
 ┣ 📂types
 ┣ 📂utils

```

## Componentes de UI

Cada componente que se en la plataforma, esta ubicado con su respectivo nombre en la ruta: _/src/components/common_.

## Layout

La vista principal fue asignada en la carpeta **pages**, consideré esta sección para este y otros contenedores de vista que fuesen a existir. La vista se encuentra en _/src/components/pages_.

## Estilos

La guía y base de toda la arquitectura de estilos en el proyecto, se trabajó con Styled-Components. La configuración del tema de estilos, se puede encontrar en: _/src/theme/index.ts_. Consideré que cada componente tuviese su propio archivo de estilos (_index.styled.ts_), para tener ordenado y en caso de modificar algún archivo fuese lo más sencillo de encontrar y editar.

## Tema

El proyecto ocupa dos temas. La configuración del tema de colores, se puede encontrar en: _/src/theme/index.ts_. Para cada modo, hay un objeto de colores el cual puede cambiar de valor según lo amerite. El cambio de color en pantalla tiene una arquitectura de estado global, el cual puede encontrar en: _/src/context/theme.context.ts_.

## Hooks

Para el consumo de datos de la API requerida, se consideró interesante crear un hook personalizado que pudiese consultar la información de cualquier endpoint. "**useFetch**" fue pensado en poder ser útil para otras vistas.

## Soporte para PWA

Dado que le proyecto usa la metodología **"First Mobile"**, se planeó el uso de la librería _next-pwa_, la cual facilita el uso de esta caracteríztica en dispositivos móviles. Se cuentan con los recursos multimedia en _/public_, y la configuración en _/public/manifest.json_. En caso de requerir hacer configuraciones de la librería, el archivo indicado es: _/next.config.js_.

## SEO e información

La información que puede verse externamente del sitio se puede encontrar en: _/src/components/common/head/index.ts_.

## Código

Trabajar con una guía de escritura es muy importante. Por ello, en este proyecto se consideró adecuado usar **Prettier** para dar un formato estándar a todos los archivos, la configuración está en: _./.prettierrc_. De igual forma, se integró **ESLint** para detectar errores de sintaxis, la configuración está en: _./.eslintrc.json_. Para hacer un diagnóstico de sintaxis, se puede ejecutar el siguiente comando:

#### `yarn lint`

Otra de las opciones que se consideró para estandarizar el código del proyecto es el uso de hooks de husky. Antes de guardar un commit, considere ejecutar _yarn lint_, para observar que de acuerdo a las reglas estblecidas todo lo nuevo por agregar estuviese en orden.

## Flujo de trabajo (Versiones)

Se tuvo en cuenta trabajar el proyecto diviendo cada paso en una rama diferente. De este modo cada rama contiene una versión acorde al paso.

| Paso | Branch               |
| ---- | -------------------- |
| 1    | `feature/ui`         |
| 2    | `feature/connection` |
| 3    | `feature/landing`    |
| 4    | `feature/settings`   |

> La rama principal es **main**

## Aspectos de mejora

-   Predeterminar el tema elegido por el usuario o por el que esté usando en su dispositivo
-   Añadir "next-i18next" para la distribución de lenguajes a los que se pueda traducir el sitio
-   Test unitarios en componentes y funciones
