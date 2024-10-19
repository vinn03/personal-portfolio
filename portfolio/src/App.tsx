import { useState } from "react";
import Stars from "./components/stars-bg/stars";
import Nav from "./components/nav/nav";
import Intro from "./components/intro/intro";
import Bio from "./components/bio/bio";
import Experience from "./components/experience/experience";
import Projects from "./components/projects/projects";
import Skills from "./components/skills/skills";

function App(): JSX.Element {
  const [activeSection, setActiveSection] = useState<string | undefined>("bio");

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div>
      <Stars />
      <div className="mt-28 flex flex-row items-start relative">
        <div className="w-1/3 sticky flex-none top-10 z-10">
          <Intro />
          <Nav
            handleSectionChange={handleSectionChange}
            activeSection={activeSection}
          />
        </div>
        <div className="ml-24 w-1/3">
          {activeSection === "bio" ? <Bio /> : null}{" "}
          {activeSection === "experience" ? <Experience /> : null}
          {activeSection === "projects" ? <Projects /> : null}
          {activeSection === "skills" ? <Skills /> : null}
        </div>
      </div>
    </div>
  );
}

export default App;
