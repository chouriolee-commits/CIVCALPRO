export function validarPaso1(state) {
  const errores = {};
  if (!state.elemento) errores.elemento = "Selecciona un elemento";
  if (!state.proyecto) errores.proyecto = "Selecciona un proyecto";
  if (!state.nivel) errores.nivel = "Selecciona un nivel";
  return { valido: Object.keys(errores).length === 0, errores };
}

export function validarPaso2(state) {
  const errores = {};

  if (state.elemento !== "columna") {
    return { valido: true, errores };
  }

  const { largo, ancho, altura, cantidad } = state.geometria;
  if (!(Number(largo) > 0)) errores.largo = "El largo debe ser mayor a 0";
  if (!(Number(ancho) > 0)) errores.ancho = "El ancho debe ser mayor a 0";
  if (!(Number(altura) > 0)) errores.altura = "La altura debe ser mayor a 0";
  if (!(Number(cantidad) >= 1)) errores.cantidad = "La cantidad debe ser al menos 1";

  return { valido: Object.keys(errores).length === 0, errores };
}

export function validarPaso4(state) {
  const errores = {};
  if (!state.nombreCalculo || !state.nombreCalculo.trim()) {
    errores.nombreCalculo = "El nombre del cálculo es obligatorio";
  }
  return { valido: Object.keys(errores).length === 0, errores };
}
