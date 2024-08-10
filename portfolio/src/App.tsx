import "./index.css";
import Stars from "./components/stars-bg/stars";
import Header from "./components/header/header";
import Intro from "./components/about/about";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";
import Footer from "./components/footer/footer";
import { Element } from "react-scroll";

function App(): JSX.Element {
  return (
    <div className="m-2">
      <Stars />
      <Header />
      {/* Sections of page */}
      <Element id="about" name="about" className="element">
        <Intro />
      </Element>
      <Element id="skills" name="skills">
        <Skills />
      </Element>
      <Element id="projects" name="projects">
        <Projects />
      </Element>

      <Footer />
    </div>
  );
}

export default App;
