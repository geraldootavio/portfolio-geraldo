export default function About() {
  return (
    <section id="about" className="section about">
      <h2>Sobre mim</h2>

      <p>
        Estudante de Análise e Desenvolvimento de Sistemas, apaixonado por desenvolvimento front-end, com experiência em React, TypeScript e construção de interfaces modernas, responsivas e centradas na experiência do usuário.
      </p>

      <div className="about-highlights">
        <div className="about-card">
          <h3>📱 Mobile</h3>
          <p>React Native, Firebase, UX mobile</p>
        </div>

        <div className="about-card">
          <h3>💻 Web</h3>
          <p>React, Vite, TypeScript e APIs REST</p>
        </div>

        <div className="about-card">
          <h3>🎨 UI/UX</h3>
          <p>Interfaces modernas, responsivas e acessíveis</p>
        </div>
      </div>
    </section>
  );
}



