import { useState } from "react";
import { DOSIFICACIONES } from "./concreto.data.js";

export function useConcreto() {
  const [dosifId, setDosifId] = useState("f210");
  const [volumen, setVolumen] = useState("3.00");
  const [proyecto, setProyecto] = useState("edificio");
  const [nivel, setNivel] = useState("nivel1");
  const [calculado, setCalculado] = useState(false);

  const dosif =
    DOSIFICACIONES.find((d) => d.id === dosifId) || DOSIFICACIONES[2];
  const vol = parseFloat(volumen) || 0;

  const resultados = {
    cemento: Math.ceil(dosif.cemento * vol),
    arena: (dosif.arena * vol).toFixed(2),
    piedra: (dosif.piedra * vol).toFixed(2),
    agua: Math.round(dosif.agua * vol),
  };

  const handleLimpiar = () => {
    setVolumen("3.00");
    setDosifId("f210");
    setProyecto("edificio");
    setNivel("nivel1");
    setCalculado(false);
  };

  return {
    dosifId,
    setDosifId,
    volumen,
    setVolumen,
    proyecto,
    setProyecto,
    nivel,
    setNivel,
    calculado,
    setCalculado,
    dosif,
    vol,
    resultados,
    handleLimpiar,
  };
}
