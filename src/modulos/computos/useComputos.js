import { useState } from "react";

const calcularVolumen = ({ largo, ancho, altura, cantidad = 1 }) => {
  const volumenUnitario =
    (Number(largo) || 0) * (Number(ancho) || 0) * (Number(altura) || 0);
  const volumenTotal = volumenUnitario * (Number(cantidad) || 0);

  return { volumenUnitario, volumenTotal };
};

export function useComputos() {
  const [elemento, setElemento] = useState("columna");
  const [largo, setLargo] = useState("0.30");
  const [ancho, setAncho] = useState("0.30");
  const [altura, setAltura] = useState("3.00");
  const [cantidad, setCantidad] = useState("12");

  const { volumenUnitario: volUnitario, volumenTotal: volTotal } =
    calcularVolumen({ largo, ancho, altura, cantidad });

  return {
    elemento,
    setElemento,
    largo,
    setLargo,
    ancho,
    setAncho,
    altura,
    setAltura,
    cantidad,
    setCantidad,
    volUnitario,
    volTotal,
  };
}
