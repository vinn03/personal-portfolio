import React from "react";
import { GitHub } from "@mui/icons-material";
import LanguageIcon from "@mui/icons-material/Language";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import SkillBadge from "../ui/skill-badge";

interface ProjectProps {
  title?: string;
  affiliation?: string;
  eventLink?: string;
  webLink?: string;
  githubLink?: string;
  technologies?: string[];
  points?: string[];
}

const Project: React.FC<ProjectProps> = ({
  title,
  affiliation,
  eventLink,
  webLink,
  githubLink,
  technologies,
  points,
}) => {
  return (
    <article className="bg-white/80 dark:bg-blue-400/20 border border-blue-200/50 dark:border-transparent p-4 rounded-lg shadow-md relative">
      <div className="flex items-center gap-2 mb-2">
        <h2 className="text-xl font-bold font-mono text-navy-900 dark:text-blue-100">
          {title}
        </h2>
        <span className="text-navy-700 dark:text-blue-300">
          {githubLink ? (
            <a
              href={githubLink}
              target="_blank"
              rel="noreferrer"
              aria-label={`View ${title} source code on GitHub (opens in new tab)`}
              className="hover:text-navy-900 dark:hover:text-blue-100 mr-1"
            >
              <GitHub aria-hidden="true" />
            </a>
          ) : null}
          {webLink ? (
            <a
              href={webLink}
              target="_blank"
              rel="noreferrer"
              aria-label={`Visit ${title} website (opens in new tab)`}
              className="hover:text-navy-900 dark:hover:text-blue-100"
            >
              <LanguageIcon aria-hidden="true" />
            </a>
          ) : null}
        </span>
      </div>
      {eventLink ? (
        <a
          href={eventLink}
          target="_blank"
          rel="noreferrer"
          aria-label={`${affiliation} (opens in new tab)`}
          className="text-sm lg:text-lg font-mono text-navy-700 dark:text-blue-300 inline-flex items-center hover:text-navy-900 dark:hover:text-blue-100"
        >
          {affiliation}
          <OpenInNewIcon style={{ fontSize: "inherit" }} className="ml-2" aria-hidden="true" />
        </a>
      ) : (
        <p className="text-sm lg:text-lg font-mono text-navy-700 dark:text-blue-300">
          {affiliation}
        </p>
      )}
      <div className="grid grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {technologies?.map((tech) => <SkillBadge tech={tech} key={tech} />)}
      </div>
      <ul className="text-navy-800 dark:text-blue-200 lg:text-lg mt-8 list-disc list-inside font-inter">
        {points?.map((point, i) => (
          <li key={i} className="mb-2">{point}</li>
        ))}
      </ul>
    </article>
  );
};

export default Project;
