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
      className="rounded-lg text-center p-2 text-xs md:text-sm"
      style={{ backgroundColor: "rgba(0, 13, 50, 0.8)" }}
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
    <div className="bg-blue-400 bg-opacity-20 p-4 rounded-lg shadow-md relative">
      <h1 className="text-xl font-bold font-mono text-blue-100 mb-2">
        {title}
      </h1>
      <span className="text-sm font-mono mb-8 text-blue-300 flex justify-between">
        <h3 className="opacity-70 inline">{affiliation}</h3>
        <span>
          {webLink ? (
            <a
              href={webLink}
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-100 mr-2 inline"
            >
              <LanguageIcon fontSize="small"></LanguageIcon>
            </a>
          ) : null}
          {githubLink ? (
            <a
              href={githubLink}
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-100 inline"
            >
              <GitHub fontSize="small"></GitHub>
            </a>
          ) : null}
        </span>
      </span>
      <div className="grid grid-cols-3 gap-4 mt-6">
        {technologies?.map((tech) => <Skill tech={tech} />)}
      </div>
      <ul className="text-blue-100 mt-12 mb-12 list-disc list-inside">
        {points?.map((point) => (
          <>
            <li>{point}</li>
            <br />
          </>
        ))}
      </ul>
    </div>
  );
};

export default Project;
