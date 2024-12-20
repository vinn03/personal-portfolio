import { useState } from "react";
import Stars from "./components/stars-bg/stars";
import Nav from "./components/nav/nav";
import Intro from "./components/intro/intro";
import Bio from "./components/bio/bio";
import Socials from "./components/intro/socials";
import Experience from "./components/experience/experience";
import Projects from "./components/projects/projects";

function App(): JSX.Element {
  const [activeSection, setActiveSection] = useState<string | undefined>("bio");

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="m-4">
      <Stars />
      <div className="mt-24 lg:flex lg:flex-row lg:justify-center lg:items-start relative">
        <div className="lg:-ml-16 lg:w-1/4 lg:sticky lg:flex-none lg:top-24 lg:z-10">
          <Intro />
          <Socials />
          <Nav
            handleSectionChange={handleSectionChange}
            activeSection={activeSection}
          />
        </div>
        <div className="lg:ml-16 lg:w-2/5">
          {activeSection === "bio" ? <Bio /> : null}
          {activeSection === "experience" ? <Experience /> : null}
          {activeSection === "projects" ? <Projects /> : null}
        </div>
      </div>
    </div>
  );
}

export default App;
