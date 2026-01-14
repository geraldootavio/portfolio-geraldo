import { useEffect, useState } from "react";
import minhaFoto from "../assets/images/portfolio-image.png";

const TEXT = "Olá, eu sou Geraldo Otávio";

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index >= TEXT.length) return;
    const timeout = setTimeout(() => setIndex((prev) => prev + 1), 80);
    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <section id="hero" className="hero">
      <div className="hero-left">
        <img src={minhaFoto} alt="Geraldo Otávio" />
        <div className="hero-left-gradient" />
      </div>
      <div className="hero-right">
        <h1 className="typing">
          {TEXT.slice(0, index)}
          {index === TEXT.length && <span className="cursor">|</span>}
        </h1>
        <p>Desenvolvedor Front-end focado em React e TypeScript</p>
      </div>
    </section>
  );
}
