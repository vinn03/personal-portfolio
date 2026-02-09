import React from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import SkillBadge from "../ui/skill-badge";

interface ExpProps {
  title: string;
  company: string;
  companyUrl?: string;
  duration: string;
  technologies?: string[] | null;
  description: any;
}

const ExpComponent: React.FC<ExpProps> = ({
  title,
  company,
  companyUrl,
  duration,
  technologies,
  description,
}) => {
  return (
    <article className="bg-white/80 dark:bg-blue-400/20 border border-blue-200/50 dark:border-transparent p-4 rounded-lg shadow-md relative">
      <h2 className="text-xl font-bold font-mono text-navy-900 dark:text-blue-100 mb-2">
        {title}
      </h2>
      <div className="text-sm lg:text-lg font-mono mb-4 text-navy-700 dark:text-blue-300 flex justify-between">
        {companyUrl ? (
          <a
            href={companyUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`${company} website (opens in new tab)`}
            className="inline-flex items-center hover:text-navy-900 dark:hover:text-blue-100"
          >
            {company}
            <OpenInNewIcon style={{ fontSize: "inherit" }} className="ml-2" aria-hidden="true" />
          </a>
        ) : (
          <span>{company}</span>
        )}
        <span>{duration}</span>
      </div>
      <div className="grid grid-cols-3 lg:grid-cols-4 gap-4 mt-4 font-mono">
        {technologies?.map((tech) => <SkillBadge tech={tech} key={tech} />)}
      </div>
      <p
        className="text-navy-800 dark:text-blue-200 lg:text-lg font-inter mt-8"
        style={{ whiteSpace: "pre-line" }}
      >
        {description}
      </p>
    </article>
  );
};

export default ExpComponent;
