import { useEffect, useRef, useState } from "react";
import { Icon } from "./common/Icon.jsx";

export function LearnButton({ className = "" }) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <div className={`learn-btn-wrapper ${className}`.trim()} ref={wrapperRef}>
      <button
        className="theme-btn learn-btn"
        onClick={() => setOpen((v) => !v)}
        aria-label="Documentación de CivCalPro"
        aria-expanded={open}
        type="button"
      >
        <Icon name="code" size={18} />
      </button>

      {open && (
        <div className="learn-btn-popover">
          <a
            className="learn-btn-option"
            href="/documentacion-civcalpro/index.html"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            <Icon name="book" size={16} />
            Aprender CivCalPro
          </a>
        </div>
      )}
    </div>
  );
}
