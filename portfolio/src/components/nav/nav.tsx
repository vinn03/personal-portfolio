function Nav({ handleSectionChange }) {
  const sections = ["about", "skills", "projects"];
  return (
    <header className="font-mono text-blue-300 pl-7 pt-4 pb-2 md:pl-28 md:pr-56 md:pt-5 md:pb-5">
      <div className="flex flex-row">
        {sections.map((section) => (
          <button
            key={section}
            className="hover:text-blue-100 text-lg md:text-xl mr-4 cursor-pointer"
            onClick={handleSectionChange}
          >
            {section}
          </button>
        ))}
      </div>
    </header>
  );
}

export default Nav;
