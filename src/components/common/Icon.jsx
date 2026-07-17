import { createElement } from "react";
import { ICON_PATHS } from "../../data/icons.js";

// Componente delgado: arma <svg>{...elementos}</svg> a partir de las
// tuplas [tag, props] declaradas en data/icons.js.
export function Icon({ name, size = 18 }) {
  const shapes = ICON_PATHS[name] || [];

  return (
    <svg
      style={{
        width: `calc(${size}px * var(--app-scale, 1))`,
        height: `calc(${size}px * var(--app-scale, 1))`,
      }}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {shapes.map(([tag, props], index) =>
        createElement(tag, { key: index, ...props }),
      )}
    </svg>
  );
}
