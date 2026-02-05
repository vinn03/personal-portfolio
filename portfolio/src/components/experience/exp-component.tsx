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
      className="rounded-lg text-center p-2 text-xs lg:text-base"
      style={{ backgroundColor: "rgba(0, 13, 50, 0.8)" }}
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
    <div className="bg-blue-400 bg-opacity-20 p-4 rounded-lg shadow-md relative">
      <div className="text-xl font-bold font-mono text-blue-100 mb-2">
        {title}
      </div>
      <span className="text-sm lg:text-lg font-mono mb-4 text-blue-300 flex justify-between">
        {companyUrl ? (
          <a
            href={companyUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center hover:text-blue-100"
          >
            {company}
            <OpenInNewIcon style={{ fontSize: "inherit" }} className="ml-2" />
          </a>
        ) : (
          <h3 className="inline">{company}</h3>
        )}
        <h3 className="inline">{duration}</h3>
      </span>
      <div className="grid grid-cols-3 lg:grid-cols-4 gap-4 mt-4 text-blue-300 font-mono">
        {technologies?.map((tech) => <Skill tech={tech} />)}
      </div>
      <p
        className="text-blue-200 lg:text-lg font-inter mt-8"
        style={{ whiteSpace: "pre-line" }}
      >
        {description}
      </p>
    </div>
  );
};

export default ExpComponent;
