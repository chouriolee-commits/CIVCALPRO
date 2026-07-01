# CLAUDE.md

Guía de contexto para Claude Code en este repositorio.

## Qué es este proyecto

`CivCalPro` es una aplicación web en `React + Vite` orientada a cálculos para construcción. La UI está pensada como un panel de trabajo con modo escritorio y modo móvil, y cubre estos módulos:

- Cómputos métricos
- Dosificación de concreto
- Biblioteca de materiales
- Estimación de materiales
- Proyectos
- Historial de cálculos
- Reportes

La aplicación guarda parte del estado en `localStorage` para conservar tema y datos básicos del usuario entre sesiones.

## Stack Actual

- React 19
- Vite 8
- JavaScript/JSX
- ESLint

No hay TypeScript en este proyecto.

## Comandos Reales

Usa estos scripts definidos en `package.json`:

- `npm run dev`: levanta el servidor de desarrollo
- `npm run build`: genera el build de producción
- `npm run preview`: sirve el build generado
- `npm run lint`: ejecuta ESLint sobre el repositorio

No existe un script de pruebas todavía.

## Estructura Del Proyecto

La aplicación está muy concentrada en pocos archivos. Hoy la mayor parte de la lógica vive en `src/App.jsx`.

- [`src/App.jsx`](/home/raftlee/Documentos/Workspace/civcalpro/src/App.jsx): contiene el enrutado manual, componentes de pantalla, datos de ejemplo y lógica de cada módulo
- [`src/App.css`](/home/raftlee/Documentos/Workspace/civcalpro/src/App.css): estilos principales de toda la interfaz
- [`src/index.css`](/home/raftlee/Documentos/Workspace/civcalpro/src/index.css): reset y estilos globales mínimos
- [`src/main.jsx`](/home/raftlee/Documentos/Workspace/civcalpro/src/main.jsx): punto de entrada de React
- [`src/data/*.json`](/home/raftlee/Documentos/Workspace/civcalpro/src/data): datos estáticos de referencia para dosificación, normas, rendimientos y materiales
- [`src/assets/img/*`](/home/raftlee/Documentos/Workspace/civcalpro/src/assets/img): iconografía e imágenes de la interfaz

Los archivos [`src/hooks/useProyecto.js`](/home/raftlee/Documentos/Workspace/civcalpro/src/hooks/useProyecto.js), [`src/hooks/useSync.js`](/home/raftlee/Documentos/Workspace/civcalpro/src/hooks/useSync.js), [`src/utils/calculos.js`](/home/raftlee/Documentos/Workspace/civcalpro/src/utils/calculos.js) y [`src/utils/exportar.js`](/home/raftlee/Documentos/Workspace/civcalpro/src/utils/exportar.js) existen, pero hoy están vacíos.

## Cómo Está Armada La App

### Navegación

- No usa React Router.
- El módulo activo se controla con estado local (`activeModule`).
- El layout cambia según escritorio o móvil.
- En móvil existe una vista separada para home, módulos y pantallas auxiliares.

### Persistencia

- `darkMode` se guarda en `localStorage` bajo la clave `theme`
- `user` se guarda en `localStorage` bajo la clave `user`
- El resto de la información mostrada en dashboard, proyectos e historial es mayormente mock o estática por ahora

### Responsividad

- Hay un layout de escritorio con sidebar fija y topbar
- Hay un layout móvil con topbar propia, navegación inferior y drawer lateral
- El breakpoint principal usado en el código es `768px`

## Componentes Importantes

En `src/App.jsx` viven varios componentes:

- `App`: raíz de la aplicación
- `Sidebar`: navegación principal de escritorio
- `Topbar`: encabezado de escritorio
- `MobileHome`: home móvil
- `MobileModulo`: render móvil por módulo
- `MobileHistorial`: historial móvil
- `MobileReportes`: reportes móvil
- `DesktopHome`: dashboard principal
- `ModuloProyectos`: vista de proyectos
- `ModuloComputos`: cómputos métricos
- `ModuloConcreto`: dosificación de concreto
- `ModuloBiblioteca`: ficha de materiales
- `ModuloEstimacion`: estimación por actividad
- `ModuloHistorial`: tabla con filtros y paginación
- `ModuloReportes`: panel de reportes
- `ModuloPendiente`: fallback para módulos no implementados

## Datos Y Catálogos

El archivo `src/App.jsx` incluye varios catálogos embebidos:

- `MODULES`: módulos principales y su metadata visual
- `ELEMENTOS`: elementos estructurales para cómputos
- `DOSIFICACIONES`: mezclas de concreto
- `CATEGORIAS_MATERIALES`: biblioteca técnica de materiales
- `ACTIVIDADES_ESTIMACION`: actividades con campos dinámicos y cálculos

También hay datos de ejemplo para:

- proyectos recientes
- historial de cálculos
- accesos rápidos
- estadísticas del dashboard

## Convenciones Útiles

- Mantén la UI en español.
- Conserva el comportamiento offline/local-first cuando sea posible.
- Si agregas una pantalla nueva, respeta el patrón actual de escritorio y móvil.
- Si mueves lógica fuera de `App.jsx`, hazlo de forma incremental porque hoy el archivo concentra casi todo.
- Cuando toques estilos, revisa tanto `App.css` como `index.css`, porque el tema oscuro depende de variables CSS globales.

## Cosas A Tener En Cuenta

- `npm run build` actualmente funciona.
- `npm run lint` hoy reporta errores reales en `src/App.jsx` y además intenta revisar dependencias generadas dentro de `.vite/` si ese directorio existe.
- Hay hooks y componentes que todavía parecen estar en fase de refactor, así que conviene revisar con cuidado cualquier cambio grande en `App.jsx`.
- Hay varias partes con datos mock; no asumir que todo proviene de una API.

## Prioridad De Trabajo

Si vas a ayudar a desarrollar este repositorio, el orden más seguro suele ser:

1. Entender primero `src/App.jsx`
2. Ver después `src/App.css`
3. Revisar `src/data/` si el cambio toca catálogos o cálculos
4. Validar con `npm run build` y `npm run lint`

