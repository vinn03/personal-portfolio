function Nav({ handleSectionChange, activeSection }) {
  const sections = ["bio", "experience", "projects", "skills"];

  return (
    <div className="font-mono text-blue-300 mt-12 text-right">
      {sections.map((section) => (
        <button
          key={section}
          className={`hover:underline w-full text-lg text-right md:text-xl cursor-pointer ${
            activeSection === section ? "text-white" : ""
          }`}
          onClick={() => handleSectionChange(section)}
        >
          {section}
        </button>
      ))}
    </div>
  );
}

export default Nav;
