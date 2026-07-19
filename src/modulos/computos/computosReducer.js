export const estadoInicial = {
  paso: 1,

  elemento: "columna",
  proyecto: "edificio",
  nivel: "nivel1",
  descripcion: "",

  geometria: { largo: "0.30", ancho: "0.30", altura: "3.00", cantidad: "12" },
  resistenciaId: "f210",
  refuerzos: [],
  desperdicioConcreto: 5,

  resultados: null,

  nombreCalculo: "",
  observaciones: "",
  guardadoOk: false,
};

let contadorRefuerzo = 0;
function generarIdRefuerzo() {
  contadorRefuerzo += 1;
  return `refuerzo-${Date.now()}-${contadorRefuerzo}`;
}

export const TIPOS_ACCION = {
  SET_CAMPO_PASO1: "SET_CAMPO_PASO1",
  SET_GEOMETRIA: "SET_GEOMETRIA",
  SET_RESISTENCIA: "SET_RESISTENCIA",
  SET_DESPERDICIO: "SET_DESPERDICIO",
  AGREGAR_REFUERZO: "AGREGAR_REFUERZO",
  EDITAR_REFUERZO: "EDITAR_REFUERZO",
  ELIMINAR_REFUERZO: "ELIMINAR_REFUERZO",
  AVANZAR: "AVANZAR",
  RETROCEDER: "RETROCEDER",
  IR_A_PASO: "IR_A_PASO",
  SET_GUARDADO: "SET_GUARDADO",
  MARCAR_GUARDADO: "MARCAR_GUARDADO",
  RESET: "RESET",
};

export function computosReducer(state, action) {
  switch (action.type) {
    case TIPOS_ACCION.SET_CAMPO_PASO1:
      return { ...state, [action.campo]: action.valor };

    case TIPOS_ACCION.SET_GEOMETRIA:
      return {
        ...state,
        geometria: { ...state.geometria, [action.campo]: action.valor },
        resultados: null,
      };

    case TIPOS_ACCION.SET_RESISTENCIA:
      return { ...state, resistenciaId: action.resistenciaId, resultados: null };

    case TIPOS_ACCION.SET_DESPERDICIO:
      return { ...state, desperdicioConcreto: action.valor, resultados: null };

    case TIPOS_ACCION.AGREGAR_REFUERZO:
      return {
        ...state,
        refuerzos: [...state.refuerzos, { ...action.refuerzo, id: generarIdRefuerzo() }],
        resultados: null,
      };

    case TIPOS_ACCION.EDITAR_REFUERZO:
      return {
        ...state,
        refuerzos: state.refuerzos.map((r) =>
          r.id === action.id ? { ...r, ...action.cambios } : r
        ),
        resultados: null,
      };

    case TIPOS_ACCION.ELIMINAR_REFUERZO:
      return {
        ...state,
        refuerzos: state.refuerzos.filter((r) => r.id !== action.id),
        resultados: null,
      };

    case TIPOS_ACCION.AVANZAR:
      return {
        ...state,
        paso: Math.min(4, state.paso + 1),
        ...(action.resultados ? { resultados: action.resultados } : {}),
      };

    case TIPOS_ACCION.RETROCEDER:
      return { ...state, paso: Math.max(1, state.paso - 1) };

    case TIPOS_ACCION.IR_A_PASO:
      return { ...state, paso: Math.min(4, Math.max(1, action.paso)) };

    case TIPOS_ACCION.SET_GUARDADO:
      return { ...state, [action.campo]: action.valor };

    case TIPOS_ACCION.MARCAR_GUARDADO:
      return { ...state, guardadoOk: true };

    case TIPOS_ACCION.RESET:
      return { ...estadoInicial };

    default:
      return state;
  }
}
