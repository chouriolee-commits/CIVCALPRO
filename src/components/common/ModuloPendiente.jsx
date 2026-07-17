// `modulo.icon` acepta un nodo React (p.ej. <Icon/>) para pseudo-módulos;
// `modulo.iconSrc` acepta una ruta de imagen para entradas de MODULES.
export function ModuloPendiente({ modulo }) {
  const icon = modulo.icon || <img src={modulo.iconSrc} alt={modulo.label} />;

  return (
    <div className="page">
      <div className="page-greeting">
        <h1>
          {icon} {modulo.label}
        </h1>
        <p>Este módulo está en desarrollo. Próximamente disponible.</p>
      </div>
      <div className="modulo-pendiente-box">
        <span style={{ fontSize: 48 }}>{icon}</span>
        <h3>{modulo.label}</h3>
        <p>
          La vista de este módulo será implementada en la siguiente fase del
          proyecto.
        </p>
      </div>
    </div>
  );
}
