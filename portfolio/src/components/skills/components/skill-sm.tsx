import React from "react";

interface SkillProps {
  name?: string;
  href?: string;
  src?: string;
  isMobile: boolean;
}

const SmallSkill: React.FC<SkillProps> = ({ name, href, src, isMobile }) => {
  return (
    <>
      {isMobile ? (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="bg-blue-400 bg-opacity-20 w-24 h-24 p-4 rounded-2xl flex flex-col justify-center items-center"
        >
          <img src={src} alt={name} className="w-4/5 h-4/5 object-contain" />
          <div className="mt-2 text-center">{name}</div>
        </a>
      ) : (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="bg-blue-400 bg-opacity-20 w-24 h-24 p-4 rounded-2xl flex flex-col justify-center items-center"
        >
          <img src={src} alt={name} className="w-4/5 h-4/5 object-contain" />
          <div className="mt-2 text-center">{name}</div>
        </a>
      )}
    </>
  );
};

export default SmallSkill;
