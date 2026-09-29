import { useState, useRef } from "react";
import "./App.css";

const NAMES = ["Proyecto 1", "Proyecto 2", "Proyecto 3", "Proyecto 4"];

export default function App() {
  const [imgs, setImgs] = useState([null, null, null, null]);
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

  const load = (n, file) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () =>
      setImgs((prev) => prev.map((x, k) => (k === n ? reader.result : x)));
    reader.readAsDataURL(file);
  };

  return (
    <>
      <header>
        <h1>Mis proyectos</h1>
        <span>{i + 1} de 4</span>
      </header>

      <div className="track" ref={track} onScroll={onScroll}>
        {NAMES.map((name, n) => (
          <section className="slide" key={n}>
            <div className="frame">
              {imgs[n] ? (
                <img src={imgs[n]} alt={name} />
              ) : (
                <div className="empty">
                  <b>{name}</b>
                  Todavía no hay imagen. Tocá el botón para agregar una.
                </div>
              )}
            </div>
            <div className="meta">
              <strong>{name}</strong>
              <label className="btn">
                {imgs[n] ? "Cambiar imagen" : "Agregar imagen"}
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => load(n, e.target.files[0])}
                />
              </label>
            </div>
          </section>
        ))}
      </div>

      <div className="dots">
        {NAMES.map((name, n) => (
          <button
            key={n}
            className={"dot" + (n === i ? " on" : "")}
            aria-label={"Ir a " + name}
            onClick={() => goTo(n)}
          />
        ))}
      </div>
    </>
  );
}
