import Project from "./project-component";
import PROJECTS_DATA from "../../data/projects.json";

const Projects: React.FC = () => {
  return (
    <section aria-labelledby="projects-heading" className="font-mono text-navy-700 dark:text-blue-300">
      <h1 id="projects-heading" className="sr-only">
        Projects
      </h1>
      <div className="grid grid-cols-1 gap-8 justify-start">
        {PROJECTS_DATA.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            affiliation={project.affiliation}
            webLink={project.webLink}
            githubLink={project.githubLink}
            eventLink={project.eventLink}
            technologies={project.technologies}
            points={project.points}
          />
        ))}
      </div>

      <footer className="mt-20">
        <p className="text-sm text-navy-700 dark:text-blue-300 font-mono">
          This{" "}
          <a
            className="text-navy-900 dark:text-blue-100 hover:underline"
            href="https://github.com/vinn03/personal-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View portfolio source code on GitHub (opens in new tab)"
          >
            page
          </a>{" "}
          was created with{"\u00A0"}
          <a
            className="text-navy-900 dark:text-blue-100 hover:underline"
            href="https://react.dev/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="React documentation (opens in new tab)"
          >
            React
          </a>
          ,{" "}
          <a
            className="text-navy-900 dark:text-blue-100 hover:underline"
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Tailwind CSS documentation (opens in new tab)"
          >
            Tailwind
          </a>{" "}
          +{"\u00A0"}
          <a
            className="text-navy-900 dark:text-blue-100 hover:underline"
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="MDN CSS documentation (opens in new tab)"
          >
            Vanilla CSS
          </a>
          , and{" "}
          <a
            className="text-navy-900 dark:text-blue-100 hover:underline"
            href="https://mui.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Material UI documentation (opens in new tab)"
          >
            Material UI
          </a>
          .
        </p>
      </footer>
    </section>
  );
};

export default Projects;
