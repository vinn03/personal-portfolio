import Project from "./project-component";
import PROJECTS_DATA from "../../data/projects.json";

const Projects: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-8 justify-start font-mono text-blue-300">
      {PROJECTS_DATA.map((project) => (
        <div className="bg-opacity-20 rounded-lg shadow-md relative">
          <Project
            title={project.title}
            affiliation={project.affiliation}
            webLink={project.webLink}
            githubLink={project.githubLink}
            technologies={project.technologies}
            points={project.points}
          />
        </div>
      ))}

      <footer>
        <p className="text-sm text-blue-300 font-mono mt-20">
          This{" "}
          <a
            className="text-blue-100 hover:underline"
            href="https://github.com/vinn03/personal-portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            page
          </a>{" "}
          was created with{"\u00A0"}
          <a
            className="text-blue-100 hover:underline"
            href="https://react.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          ,{" "}
          <a
            className="text-blue-100 hover:underline"
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tailwind
          </a>{" "}
          +{"\u00A0"}
          <a
            className="text-blue-100 hover:underline"
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vanilla CSS
          </a>
          , and{" "}
          <a
            className="text-blue-100 hover:underline"
            href="https://mui.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Material UI
          </a>
          .
        </p>
      </footer>
    </div>
  );
};

export default Projects;
