const ETIQUETA_TIPO = {
  longitudinal: "Barra longitudinal",
  estribo: "Estribo",
};

export function Paso3Resultados({ resultados, mobile }) {
  if (!resultados) {
    return (
      <div className="est-empty">
        <p>Vuelve al paso anterior e ingresa los datos para ver los resultados.</p>
      </div>
    );
  }

  const {
    concretoM3,
    volumenUnitarioM3,
    cantidadElementos,
    aceroKg,
    aceroDetalle,
    encofradoM2,
    desperdicioPct,
  } = resultados;

  return (
    <>
      <div className="comp-res-grid">
        <div className="comp-res-cell">
          <div className="comp-res-label">Concreto</div>
          <div className="comp-res-val">{concretoM3.toFixed(2)}</div>
          <div className="comp-res-unit">m³</div>
        </div>
        <div className="comp-res-cell">
          <div className="comp-res-label">Elementos</div>
          <div className="comp-res-val">{cantidadElementos}</div>
          <div className="comp-res-unit">unidades</div>
        </div>
        <div className="comp-res-cell">
          <div className="comp-res-label">Acero</div>
          <div className="comp-res-val">{aceroKg.toFixed(1)}</div>
          <div className="comp-res-unit">kg</div>
        </div>
        <div className="comp-res-cell">
          <div className="comp-res-label">Encofrado</div>
          <div className="comp-res-val">{encofradoM2.toFixed(2)}</div>
          <div className="comp-res-unit">m²</div>
        </div>
      </div>

      {aceroDetalle.length > 0 && (
        <div className="est-tabla-wrap" style={{ marginTop: 18 }}>
          <table className="est-tabla">
            <thead>
              <tr>
                <th>Elemento</th>
                <th>Cantidad</th>
                <th>Longitud</th>
                <th>Peso</th>
              </tr>
            </thead>
            <tbody>
              {aceroDetalle.map((d) => (
                <tr key={d.id}>
                  <td>{ETIQUETA_TIPO[d.tipo] || d.tipo} Ø {d.diametro}"</td>
                  <td>{d.cantidadPiezas}</td>
                  <td>{d.longitudTotal.toFixed(2)} m</td>
                  <td>{d.pesoKg.toFixed(1)} kg</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {mobile ? (
        <div className="mobile-result-box">
          <div className="mobile-result-cell">
            <label>Volumen unitario</label>
            <div className="val val-secondary">{volumenUnitarioM3.toFixed(2)} m³</div>
          </div>
          <div className="mobile-result-cell">
            <label>Volumen con desperdicio ({desperdicioPct}%)</label>
            <div className="val">{concretoM3.toFixed(2)} m³</div>
          </div>
        </div>
      ) : (
        <div className="result-bar">
          <span className="result-bar-left">
            Volumen unitario:&nbsp;&nbsp;
            <strong>{volumenUnitarioM3.toFixed(2)} m³</strong>
          </span>
          <span className="result-bar-right">
            Volumen con desperdicio ({desperdicioPct}%): {concretoM3.toFixed(2)} m³
          </span>
        </div>
      )}
    </>
  );
}
