export const SETTINGS_SECTIONS = [
  {
    key: "apariencia",
    label: "Apariencia",
    icon: "palette",
    desc: "Tema, tamaño y lenguaje",
  },
  {
    key: "dispositivo",
    label: "Dispositivo",
    icon: "monitor",
    desc: "Modo de operación y pantalla",
  },
  {
    key: "datos",
    label: "Datos",
    icon: "database",
    desc: "Autoguardar y limpieza",
  },
  {
    key: "exportacion",
    label: "Exportación",
    icon: "export",
    desc: "PDF, Excel y compartir",
  },
  {
    key: "acerca",
    label: "Acerca de",
    icon: "info",
    desc: "Versión y normas incluidas",
  },
];

export const THEME_OPTIONS = [
  { value: "light", label: "Claro" },
  { value: "dark", label: "Oscuro" },
  { value: "system", label: "Sistema" },
];

export const FONT_OPTIONS = [
  { value: "small", label: "Pequeño" },
  { value: "normal", label: "Normal" },
  { value: "large", label: "Grande" },
];

export const LANGUAGE_OPTIONS = [
  { value: "es", label: "Español" },
  { value: "en", label: "English" },
];

export const SETTINGS_COPY = {
  apariencia: {
    title: "Apariencia",
    subtitle: "Personaliza la interfaz visual de CivCalPro.",
  },
  dispositivo: {
    title: "Dispositivo",
    subtitle: "Ajustes pensados para escritorio y móvil.",
  },
  datos: {
    title: "Datos y almacenamiento",
    subtitle: "Controla lo que se guarda en este dispositivo.",
  },
  exportacion: {
    title: "Exportación",
    subtitle: "Prepara tus entregables para compartir o archivar.",
  },
  acerca: {
    title: "Acerca de CivCalPro",
    subtitle: "Estado general de la aplicación.",
  },
};
