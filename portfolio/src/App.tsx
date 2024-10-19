import React, { useState } from "react";
import Stars from "./components/stars-bg/stars";
import Nav from "./components/nav/nav";
import About from "./components/about/about";
import Bio from "./components/bio/bio";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";
import Footer from "./components/footer/footer";
import "./index.css";

function App(): JSX.Element {
  const [activeSection, setActiveSection] = useState<string | undefined>("bio");

  const handleSectionChange = (event: React.MouseEvent) => {
    const target = event.target as HTMLElement;
    const section = target.textContent?.toLowerCase();
    setActiveSection(section);
  };

  return (
    <div className="m-2">
      <Stars />
      <div className="mt-28 flex flex-row justify-center">
        <div className="w-1/3">
          <About />
          <Nav handleSectionChange={handleSectionChange} />
        </div>
        <div className="ml-24 w-1/3">
          {activeSection === "about" ? <Bio /> : null}
          {activeSection === "bio" ? <Bio /> : null}
          {activeSection === "skills" ? <Skills /> : null}
          {activeSection === "projects" ? <Projects /> : null}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
