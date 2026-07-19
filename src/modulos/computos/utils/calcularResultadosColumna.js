import { calcularConcretoColumna } from "./calcularConcreto.js";
import { calcularAcero } from "./calcularAcero.js";
import { calcularEncofradoColumna } from "./calcularEncofrado.js";

export function calcularResultadosColumna(state) {
  const geometria = {
    largo: Number(state.geometria.largo) || 0,
    ancho: Number(state.geometria.ancho) || 0,
    altura: Number(state.geometria.altura) || 0,
    cantidad: Number(state.geometria.cantidad) || 0,
  };
  const desperdicioPct = Number(state.desperdicioConcreto) || 0;

  const concreto = calcularConcretoColumna({ ...geometria, desperdicioPct });
  const acero = calcularAcero(state.refuerzos, geometria.cantidad, geometria);
  const encofradoM2 = calcularEncofradoColumna(geometria);

  return {
    volumenUnitarioM3: concreto.volumenUnitario,
    concretoM3: concreto.volumenConDesperdicio,
    cantidadElementos: geometria.cantidad,
    aceroKg: acero.pesoTotalKg,
    aceroDetalle: acero.detalle,
    encofradoM2,
    desperdicioPct,
  };
}
