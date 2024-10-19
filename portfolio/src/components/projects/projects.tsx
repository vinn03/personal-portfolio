import Project from "./components/project";

const Projects: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-8 justify-start font-mono text-blue-300">
      <Project
        title="Nuisance Report Tracker"
        affiliation="SFU - Client-side Development"
        githubLink="https://github.com/vinn03/nuisance-report-tracker"
        technologies={[
          "Angular",
          "TypeScript",
          "HTML",
          "CSS",
          "Leaflet",
          "HTTP",
        ]}
        points={[
          "Users can report nuisances on an interactive map; These reports are displayed on the map as markers.",
          "The application enables users to add and store locations, which then can be used to geographically represent created reports.",
          "Built using Angular, incorporating HTML, CSS, and Typescript for the construction of the application.",
          "Employs a NoSQL database and utilizes REST API methods for managing the stored user reports and locations.",
        ]}
      />
      <Project
        title="JapanGo"
        affiliation="StormHacks 2023"
        webLink="https://devpost.com/software/japango"
        githubLink="https://github.com/bxian03/StormHacks2023"
        technologies={[
          "React",
          "JavaScript",
          "HTML",
          "CSS",
          "Tailwind",
          "WebSockets",
        ]}
        points={[
          "A language-learning web application that pits players against each other in a Japanese vocabulary competition.",
          "Players joins rooms to challenge one another in a one on one format; The first to guess correctly is awarded a point.",
          "Employs HTML, CSS, JavaScript, Tailwind, and React for crafting the front-end of the application.",
          "WebSockets were utilized to establish multi-session multiplayer capabilities, allowing users to participate in concurrent matches.",
        ]}
      />
      <Project
        title="IUPAC Discord Quiz Bot"
        affiliation="HackToSchool 2022"
        webLink="https://devpost.com/software/hack-to-school-project"
        githubLink="https://github.com/im-calvin/HackToSchoolBot22"
        technologies={["Python", "Node.js", "Express", "MongoDB"]}
        points={[
          "Created using discord.py, the bot quizzes students on IUPAC names of organic chemical compounds through a kahoot-style question delivery system.",
          "Users are awarded points when the correct answer is sent into the chat, and can view their standing amongst their peers by displaying the leaderboard.",
          "Incorporates a spaced repetition algorithm, contributing to a significant improvement in students' final grades.",
          "Utilizes an API with Express.js and Node.js for the storage and retrieval of data in MongoDB.",
        ]}
      />

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
            ReactTS
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
