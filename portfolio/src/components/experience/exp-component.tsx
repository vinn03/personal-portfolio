import React from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

interface ExpProps {
  title: string;
  company: string;
  companyUrl?: string;
  duration: string;
  technologies?: string[] | null;
  description: any;
}

interface SkillProps {
  tech?: string;
}

const Skill: React.FC<SkillProps> = ({ tech }) => {
  return (
    <div
      className="rounded-lg text-center p-2 text-xs lg:text-base text-navy-700 dark:text-blue-300"
      style={{ backgroundColor: "var(--bg-badge)" }}
    >
      {tech}
    </div>
  );
};

const ExpComponent: React.FC<ExpProps> = ({
  title,
  company,
  companyUrl,
  duration,
  technologies,
  description,
}) => {
  return (
    <div className="bg-white/80 dark:bg-blue-400/20 border border-blue-200/50 dark:border-transparent p-4 rounded-lg shadow-md relative">
      <div className="text-xl font-bold font-mono text-navy-900 dark:text-blue-100 mb-2">
        {title}
      </div>
      <span className="text-sm lg:text-lg font-mono mb-4 text-navy-700 dark:text-blue-300 flex justify-between">
        {companyUrl ? (
          <a
            href={companyUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center hover:text-navy-900 dark:hover:text-blue-100"
          >
            {company}
            <OpenInNewIcon style={{ fontSize: "inherit" }} className="ml-2" />
          </a>
        ) : (
          <h3 className="inline">{company}</h3>
        )}
        <h3 className="inline">{duration}</h3>
      </span>
      <div className="grid grid-cols-3 lg:grid-cols-4 gap-4 mt-4 font-mono">
        {technologies?.map((tech) => <Skill tech={tech} />)}
      </div>
      <p
        className="text-navy-800 dark:text-blue-200 lg:text-lg font-inter mt-8"
        style={{ whiteSpace: "pre-line" }}
      >
        {description}
      </p>
    </div>
  );
};

export default ExpComponent;
