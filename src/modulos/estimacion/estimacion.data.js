export const ACTIVIDADES_ESTIMACION = [
  {
    id: "pintura",
    label: "Pintura",
    icon: "paint",
    campos: [
      { id: "area", label: "Área total (m²)", tipo: "number", default: "120" },
      { id: "manos", label: "N° de manos", tipo: "number", default: "2" },
      {
        id: "tipo",
        label: "Tipo de pintura",
        tipo: "select",
        opciones: [
          "Pintura de caucho interior",
          "Pintura de caucho exterior",
          "Pintura al aceite",
        ],
      },
      {
        id: "proyecto",
        label: "Proyecto",
        tipo: "select",
        opciones: [
          "Edif. Residencial - Santa Marta",
          "C. Comercial - Barranquilla",
          "Otro",
        ],
      },
    ],
    calcular: (campos) => {
      const area = parseFloat(campos.area) || 0;
      const manos = parseFloat(campos.manos) || 1;
      const rendPintura = 30;
      const rendSellador = 35;
      const galPintura = Math.ceil((area * manos) / rendPintura);
      const galSellador = Math.ceil(area / rendSellador);
      const rodillos = Math.ceil(area / 60);
      return {
        filas: [
          {
            material: "Pintura de caucho",
            rendimiento: `${rendPintura} m² / galón`,
            cantidad: galPintura,
            unidad: "galones",
            obs: `${manos} mano(s) × ${Math.ceil(area / rendPintura)} gal/mano`,
          },
          {
            material: "Sellador / base",
            rendimiento: `${rendSellador} m² / galón`,
            cantidad: galSellador,
            unidad: "galones",
            obs: "1 mano antes de pintura",
          },
          {
            material: 'Rodillo de 9"',
            rendimiento: "—",
            cantidad: rodillos,
            unidad: "unidades",
            obs: "Estimado por área",
          },
          {
            material: "Bandeja",
            rendimiento: "—",
            cantidad: rodillos,
            unidad: "unidades",
            obs: "Una por rodillo",
          },
        ],
        resumen: [
          { label: "Área calculada", valor: `${area} m²` },
          { label: "Rendimiento promedio", valor: `${rendPintura} m²/gal` },
          {
            label: "Total pintura principal",
            valor: `${galPintura} galones`,
            destacado: true,
          },
        ],
      };
    },
  },
  {
    id: "ceramica",
    label: "Cerámica",
    icon: "layout-grid",
    campos: [
      {
        id: "area",
        label: "Área a cubrir (m²)",
        tipo: "number",
        default: "85",
      },
      {
        id: "desperdicio",
        label: "% Desperdicio",
        tipo: "number",
        default: "10",
      },
      {
        id: "formato",
        label: "Formato de pieza",
        tipo: "select",
        opciones: ["30×30 cm", "40×40 cm", "45×45 cm", "60×60 cm"],
      },
      {
        id: "proyecto",
        label: "Proyecto",
        tipo: "select",
        opciones: [
          "Edif. Residencial - Santa Marta",
          "C. Comercial - Barranquilla",
          "Otro",
        ],
      },
    ],
    calcular: (campos) => {
      const area = parseFloat(campos.area) || 0;
      const desperdicio = parseFloat(campos.desperdicio) || 10;
      const totalArea = area * (1 + desperdicio / 100);
      const pegamento = Math.ceil(totalArea / 5);
      const fragua = Math.ceil(totalArea / 10);
      return {
        filas: [
          {
            material: "Cerámica",
            rendimiento: "1 m² / m²",
            cantidad: totalArea.toFixed(2),
            unidad: "m²",
            obs: `Incluye ${desperdicio}% desperdicio`,
          },
          {
            material: "Pegamento",
            rendimiento: "5 m² / saco",
            cantidad: pegamento,
            unidad: "sacos",
            obs: "Saco de 25 kg",
          },
          {
            material: "Fragua",
            rendimiento: "10 m² / kg",
            cantidad: fragua,
            unidad: "kg",
            obs: "Según junta",
          },
        ],
        resumen: [
          { label: "Área neta", valor: `${area} m²` },
          { label: "Con desperdicio", valor: `${totalArea.toFixed(2)} m²` },
          {
            label: "Cerámica total",
            valor: `${totalArea.toFixed(2)} m²`,
            destacado: true,
          },
        ],
      };
    },
  },
  {
    id: "repello",
    label: "Repello / Friso",
    icon: "wall",
    campos: [
      {
        id: "area",
        label: "Área de pared (m²)",
        tipo: "number",
        default: "60",
      },
      { id: "espesor", label: "Espesor (cm)", tipo: "number", default: "1.5" },
      {
        id: "tipo",
        label: "Tipo de mezcla",
        tipo: "select",
        opciones: [
          "1:4 (cemento:arena)",
          "1:3 (cemento:arena)",
          "1:6 (cemento:arena)",
        ],
      },
      {
        id: "proyecto",
        label: "Proyecto",
        tipo: "select",
        opciones: [
          "Edif. Residencial - Santa Marta",
          "C. Comercial - Barranquilla",
          "Otro",
        ],
      },
    ],
    calcular: (campos) => {
      const area = parseFloat(campos.area) || 0;
      const espesor = parseFloat(campos.espesor) || 1.5;
      const vol = area * (espesor / 100);
      const sacos = Math.ceil(vol * 8);
      const arena = parseFloat((vol * 0.04).toFixed(3));
      return {
        filas: [
          {
            material: "Cemento",
            rendimiento: "8 sacos / m³",
            cantidad: sacos,
            unidad: "sacos",
            obs: "Mezcla 1:4",
          },
          {
            material: "Arena",
            rendimiento: "0.04 m³ / m²",
            cantidad: arena,
            unidad: "m³",
            obs: `Espesor ${espesor} cm`,
          },
        ],
        resumen: [
          { label: "Área total", valor: `${area} m²` },
          { label: "Volumen mezcla", valor: `${vol.toFixed(3)} m³` },
          { label: "Cemento total", valor: `${sacos} sacos`, destacado: true },
        ],
      };
    },
  },
  {
    id: "enchape",
    label: "Enchape",
    icon: "layers-intersect",
    campos: [
      { id: "area", label: "Área (m²)", tipo: "number", default: "40" },
      {
        id: "desperdicio",
        label: "% Desperdicio",
        tipo: "number",
        default: "10",
      },
      {
        id: "formato",
        label: "Formato de pieza",
        tipo: "select",
        opciones: ["20×40 cm", "30×60 cm", "45×90 cm", "60×120 cm"],
      },
      {
        id: "proyecto",
        label: "Proyecto",
        tipo: "select",
        opciones: [
          "Edif. Residencial - Santa Marta",
          "C. Comercial - Barranquilla",
          "Otro",
        ],
      },
    ],
    calcular: (campos) => {
      const area = parseFloat(campos.area) || 0;
      const desperdicio = parseFloat(campos.desperdicio) || 10;
      const totalArea = area * (1 + desperdicio / 100);
      const pegamento = Math.ceil(totalArea / 4);
      const fragua = Math.ceil(totalArea / 8);
      return {
        filas: [
          {
            material: "Porcelanato / enchape",
            rendimiento: "1 m² / m²",
            cantidad: totalArea.toFixed(2),
            unidad: "m²",
            obs: `Incluye ${desperdicio}% desperdicio`,
          },
          {
            material: "Pegamento especial",
            rendimiento: "4 m² / saco",
            cantidad: pegamento,
            unidad: "sacos",
            obs: "Saco de 25 kg",
          },
          {
            material: "Fragua epoxi",
            rendimiento: "8 m² / kg",
            cantidad: fragua,
            unidad: "kg",
            obs: "Junta fina",
          },
        ],
        resumen: [
          { label: "Área neta", valor: `${area} m²` },
          { label: "Con desperdicio", valor: `${totalArea.toFixed(2)} m²` },
          {
            label: "Enchape total",
            valor: `${totalArea.toFixed(2)} m²`,
            destacado: true,
          },
        ],
      };
    },
  },
];
