// Imagen6.jsx
import React from "react";
import "./Imagen6.css";

export default function Imagen6() {
  return (
    <div className="container">
      <div className="card">
        <h2>La Ilusión del Contraste y la Sombra</h2>
        <p>
          Observá atentamente los dos cuadrados etiquetados con{" "}
          <strong>A</strong> y <strong>B</strong>. ¿Parece que el cuadrado A
          es mucho más oscuro que el B?
        </p>

        <div className="checker-container">
          {/* Tablero de ajedrez en CSS puro */}
          <div className="board">
            <div className="row">
              <div className="sq w"></div>
              <div className="sq b"></div>
              <div className="sq w"></div>
              <div className="sq b"></div>
            </div>
            <div className="row">
              <div className="sq b"></div>
              <div className="sq w label-a">A</div>
              <div className="sq b"></div>
              <div className="sq w"></div>
            </div>
            <div className="row">
              <div className="sq w"></div>
              <div className="sq b"></div>
              <div className="sq w"></div>
              <div className="sq b"></div>
            </div>
            <div className="row">
              <div className="sq b"></div>
              <div className="sq w"></div>
              <div className="sq b label-b">B</div>
              <div className="sq w"></div>
            </div>
          </div>
          {/* Sombra proyectada */}
          <div className="shadow"></div>
          {/* Objeto que proyecta la sombra */}
          <div className="cylinder"></div>
        </div>

        <p className="revelar-instruccion">
          <em>
            (Pasá el mouse o mantené presionado sobre la imagen para quitar
            la sombra y comprobar que son idénticos).
          </em>
        </p>

        <p>
          <strong>Explicación:</strong> Aunque tus ojos insistan en que el
          cuadrado <strong>A</strong> es oscuro y el <strong>B</strong> es
          claro, <strong>
            ambos tienen exactamente el mismo color hexadecimal (#777777)
          </strong>.
        </p>
        <p>
          El cerebro no actúa como una cámara fotográfica que mide la luz
          real; en su lugar, analiza el contexto. Como interpreta que el
          cuadrado B está bajo una "sombra", ajusta automáticamente lo que
          ves para compensar esa falta de luz, haciéndote percibir el
          cuadro B mucho más blanco de lo que realmente es.
        </p>
      </div>
    </div>
  );
}