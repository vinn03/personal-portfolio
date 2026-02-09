import React from "react";

interface SkillBadgeProps {
  tech?: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ tech }) => {
  return (
    <div
      className="rounded-lg p-2 text-xs lg:text-base text-navy-700 dark:text-blue-300 h-full flex items-center justify-center text-center"
      style={{ backgroundColor: "var(--bg-badge)" }}
    >
      {tech}
    </div>
  );
};

export default SkillBadge;
