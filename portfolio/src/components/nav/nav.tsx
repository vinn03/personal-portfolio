function Nav({ handleSectionChange, activeSection }) {
  const sections = ["experience", "projects", "bio"];

  return (
    <div
      className="font-mono text-blue-300 lg:mt-12 lg:bg-inherit lg:relative lg:p-0 lg:flex-col lg:items-end
              bg-[rgba(0,12,36,0.8)] flex flex-row justify-end p-2 fixed top-0 left-0 right-0 z-20"
    >
      {sections.map((section) => (
        <a
          key={section}
          className={`lg:hover:underline text-lg lg:text-right lg:text-xl mr-2 ml-2 lg:ml-0 lg:mr-0 cursor-pointer 
                  ${activeSection === section ? "text-white" : ""}`}
          onClick={() => handleSectionChange(section)}
        >
          {section}
        </a>
      ))}
    </div>
  );
}

export default Nav;
