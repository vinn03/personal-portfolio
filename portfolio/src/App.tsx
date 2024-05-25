import { useState } from "react";
import "./index.css"
import Stars from "./components/stars-bg/stars";
import Intro from "./components/intro/intro";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import { Element, Link } from 'react-scroll';
import { CSSTransition } from "react-transition-group";

function App() : JSX.Element {

  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleContactLinkClick = () => {
    setIsContactOpen(true);
  };

  return (
    <>
      <Stars/>
      <header className="font-mono text-blue-300 pl-5 pt-4 pb-2 md:pl-28 md:pr-56 md:pt-5 md:pb-5 flex justify-between items-center"
      style={{ backgroundColor: "rgba(0, 13, 50, 0.8)", position: 'fixed', top: 0, left: 0, right: 0, zIndex: 2 }}>
          <span>
              <Link to="about" smooth={true} duration={500} offset={-window.innerHeight * 0.1} className="hover:text-blue-100 text-lg md:text-xl cursor-pointer">About</Link>
              &nbsp;&nbsp;
              <Link to="skills" smooth={true} duration={500} offset={-window.innerHeight * 0.2} className="hover:text-blue-100 text-lg md:text-xl cursor-pointer">Skills</Link>
              &nbsp;&nbsp;
              <Link to="projects" smooth={true} duration={500} offset={-window.innerHeight * 0.1} className="hover:text-blue-100 text-lg md:text-xl cursor-pointer">Projects</Link>
              &nbsp;&nbsp;
              <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={-window.innerHeight * 0.1}
                  className="hover:text-blue-100 text-lg md:text-xl cursor-pointer"
                  onClick={handleContactLinkClick}
              >
              Contact
              </Link>

              <CSSTransition
                  in={isContactOpen}
                  timeout={300}
                  classNames="contact-transition"
                  unmountOnExit
              >
              <Contact 
                  isOpen={true} 
                  onClose={() => setIsContactOpen(false)} 
              />
              </CSSTransition>
          </span>
      </header>

      <Element id="about" name="about" className="element">
        <Intro/>
      </Element>
      <Element id="skills" name="skills">
        <Skills/>
      </Element>
      <Element id="projects" name="projects">
        <Projects/>
      </Element>

      <Footer/>
    </>
  )
}

export default App
