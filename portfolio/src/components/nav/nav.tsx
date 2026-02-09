import ThemeToggle from "../theme-toggle/ThemeToggle";

function Nav({ handleSectionChange, activeSection }) {
  const sections = ["experience", "projects", "bio"];

  return (
    <div
      className="font-mono lg:mt-12 lg:bg-transparent lg:relative lg:p-0 lg:flex-col lg:items-end
              flex flex-row justify-between items-center p-2 fixed top-0 left-0 right-0 z-20
              text-navy-700 dark:text-blue-300 bg-[#f0f7ff]/80 dark:bg-[rgb(17,27,62)]/80 lg:!bg-transparent backdrop-blur-md lg:backdrop-blur-none"
    >
      <div className="flex flex-row lg:flex-col lg:items-end">
        {sections.map((section) => (
          <a
            key={section}
            className={`lg:hover:underline text-lg lg:text-right lg:text-xl mr-2 ml-2 lg:ml-0 lg:mr-0 cursor-pointer
                    ${
                      activeSection === section
                        ? "text-navy-900 dark:text-white font-semibold"
                        : "hover:text-navy-900 dark:hover:text-blue-100"
                    }`}
            onClick={() => handleSectionChange(section)}
          >
            {section}
          </a>
        ))}
      </div>
      <div className="order-first lg:order-last lg:mt-4">
        <ThemeToggle />
      </div>
    </div>
  );
}

export default Nav;
