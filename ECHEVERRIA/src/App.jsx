import { useState, useRef } from "react";
import Imagen1 from "./imagen1/Imagen1";
import Imagen2 from "./imagen2/Imagen2";
import "./App.css";
import Imagen3 from "./imagen3/Imagen3";
import Imagen4 from "./imagen4/Imagen4";
import Imagen5 from "./imagen5/Imagen5";
import logo from "./assets/logo.png";
import Imagen6 from "./imagen6/Imagen6";

const SLIDES = [
  { name: "La Rejilla de Hermann", Component: Imagen3 },
  { name: "La Ilusión de la Censura", Component: Imagen4 },
  { name: "Convivencia y Ciudadanía Digital", Component: Imagen5 },
  { name: "Ilusión Óptica", Component: Imagen1 },
  { name: "Ilusión de Movimiento", Component: Imagen2 },
   { name: "Contraste y Sombra", Component: Imagen6 },
  
];


export default function App() {
  const [i, setI] = useState(0);
  const track = useRef(null);

  const onScroll = (e) => {
    const t = e.currentTarget;
    setI(Math.round(t.scrollLeft / t.clientWidth));
  };

  const goTo = (n) => {
    if (track.current) {
      track.current.scrollTo({ left: n * track.current.clientWidth, behavior: "smooth" });
    }
  };

  return (
    <>
      <header>
        <img src={logo} alt="Logo" className="header-logo" />
        <h1>Feria Institucional -Esteban Echeverría</h1>
        <span>{i + 1} de {SLIDES.length}</span>
      </header>

      <div className="track" ref={track} onScroll={onScroll}>
        {SLIDES.map((slide, n) => (
          <section className="slide" key={n}>
            <div className="frame">
              <slide.Component />
            </div>
          </section>
        ))}
      </div>

      <div className="dots">
        {SLIDES.map((slide, n) => (
          <button
            key={n}
            className={"dot" + (n === i ? " on" : "")}
            aria-label={"Ir a " + slide.name}
            onClick={() => goTo(n)}
          />
        ))}
      </div>
    </>
  );
}