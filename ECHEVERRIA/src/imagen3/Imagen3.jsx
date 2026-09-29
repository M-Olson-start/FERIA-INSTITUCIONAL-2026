// Imagen3.jsx
import React from "react";
import "./Imagen3.css";

export default function Imagen3() {
  return (
    <div className="container">
      <div className="card">
        <h2>1. La Rejilla de Hermann</h2>

        <div className="hermann-wrapper">
          {Array.from({ length: 36 }).map((_, n) => (
            <div className="box" key={n} />
          ))}
        </div>

        <p>
          Mirá fijamente las intersecciones blancas de la cuadrícula. ¿Ves
          puntos grises que aparecen y desaparecen?
        </p>
        <p>
          <strong>Explicación:</strong> Esos puntos grises no existen en la
          pantalla. Tu cerebro los inventa debido a un fenómeno llamado
          "inhibición lateral" en la retina. Tu sistema visual distorsiona
          la realidad para tratar de entender los contrastes.
        </p>
      </div>
    </div>
  );
}