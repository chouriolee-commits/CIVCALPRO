// Pesos nominales (kg/m) de barras de acero de refuerzo corrugadas,
// según COVENIN 316 / equivalencia ASTM A615 (diámetros nominales en pulgadas).
// No existe una tabla previa en el repo (src/data/*.json están vacíos);
// esta es la única fuente de verdad hasta que se incorpore un catálogo oficial.
export const PESO_ACERO_KG_M = {
  "3/8": 0.559,
  "1/2": 0.994,
  "5/8": 1.552,
  "3/4": 2.235,
  "1": 3.973,
};

export const DIAMETROS_ACERO = Object.keys(PESO_ACERO_KG_M);
