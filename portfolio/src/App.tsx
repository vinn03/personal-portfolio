import { useState } from "react";
import Stars from "./components/stars-bg/stars";
import Nav from "./components/nav/nav";
import { IntroHeader, IntroFooter } from "./components/intro/intro";
import Bio from "./components/bio/bio";
import Experience from "./components/experience/experiences";
import Projects from "./components/projects/projects";

function App(): JSX.Element {
  const [activeSection, setActiveSection] = useState<string | undefined>(
    "experience",
  );

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="m-4 lg:mr-24">
      <a
        href="#main-content"
        className="skip-link text-navy-900 dark:text-blue-100"
      >
        Skip to main content
      </a>
      <Stars />
      <div className="mt-24 lg:mt-16 lg:flex lg:flex-row lg:justify-center lg:items-start relative">
        <header className="lg:-ml-16 lg:w-2/5 lg:sticky lg:flex lg:flex-col lg:justify-between lg:top-16 lg:z-10 lg:h-[calc(100vh-8rem)]">
          <div>
            <IntroHeader />
            <Nav
              handleSectionChange={handleSectionChange}
              activeSection={activeSection}
            />
          </div>
          <IntroFooter />
        </header>
        <main id="main-content" className="lg:ml-16 lg:w-2/5">
          {activeSection === "experience" ? <Experience /> : null}
          {activeSection === "projects" ? <Projects /> : null}
          {activeSection === "bio" ? <Bio /> : null}
        </main>
      </div>
    </div>
  );
}

export default App;
