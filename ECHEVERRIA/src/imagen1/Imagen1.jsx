// IllusionInteractiva.jsx
import React, { useState } from "react";
import "./imagen1.css";

const THEMES = {
  classic: {
    label: "Efecto Clásico (Máximo)",
    lineColor: "#7f7f7f",
    dotColor: "#ffffff",
    background: "#000000",
    animated: false,
  },
  "low-contrast": {
    label: "Bajo Contraste (Falla)",
    lineColor: "#3a3a3a",
    dotColor: "#555555",
    background: "#1a1a1a",
    animated: false,
  },
  psychedelic: {
    label: "Psicodélico",
    lineColor: "#ff2fd6",
    dotColor: "#2fffe0",
    background: "#0a0015",
    animated: true,
  },
};

export default function Imagen1() {
  const [theme, setTheme] = useState("classic");
  const current = THEMES[theme];

  return (
    <div className="illusion-page">
      <div className="controls">
        {Object.entries(THEMES).map(([key, t]) => (
          <button
            key={key}
            className={theme === key ? "active" : ""}
            onClick={() => setTheme(key)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div
        className={`grid-container${current.animated ? " animated" : ""}`}
        style={{
          "--line-color": current.lineColor,
          "--dot-color": current.dotColor,
          "--bg-color": current.background,
        }}
      />

      <div className="info">
        Mové los ojos por la cuadrícula. ¿Ves los puntos negros parpadear? <br />
        <strong>Probá los botones</strong> para ver cómo cambia la percepción de tu cerebro.
      </div>
    </div>
  );
}