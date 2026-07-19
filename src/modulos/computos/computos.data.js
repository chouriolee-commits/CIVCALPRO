import columnaImg from "../../assets/img/columna.png";
import vigaImg from "../../assets/img/viga.png";
import losaImg from "../../assets/img/losa.png";
import muroImg from "../../assets/img/muro.png";
import zapataImg from "../../assets/img/zapata.png";
import pisoImg from "../../assets/img/piso.png";
import excavacionImg from "../../assets/img/excavacion.png";
import otroImg from "../../assets/img/otro.png";

// `iconSrc` reemplaza al antiguo `icon: <img .../>` (JSX no permitido
// en un archivo .js); cada consumidor arma <img src={el.iconSrc}/>.
export const ELEMENTOS = [
  { id: "columna", label: "Columna", iconSrc: columnaImg },
  { id: "viga", label: "Viga", iconSrc: vigaImg },
  { id: "losa", label: "Losa", iconSrc: losaImg },
  { id: "muro", label: "Muro", iconSrc: muroImg },
  { id: "zapata", label: "Zapata", iconSrc: zapataImg },
  { id: "piso", label: "Piso", iconSrc: pisoImg },
  { id: "excavacion", label: "Excavación", iconSrc: excavacionImg },
  { id: "otro", label: "Otro", iconSrc: otroImg },
];

export const PASOS = [
  {
    num: 1,
    label: "Seleccionar elemento",
    sub: "Elige el tipo de elemento a calcular",
  },
  {
    num: 2,
    label: "Ingresar dimensiones",
    sub: "Ingresa las medidas requeridas",
  },
  { num: 3, label: "Resultados", sub: "Visualiza los resultados del cálculo" },
  { num: 4, label: "Guardar", sub: "Guarda el cómputo en tu proyecto" },
];

// Elementos con formulario de dimensiones implementado; el resto muestra
// un aviso de "próximamente" en el paso 2 sin bloquear la navegación.
export const ELEMENTOS_DISPONIBLES = ["columna"];

export const RESISTENCIAS_CONCRETO = [
  { id: "f180", label: "f'c = 180 kg/cm²" },
  { id: "f210", label: "f'c = 210 kg/cm²" },
  { id: "f240", label: "f'c = 240 kg/cm²" },
];

export const TIPOS_REFUERZO = [
  { id: "longitudinal", label: "Barra longitudinal" },
  { id: "estribo", label: "Estribo" },
];
