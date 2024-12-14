import Project from "./components/project";

const PROJECTS_DATA = [
  {
    title: "JobJug",
    affiliation: "StormHacks 2024",
    webLink: "https://devpost.com/software/jobjug",
    githubLink: "https://github.com/im-calvin/job-jug",
    technologies: [
      "React",
      "JavaScript",
      "Tailwind",
      "Python",
      "Flask",
      "OpenAI API",
      "Gmail API",
      "MongoDB",
    ],
    points: [
      "An AI-powered job application tracker that automatically categorizes your job applications into their respective stages of the hiring process.",
    ],
  },
  {
    title: "Moments",
    affiliation: "SFU - CMPT 372",
    githubLink: "https://github.com/vinn03/Moments",
    technologies: [
      "React",
      "TypeScript",
      "HTML",
      "CSS",
      "Tailwind",
      "Leaflet",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    points: [
      "A unique journaling platform that integrates interactive geospatial features, enabling users to reflect on their experiences by creating geographic 'memos.'",
    ],
  },
  {
    title: "Nuisance Report Tracker",
    affiliation: "SFU - CMPT 272",
    githubLink: "https://github.com/vinn03/nuisance-report-tracker",
    technologies: ["Angular", "TypeScript", "HTML", "CSS", "Leaflet", "HTTP"],
    points: [
      "A web application that allows users to report and track neighborhood nuisances, such as potholes and graffiti, on an interactive map.",
    ],
  },
  {
    title: "JapanGo",
    affiliation: "StormHacks 2023",
    webLink: "https://devpost.com/software/japango",
    githubLink: "https://github.com/bxian03/StormHacks2023",
    technologies: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind",
      "WebSockets",
    ],
    points: [
      "A language-learning web application that pits players against each other in a Japanese vocabulary competition using real-time WebSocket connections.",
    ],
  },
  {
    title: "IUPAC Discord Quiz Bot",
    affiliation: "HackToSchool 2022",
    webLink: "https://devpost.com/software/hack-to-school-project",
    githubLink: "https://github.com/im-calvin/HackToSchoolBot22",
    technologies: ["Python", "Node.js", "Express", "MongoDB"],
    points: [
      "A Discord bot that helps students master IUPAC naming conventions for organic chemical compounds through interactive quizzes in a text channel.",
    ],
  },
];

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

      <footer className="mb-4">
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
