# CivCalPro — Base de conocimiento interactiva

Documentación técnica navegable de todo el repositorio CivCalPro, generada a partir de lectura directa del código real (no genérica).

## Cómo abrirla

No requiere servidor ni build. Simplemente abre `index.html` en cualquier navegador moderno (doble clic, o `Ctrl+O` desde el navegador). Los 3 archivos deben mantenerse en la misma carpeta:

```
documentacion-civcalpro/
├── index.html    ← abre este archivo
├── styles.css
├── content.js    ← todo el contenido, código real y metadatos
├── app.js        ← navegación, búsqueda, render, interactividad
└── README.md
```

## Qué contiene

- **Inicio** — qué es CivCalPro y accesos rápidos a cada sección.
- **Arquitectura** — diagrama de capas (UI → estado → lógica de negocio → datos) y la evolución de un `App.jsx` monolítico a la estructura modular actual.
- **Tecnologías** — JavaScript, React, Vite, CSS y Node/npm explicados desde cero, con ejemplos tomados directamente del código de este proyecto (no ejemplos genéricos).
- **Módulos** — propósito, estado, componentes, lógica y datos de cada módulo de negocio (Cómputos Métricos, Concreto, Biblioteca, Estimación, Proyectos, Historial, Reportes, Configuración, Ayuda, Normas).
- **Explorador de archivos** — árbol real de `src/`, con código fuente completo y explicación por bloques para los archivos más importantes (marcados con contenido; el resto son navegables pero sin documentación profunda todavía).
- **Sistema de estilos** — cómo funcionan las variables CSS, la cascada, el responsive y el modo oscuro sin duplicar reglas.
- **Flujo de ejecución** — 3 acciones reales trazadas paso a paso, desde el evento del usuario hasta el re-render.
- **Ruta de aprendizaje** — 12 etapas progresivas con archivos a estudiar, ejercicios y preguntas de comprobación. El progreso se guarda en `localStorage` de tu navegador (clave `civcalpro_docs_progress`).

## Interactividad

- Búsqueda global (`Ctrl+K` o clic en el buscador) sobre secciones, módulos, archivos, tecnologías y etapas de aprendizaje.
- Resaltado de sintaxis básico y botón de copiar en cada bloque de código.
- Modo claro/oscuro (se recuerda entre visitas).
- Sidebar colapsable en desktop, menú tipo drawer en mobile (breakpoint 900px).

## Cómo se generó

Todo el contenido de `content.js` proviene de lectura directa de los archivos del repositorio en la fecha indicada en la cabecera de ese archivo (`meta.generadoEl`). Donde el código tiene inconsistencias reales (por ejemplo, archivos cuyo nombre no coincide con lo que exportan, o catálogos JSON vacíos), la documentación lo señala explícitamente en vez de asumir o inventar funcionalidad.

## Limitaciones conocidas

- Solo un subconjunto de archivos (los más importantes para entender la arquitectura, priorizando el módulo Cómputos Métricos como caso de estudio completo) tiene código fuente y explicación línea-por-línea embebidos. El resto del árbol de archivos es navegable pero muestra un mensaje de "sin documentación profunda todavía".
- No hay build ni proceso de regeneración automática: si el código de CivCalPro cambia, `content.js` debe actualizarse a mano (o pedirle a Claude Code que lo regenere) para reflejar los cambios.
