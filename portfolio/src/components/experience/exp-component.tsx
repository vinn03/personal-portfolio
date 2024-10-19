import React from "react";

interface ExpProps {
  title: string;
  company: string;
  location: string;
  duration: string;
  technologies: string[];
  description: string;
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
  location,
  duration,
  technologies,
  description,
}) => {
  return (
    <div className="bg-blue-400 bg-opacity-20 p-4 rounded-lg shadow-md relative">
      <div className="text-xl lg:text-2xl font-bold font-mono text-blue-100 mb-2">
        {title}
      </div>
      <span className="text-sm lg:text-lg font-mono mb-4 text-blue-300 flex justify-between">
        <h3 className="inline">
          {company} - {location}
        </h3>
        <h3 className="inline">{duration}</h3>
      </span>
      <div className="grid grid-cols-3 lg:grid-cols-4 gap-4 mt-6 text-blue-300 font-mono">
        {technologies?.map((tech) => <Skill tech={tech} />)}
      </div>
      <p className="text-blue-200 lg:text-lg font-mono mt-8">{description}</p>
    </div>
  );
};

export default ExpComponent;
