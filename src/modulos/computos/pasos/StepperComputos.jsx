import { PASOS } from "../computos.data.js";

export function StepperComputos({ paso, mobile, onIrAPaso }) {
  if (mobile) {
    return (
      <div className="mobile-stepper">
        {PASOS.map((p) => (
          <div
            key={p.num}
            className={`mobile-step ${p.num < paso ? "done" : ""} ${p.num === paso ? "active" : ""}`}
          >
            <div className="mobile-step-num">{p.num}</div>
            <div className="mobile-step-label">{p.label}</div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="stepper-sidebar">
      <div className="stepper-sidebar-title">1. Cómputos Métricos</div>
      {PASOS.map((p) => (
        <div
          key={p.num}
          className={`stepper-step ${p.num === paso ? "active" : ""}`}
          onClick={() => p.num < paso && onIrAPaso?.(p.num)}
        >
          <div className="step-num">{p.num}</div>
          <div className="step-info">
            <strong>{p.label}</strong>
            <small>{p.sub}</small>
          </div>
        </div>
      ))}
    </div>
  );
}
