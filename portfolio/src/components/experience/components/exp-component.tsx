import React from "react";

interface ExpProps {
  title: string;
  company: string;
  duration: string;
  description: string;
}

const ExpComponent: React.FC<ExpProps> = ({
  title,
  company,
  duration,
  description,
}) => {
  return (
    <div className="bg-blue-400 bg-opacity-20 p-4 rounded-lg shadow-md relative">
      <h1 className="text-xl font-bold font-mono text-blue-100 mb-2">
        {title}
      </h1>
      <span className="text-sm font-mono mb-8 text-blue-300 flex justify-between">
        <h3 className="opacity-70 inline">{company}</h3>
        <h3 className="opacity-70 inline">{duration}</h3>
      </span>
      <p className="text-blue-200 font-mono">{description}</p>
    </div>
  );
};

export default ExpComponent;
