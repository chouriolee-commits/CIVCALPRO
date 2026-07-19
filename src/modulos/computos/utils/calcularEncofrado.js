export function calcularEncofradoColumna({ largo, ancho, altura, cantidad }) {
  const perimetro = 2 * (largo + ancho);
  return perimetro * altura * cantidad;
}
