export const DOSIFICACIONES = [
  {
    id: "f150",
    fc: "f'c = 150 kg/cm²",
    ratio: "1 : 3 : 6",
    desc: "Replantillos, andenes, pisos",
    cemento: 5.5, // sacos por m³
    arena: 0.56, // m³ por m³ de concreto
    piedra: 0.84, // m³ por m³ de concreto
    agua: 216, // litros por m³
    pesoSaco: 42.5,
  },
  {
    id: "f180",
    fc: "f'c = 180 kg/cm²",
    ratio: "1 : 2.5 : 4",
    desc: "Losas, escaleras, muros",
    cemento: 6.5,
    arena: 0.52,
    piedra: 0.74,
    agua: 204,
    pesoSaco: 42.5,
  },
  {
    id: "f210",
    fc: "f'c = 210 kg/cm²",
    ratio: "1 : 1.5 : 3",
    desc: "Columnas, vigas, cimentaciones",
    cemento: 7.0,
    arena: 0.5,
    piedra: 0.7,
    agua: 195,
    pesoSaco: 42.5,
  },
];
