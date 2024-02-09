import { useState } from "react";
import "../index.css"
import image from "../assets/APC_0084.jpg";
import Skills from "./skills";
import Projects from "./projects";
import Contact from "./contact";
import { Link, Element } from 'react-scroll';

function App() : JSX.Element {

  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleContactLinkClick = () => {
    setIsContactOpen(true);
  };

  return (
    <>
      <div id="bg-animation" style={{ zIndex: -1 }}>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="stars4"></div>
      </div>

      <header className="font-mono text-blue-300 pl-5 pt-4 pb-2 md:pl-48 md:pr-56 md:pt-5 md:pb-5 flex justify-between items-center"
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
            {isContactOpen && (
              <Contact 
                isOpen={true} 
                onClose={() => setIsContactOpen(false)} 
              />
            )}
        </span>
      </header>

      <Element id="about" name="about" className="element">
        <div className="mt-10 md:ml-28 md:mt-20 flex flex-col md:flex-row">
          <span className="md:w-1/2 md:mr-10" style={{ animation: "fadeIn 2s ease-in-out 0s forwards" }}>

            <h1 className="text-4xl md:text-8xl pt-16 pl-5 md:pt-8 md:pl-20 pb-5 font-sans font-bold text-blue-100">Vincent Liu</h1>

            <h3 className="pl-5 md:pl-20 text-xl md:text-2xl font-sans text-blue-100">Aspiring GIS & Software Developer</h3>

            <ul className="pl-10 pr-10 md:pl-24 pt-10 font-sans list-disc text-blue-100">
              <li>Third-year Geographic Information Science Honours student at Simon Fraser University</li>
              <li>Currently learning full-stack development and spatial data analysis</li>
              <li>Seeking Summer 2024 Co-op</li>
            </ul>

            <hr className="border-t-2 border-blue-100 mr-5 ml-5 mt-10 md:ml-20"></hr>

            <br></br><br></br>

            <p className="font-mono text-sm md:text-bsae pl-5 pr-5 md:pl-20 w-full text-blue-100">
              Originally a Human Geography major, 
              my interest in computing science and software development sparked after taking my first programming course in Summer 2022.
              <br></br> <br></br>
              The process of problem-solving and creating programs proved to be incredibly fulfilling, fuelling my desire to transfer into the School of Computing Science and to further pursue such rewarding work.<br></br> <br></br>
              Since then, I've attended numerous hackathons and worked towards a transfer into the combined honours program between computing science and geography. <br></br> <br></br>
              This goal was finally achieved in Summer 2023. <br></br> <br></br>
              Currently, I am honing my skills in full-stack development and spatial data analysis with the aim of securing a co-op position for the Summer 2024 term. <br></br> <br></br>
              In my spare time, I enjoy playing video games (especially role-playing games), strumming the guitar, jamming on drums, 3D printing and modelling, and diving into topics such as urbanism and world history. <br></br> <br></br>
            </p>
          </span> 
          <img className="slide-in size-4/5 sm:mt-5 ml-10 md:size-1/4 md:m-10 md:ml-44" src={image} alt="Vincent Liu" style={{ borderRadius: '20px' }} />
        </div>
      </Element>
      <Element id="skills" name="skills">
        <Skills/>
      </Element>

      <Element id="projects" name="projects">
        <Projects/>
      </Element>

      <footer className="m-5 md:m-0">
        <p className="text-sm text-blue-300 font-mono md:ml-28 mt-20 pb-5">This page was created in Visual Studio Code with{'\u00A0'}
        <a className="text-blue-100 hover:underline" href="https://react.dev/" target="_blank" rel="noopener noreferrer">
          ReactTS
        </a>
        , <a className="text-blue-100 hover:underline" href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">Tailwind</a> +{'\u00A0'}
        <a className="text-blue-100 hover:underline" href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer">Vanilla CSS</a>, 
        and <a className="text-blue-100 hover:underline" href="https://mui.com/" target="_blank" rel="noopener noreferrer">Material UI</a>.</p>
      </footer>
    </>
  )
}

export default App
