import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Project {
  id: number;
  name: string;
  description: string;
  html_url: string;
  topics: string[];
  homepage?: string;
}

const FEATURED = [
  "FlowChat",
  "TrabalhoIA-IFMG",
  "feirakit-frontend",
  "chatOnline",
  "ProjectDiscoverRCS",
];

const PROJECT_DESCRIPTIONS: Record<string, string> = {
  FlowChat: "Chat em tempo real com foco em fluxo de conversas e UI moderna.",
  "TrabalhoIA-IFMG":
    "Projeto acadêmico aplicando conceitos de Inteligência Artificial.",
  "feirakit-frontend":
    "Aplicação para organização de compras em feiras livres.",
  chatOnline:
    "Sistema simples de chat online utilizando tecnologias web.",
  ProjectDiscoverRCS:
    "Agregador de links pessoais inspirado no Discover da Rocketseat.",
};

const PROJECT_DEMOS: Record<string, string> = {
  "TrabalhoIA-IFMG": "https://ods2-site.web.app/",
  ProjectDiscoverRCS: "https://geraldootavio.github.io/ProjectDiscoverRCS/",
};

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/geraldootavio/repos")
      .then((res) => res.json())
      .then((data: Project[]) => {
        const filtered = data.filter((repo) =>
          FEATURED.includes(repo.name)
        );
        setProjects(filtered);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section id="projects" className="section">
        <h2>Projetos</h2>
        <p>Carregando projetos...</p>
      </section>
    );
  }

  return (
    <section id="projects" className="section">
      <h2>Projetos</h2>

      <div className="grid">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            whileHover={{ scale: 1.03 }}
          >
            <h3>{project.name}</h3>

            <p>
              {PROJECT_DESCRIPTIONS[project.name] ??
                project.description ??
                "Projeto em desenvolvimento."}
            </p>

            <div className="tags">
              {project.topics?.map((topic) => (
                <span key={topic}>{topic}</span>
              ))}
            </div>

            {/* Botões */}
            <div className="card-buttons">
              {(project.name === "TrabalhoIA-IFMG" ||
                project.name === "ProjectDiscoverRCS") && (
                  <a
                    href={PROJECT_DEMOS[project.name] ?? "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-visualizar"
                  >
                    Visualizar
                  </a>
                )}

              <a
                href={project.html_url}
                target="_blank"
                rel="noreferrer"
                className="btn btn-github"
              >
                Ver no GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
