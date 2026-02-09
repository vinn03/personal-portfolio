import React from "react";
import { GitHub } from "@mui/icons-material";
import LanguageIcon from "@mui/icons-material/Language";

interface ProjectProps {
  title?: string;
  affiliation?: string;
  webLink?: string;
  githubLink?: string;
  technologies?: string[];
  points?: string[];
}

interface SkillProps {
  tech?: string;
}

const Skill: React.FC<SkillProps> = ({ tech }) => {
  return (
    <div
      className="rounded-lg p-2 text-xs lg:text-base text-navy-700 dark:text-blue-300 h-full flex items-center justify-center text-center"
      style={{ backgroundColor: "var(--bg-badge)" }}
    >
      {tech}
    </div>
  );
};

const Project: React.FC<ProjectProps> = ({
  title,
  affiliation,
  webLink,
  githubLink,
  technologies,
  points,
}) => {
  return (
    <div className="bg-white/80 dark:bg-blue-400/20 border border-blue-200/50 dark:border-transparent p-4 rounded-lg shadow-md relative">
      <h1 className="text-xl font-bold font-mono text-navy-900 dark:text-blue-100 mb-2">
        {title}
      </h1>
      <span className="text-sm lg:text-lg font-mono text-navy-700 dark:text-blue-300 flex justify-between">
        <h3 className="inline">{affiliation}</h3>
        <span>
          {webLink ? (
            <a
              href={webLink}
              target="_blank"
              rel="noreferrer"
              className="hover:text-navy-900 dark:hover:text-blue-100 mr-2 inline"
            >
              <LanguageIcon />
            </a>
          ) : null}
          {githubLink ? (
            <a
              href={githubLink}
              target="_blank"
              rel="noreferrer"
              className="hover:text-navy-900 dark:hover:text-blue-100 inline"
            >
              <GitHub />
            </a>
          ) : null}
        </span>
      </span>
      <div className="grid grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {technologies?.map((tech) => <Skill tech={tech} />)}
      </div>
      <ul className="text-navy-800 dark:text-blue-200 lg:text-lg mt-8 list-none list-inside font-inter">
        {points?.map((point, i) => (
          <>
            <li>{point}</li>
            {i < points.length - 1 && <br />}
          </>
        ))}
      </ul>
    </div>
  );
};

export default Project;
