import { useState } from "react";
import { CATEGORIAS_MATERIALES } from "./biblioteca.data.js";

export function useBiblioteca() {
  const [busqueda, setBusqueda] = useState("");
  const [materialActivo, setMaterialActivo] = useState(
    CATEGORIAS_MATERIALES[0].materiales[0],
  );

  const categoriasFiltradas = CATEGORIAS_MATERIALES.map((cat) => ({
    ...cat,
    materiales: cat.materiales.filter((m) =>
      m.nombre.toLowerCase().includes(busqueda.toLowerCase()),
    ),
  })).filter((cat) => cat.materiales.length > 0);

  return {
    busqueda,
    setBusqueda,
    materialActivo,
    setMaterialActivo,
    categoriasFiltradas,
  };
}
