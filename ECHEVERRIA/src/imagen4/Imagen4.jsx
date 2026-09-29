// Imagen4.jsx
import React from "react";
import "./Imagen4.css";

export default function Imagen4() {
  return (
    <div className="container">
      <div className="card">
        <h2>2. La Ilusión de la Censura</h2>
        <p>
          Así como tus ojos te engañan haciéndote ver puntos que no
          existen, la <strong>última dictadura cívico-militar (1976-1983)</strong>{" "}
          utilizó los medios de comunicación para crear una "ilusión
          óptica" a nivel social.
        </p>
        <p>
          A través de la <span className="censurado">censura y la manipulación</span>,
          el Estado ocultó información vital y creó una realidad ficticia.
          Mientras el país celebraba el Mundial del 78, a pocas cuadras se
          violaban los derechos humanos.
        </p>
        <p>
          <em>
            (Pasá el mouse sobre los bloques negros para revelar la verdad
            censurada).
          </em>
        </p>
        <p>
          Cuando nos faltan datos, nuestro cerebro —y nuestra sociedad—
          llena los espacios vacíos, muchas veces con información
          engañosa. Por eso es vital el acceso libre a la información.
        </p>
      </div>
    </div>
  );
}