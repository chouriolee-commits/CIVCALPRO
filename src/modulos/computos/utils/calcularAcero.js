import { PESO_ACERO_KG_M } from "./pesoAcero.data.js";

function calcularLongitudinal(refuerzo, cantidadElementos) {
  const longitudTotal = refuerzo.cantidad * refuerzo.longitudUnitaria * cantidadElementos;
  return { longitudTotal, cantidadPiezas: refuerzo.cantidad * cantidadElementos };
}

function calcularEstribo(refuerzo, cantidadElementos, geometria) {
  const numEstribos = Math.ceil(geometria.altura / refuerzo.separacion) + 1;
  const perimetro = 2 * (geometria.largo + geometria.ancho);
  const cantidadPiezas = numEstribos * cantidadElementos;
  const longitudTotal = cantidadPiezas * perimetro;
  return { longitudTotal, cantidadPiezas };
}

export function calcularAcero(refuerzos, cantidadElementos, geometria) {
  const detalle = refuerzos.map((refuerzo) => {
    const { longitudTotal, cantidadPiezas } =
      refuerzo.tipo === "estribo"
        ? calcularEstribo(refuerzo, cantidadElementos, geometria)
        : calcularLongitudinal(refuerzo, cantidadElementos);

    const pesoKgM = PESO_ACERO_KG_M[refuerzo.diametro] || 0;
    const pesoKg = longitudTotal * pesoKgM;

    return {
      id: refuerzo.id,
      tipo: refuerzo.tipo,
      diametro: refuerzo.diametro,
      cantidadPiezas,
      longitudTotal,
      pesoKg,
    };
  });

  const pesoTotalKg = detalle.reduce((acc, d) => acc + d.pesoKg, 0);

  return { detalle, pesoTotalKg };
}
