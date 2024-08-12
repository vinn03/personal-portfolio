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
          className="bg-blue-400 bg-opacity-20 w-30 h-30 m-1 p-5 rounded-2xl flex flex-col justify-center items-center"
        >
          <img src={src} alt={name} className="w-4/5 h-4/5 object-contain" />
          <h3 className="mt-2 text-center">{name}</h3>
        </a>
      ) : (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="bg-blue-400 bg-opacity-20 w-40 h-40 m-2 p-5 rounded-2xl relative flex flex-col justify-center items-center"
        >
          <img src={src} alt={name} className="w-4/5 h-4/5 object-contain" />
          <h3 className="mt-2 text-center">{name}</h3>
        </a>
      )}
    </>
  );
};

export default LargeSkill;
