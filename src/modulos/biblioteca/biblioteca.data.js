export const CATEGORIAS_MATERIALES = [
  {
    id: "estructurales",
    label: "Estructurales",
    color: "#7C3AED",
    materiales: [
      {
        id: "acero",
        nombre: "Acero de Refuerzo",
        categoria: "Material estructural · Metálico",
        norma: "COVENIN 1618",
        icono: "tools",
        propiedades: [
          {
            label: "Densidad / Peso específico",
            valor: "7,850",
            unidad: "kg/m³",
          },
          { label: "Módulo de elasticidad", valor: "200,000", unidad: "MPa" },
          { label: "Límite de fluencia fy", valor: "4,200", unidad: "kg/cm²" },
          { label: "Resistencia a tensión", valor: "6,300", unidad: "kg/cm²" },
        ],
        presentaciones: [
          'Ø 3/8" (9.5 mm)',
          'Ø 1/2" (12.7 mm)',
          'Ø 5/8" (15.9 mm)',
          'Ø 3/4" (19.1 mm)',
          'Ø 1" (25.4 mm)',
        ],
        usos: [
          "Vigas y columnas",
          "Losas de entrepiso",
          "Cimentaciones",
          "Muros estructurales",
        ],
        normas: [
          { codigo: "COVENIN 1638", desc: "Barras de acero de refuerzo" },
          { codigo: "ASTM A615", desc: "Grado 60" },
        ],
      },
      {
        id: "concreto_mat",
        nombre: "Concreto Estructural",
        categoria: "Material estructural · Pétreo",
        norma: "COVENIN 1753",
        icono: "building",
        propiedades: [
          { label: "Densidad", valor: "2,400", unidad: "kg/m³" },
          { label: "Resistencia f'c", valor: "210", unidad: "kg/cm²" },
          { label: "Módulo de Young", valor: "21,538", unidad: "MPa" },
          { label: "Coef. de Poisson", valor: "0.20", unidad: "" },
        ],
        presentaciones: [
          "f'c 150 kg/cm²",
          "f'c 180 kg/cm²",
          "f'c 210 kg/cm²",
          "f'c 250 kg/cm²",
        ],
        usos: ["Columnas", "Vigas", "Losas", "Fundaciones"],
        normas: [
          { codigo: "COVENIN 1753", desc: "Estructuras de concreto armado" },
          { codigo: "COVENIN 633", desc: "Cemento Portland" },
        ],
      },
      {
        id: "bloque_arcilla",
        nombre: "Bloque de Arcilla",
        categoria: "Material de mampostería · Cerámico",
        norma: "COVENIN 42",
        icono: "layout-board",
        propiedades: [
          { label: "Densidad", valor: "1,800", unidad: "kg/m³" },
          { label: "Resistencia compresión", valor: "40", unidad: "kg/cm²" },
          { label: "Absorción de agua", valor: "< 15", unidad: "%" },
          { label: "Dimensiones", valor: "40×20×15", unidad: "cm" },
        ],
        presentaciones: ["Bloque 10 cm", "Bloque 15 cm", "Bloque 20 cm"],
        usos: [
          "Paredes interiores",
          "Paredes exteriores",
          "Tabiques divisorios",
        ],
        normas: [
          { codigo: "COVENIN 42", desc: "Bloques y ladrillos de arcilla" },
        ],
      },
      {
        id: "bloque_concreto",
        nombre: "Bloque de Concreto",
        categoria: "Material de mampostería · Pétreo",
        norma: "COVENIN 28",
        icono: "layout-board",
        propiedades: [
          { label: "Densidad", valor: "2,000", unidad: "kg/m³" },
          { label: "Resistencia compresión", valor: "50", unidad: "kg/cm²" },
          { label: "Absorción de agua", valor: "< 10", unidad: "%" },
          { label: "Dimensiones", valor: "40×20×15", unidad: "cm" },
        ],
        presentaciones: ["Bloque 10 cm", "Bloque 15 cm", "Bloque 20 cm"],
        usos: ["Paredes de carga", "Cercos", "Muros de contención"],
        normas: [
          { codigo: "COVENIN 28", desc: "Bloques de concreto para paredes" },
        ],
      },
    ],
  },
  {
    id: "aridos",
    label: "Áridos",
    color: "#F59E0B",
    materiales: [
      {
        id: "arena",
        nombre: "Arena Fina",
        categoria: "Árido fino · Natural",
        norma: "COVENIN 277",
        icono: "triangle",
        propiedades: [
          { label: "Densidad aparente", valor: "1,600", unidad: "kg/m³" },
          { label: "Tamaño máximo", valor: "4.75", unidad: "mm" },
          { label: "Módulo de finura", valor: "2.3 – 3.1", unidad: "" },
          { label: "Contenido de finos", valor: "< 5", unidad: "%" },
        ],
        presentaciones: ["Arena lavada", "Arena de río", "Arena de cantera"],
        usos: [
          "Mezclas de concreto",
          "Morteros",
          "Rellenos",
          "Pega de bloques",
        ],
        normas: [
          {
            codigo: "COVENIN 277",
            desc: "Áridos para concreto de cemento Portland",
          },
        ],
      },
      {
        id: "grava",
        nombre: "Grava / Piedra Picada",
        categoria: "Árido grueso · Natural",
        norma: "COVENIN 277",
        icono: "circle",
        propiedades: [
          { label: "Densidad aparente", valor: "1,550", unidad: "kg/m³" },
          { label: "Tamaño máximo", valor: "25", unidad: "mm" },
          { label: "Desgaste Los Ángeles", valor: "< 40", unidad: "%" },
          { label: "Absorción", valor: "< 2", unidad: "%" },
        ],
        presentaciones: ['Grava 3/4"', 'Grava 1/2"', 'Grava 3/8"'],
        usos: ["Mezclas de concreto", "Drenajes", "Rellenos granulares"],
        normas: [
          {
            codigo: "COVENIN 277",
            desc: "Áridos para concreto de cemento Portland",
          },
        ],
      },
      {
        id: "cemento",
        nombre: "Cemento Portland",
        categoria: "Aglomerante hidráulico",
        norma: "COVENIN 633",
        icono: "package",
        propiedades: [
          { label: "Peso por saco", valor: "42.5", unidad: "kg" },
          { label: "Densidad", valor: "1,500", unidad: "kg/m³" },
          { label: "Resistencia 28 días", valor: "350", unidad: "kg/cm²" },
          { label: "Fraguado inicial", valor: "≥ 45", unidad: "min" },
        ],
        presentaciones: [
          "Tipo I (uso general)",
          "Tipo II (moderado)",
          "Tipo V (sulfatorresistente)",
        ],
        usos: [
          "Concreto estructural",
          "Morteros",
          "Pega de bloques",
          "Repello",
        ],
        normas: [
          {
            codigo: "COVENIN 633",
            desc: "Cemento Portland — especificaciones",
          },
        ],
      },
    ],
  },
  {
    id: "acabados",
    label: "Acabados",
    color: "#10B981",
    materiales: [
      {
        id: "pintura",
        nombre: "Pintura de Caucho",
        categoria: "Acabado superficial · Látex",
        norma: "COVENIN 1292",
        icono: "paint",
        propiedades: [
          { label: "Rendimiento", valor: "30", unidad: "m² / galón" },
          { label: "Tiempo de secado", valor: "2 – 4", unidad: "horas" },
          { label: "Dilución máxima", valor: "10", unidad: "%" },
          { label: "N° de manos", valor: "2", unidad: "manos" },
        ],
        presentaciones: [
          "Galón (3.78 L)",
          "Cuñete (18.9 L)",
          "Cubeta (3.78 L)",
        ],
        usos: ["Paredes interiores", "Paredes exteriores", "Cielos rasos"],
        normas: [
          {
            codigo: "COVENIN 1292",
            desc: "Pinturas y barnices — terminología",
          },
        ],
      },
      {
        id: "ceramica",
        nombre: "Cerámica para Piso",
        categoria: "Acabado de piso · Cerámico",
        norma: "COVENIN 1335",
        icono: "layout-grid",
        propiedades: [
          { label: "Rendimiento", valor: "1.10", unidad: "m² / m²" },
          { label: "Absorción de agua", valor: "< 3", unidad: "%" },
          { label: "Resistencia al desgaste", valor: "PEI 4", unidad: "" },
          { label: "Espesor", valor: "8 – 10", unidad: "mm" },
        ],
        presentaciones: ["30×30 cm", "40×40 cm", "45×45 cm", "60×60 cm"],
        usos: ["Pisos interiores", "Pisos exteriores", "Baños", "Cocinas"],
        normas: [
          {
            codigo: "COVENIN 1335",
            desc: "Baldosas cerámicas — clasificación",
          },
        ],
      },
      {
        id: "porcelanato",
        nombre: "Porcelanato",
        categoria: "Acabado de piso · Gres porcelánico",
        norma: "COVENIN 1335",
        icono: "layout-grid",
        propiedades: [
          { label: "Rendimiento", valor: "1.10", unidad: "m² / m²" },
          { label: "Absorción de agua", valor: "< 0.5", unidad: "%" },
          { label: "Resistencia al desgaste", valor: "PEI 5", unidad: "" },
          { label: "Espesor", valor: "9 – 12", unidad: "mm" },
        ],
        presentaciones: ["60×60 cm", "60×120 cm", "80×80 cm", "120×120 cm"],
        usos: ["Pisos de alto tráfico", "Fachadas", "Zonas húmedas"],
        normas: [
          {
            codigo: "COVENIN 1335",
            desc: "Baldosas cerámicas — gres porcelánico",
          },
        ],
      },
    ],
  },
];
