import { FiGithub, FiLinkedin, FiInstagram, FiMail } from "react-icons/fi";

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <h2>Contato</h2>

      <p className="contact-subtitle">
        Vamos conversar? Me encontre nas redes ou envie um e-mail.
      </p>

      <div className="contact-email">
        <FiMail />
        <span>geralotavio@hotmail.com</span>
      </div>

      <div className="contact-grid">
        <a
          href="https://github.com/geraldootavio"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <FiGithub />
          <span>GitHub</span>
        </a>

        <a
          href="https://www.linkedin.com/in/geraldootavio-figueiredo/"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <FiLinkedin />
          <span>LinkedIn</span>
        </a>

        <a
          href="https://www.instagram.com/gerah.figueiredo97/"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <FiInstagram />
          <span>Instagram</span>
        </a>
      </div>
    </section>
  );
}
