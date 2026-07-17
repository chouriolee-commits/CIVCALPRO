import { useState } from "react";
import { ACTIVIDADES_ESTIMACION } from "./estimacion.data.js";

export function useEstimacion() {
  const [actividadId, setActividadId] = useState("pintura");
  const [campos, setCampos] = useState({});
  const [calculado, setCalculado] = useState(false);

  const actividad = ACTIVIDADES_ESTIMACION.find((a) => a.id === actividadId);

  // Inicializa campos con defaults cuando cambia la actividad
  const handleActividad = (id) => {
    const act = ACTIVIDADES_ESTIMACION.find((a) => a.id === id);
    const defaults = {};
    act.campos.forEach((c) => {
      defaults[c.id] = c.default || "";
    });
    setActividadId(id);
    setCampos(defaults);
    setCalculado(false);
  };

  // Inicializa al montar
  useState(() => {
    handleActividad("pintura");
  }, []);

  const handleCampo = (id, val) => {
    setCampos((prev) => ({ ...prev, [id]: val }));
    setCalculado(false);
  };

  const resultado = calculado && actividad ? actividad.calcular(campos) : null;

  return {
    actividadId,
    campos,
    calculado,
    actividad,
    handleActividad,
    handleCampo,
    setCalculado,
    resultado,
  };
}
