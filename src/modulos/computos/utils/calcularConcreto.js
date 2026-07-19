export function calcularConcretoColumna({ largo, ancho, altura, cantidad, desperdicioPct }) {
  const volumenUnitario = largo * ancho * altura;
  const volumenSinDesperdicio = volumenUnitario * cantidad;
  const volumenConDesperdicio = volumenSinDesperdicio * (1 + desperdicioPct / 100);

  return { volumenUnitario, volumenSinDesperdicio, volumenConDesperdicio };
}
