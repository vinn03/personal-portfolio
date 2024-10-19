import React from "react";

interface SkillProps {
  name?: string;
  href?: string;
  src?: string;
  isMobile: boolean;
}

const LargeSkill: React.FC<SkillProps> = ({ name, href, src, isMobile }) => {
  return (
    <>
      {isMobile ? (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="bg-blue-400 bg-opacity-20 w-32 h-32 m-1 p-5 rounded-2xl flex flex-col justify-center items-center"
        >
          <img src={src} alt={name} className="w-4/5 h-4/5 object-contain" />
          <div className="mt-2 text-center">{name}</div>
        </a>
      ) : (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="bg-blue-400 bg-opacity-20 w-48 h-48 m-2 p-5 rounded-2xl relative flex flex-col justify-center items-center"
        >
          <img src={src} alt={name} className="w-4/5 h-4/5 object-contain" />
          <div className="mt-2 text-center">{name}</div>
        </a>
      )}
    </>
  );
};

export default LargeSkill;
