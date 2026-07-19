import { useReducer } from "react";
import { usePersistentState } from "../../hooks/useProyecto.js";
import { computosReducer, estadoInicial, TIPOS_ACCION } from "./computosReducer.js";
import { validarPaso1, validarPaso2, validarPaso4 } from "./validaciones.js";
import { calcularResultadosColumna } from "./utils/calcularResultadosColumna.js";

export function useComputos() {
  const [state, dispatch] = useReducer(computosReducer, estadoInicial);
  const [guardados, setGuardados] = usePersistentState("computos_guardados", []);

  const validacionPaso1 = validarPaso1(state);
  const validacionPaso2 = validarPaso2(state);
  const validacionPaso4 = validarPaso4(state);

  function irSiguiente() {
    if (state.paso === 1 && !validacionPaso1.valido) return;
    if (state.paso === 2 && !validacionPaso2.valido) return;

    if (state.paso === 2) {
      const resultados = calcularResultadosColumna(state);
      dispatch({ type: TIPOS_ACCION.AVANZAR, resultados });
      return;
    }

    dispatch({ type: TIPOS_ACCION.AVANZAR });
  }

  function irAtras() {
    dispatch({ type: TIPOS_ACCION.RETROCEDER });
  }

  function irAPaso(paso) {
    dispatch({ type: TIPOS_ACCION.IR_A_PASO, paso });
  }

  function guardarComputo() {
    if (!validacionPaso4.valido) return;

    const registro = {
      id: `calculo-${Date.now()}`,
      fecha: new Date().toISOString(),
      proyecto: state.proyecto,
      nivel: state.nivel,
      elemento: state.elemento,
      nombre: state.nombreCalculo,
      geometria: state.geometria,
      resistenciaId: state.resistenciaId,
      refuerzos: state.refuerzos,
      resultados: state.resultados,
      observaciones: state.observaciones,
    };

    setGuardados((prev) => [...(prev || []), registro]);
    dispatch({ type: TIPOS_ACCION.MARCAR_GUARDADO });
  }

  function nuevoCalculo() {
    dispatch({ type: TIPOS_ACCION.RESET });
  }

  return {
    state,
    dispatch,
    guardados,
    validacionPaso1,
    validacionPaso2,
    validacionPaso4,
    irSiguiente,
    irAtras,
    irAPaso,
    guardarComputo,
    nuevoCalculo,
  };
}
