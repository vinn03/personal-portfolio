import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-scroll";
import Contact from "../contact/contact";

const Header: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleContactLinkClick = () => {
    setIsContactOpen(true);
  };

  return (
    <header
      className="font-mono text-blue-300 pl-7 pt-4 pb-2 md:pl-32 md:pr-32 md:pt-5 md:pb-5 flex justify-between items-center"
      style={{
        backgroundColor: "rgba(0, 13, 50, 0.8)",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 2,
      }}
    >
      <span>
        <Link
          to="about"
          smooth={true}
          duration={500}
          offset={-window.innerHeight * 0.1}
          className="hover:text-blue-100 text-lg md:text-xl cursor-pointer"
        >
          About
        </Link>
        &nbsp;&nbsp;
        <Link
          to="experience"
          smooth={true}
          duration={500}
          offset={-window.innerHeight * 0.1}
          className="hover:text-blue-100 text-lg md:text-xl cursor-pointer"
        >
          Experience
        </Link>
        &nbsp;&nbsp;
        <Link
          to="skills"
          smooth={true}
          duration={500}
          offset={-window.innerHeight * 0.2}
          className="hover:text-blue-100 text-lg md:text-xl cursor-pointer"
        >
          Skills
        </Link>
        &nbsp;&nbsp;
        <Link
          to="projects"
          smooth={true}
          duration={500}
          offset={-window.innerHeight * 0.1}
          className="hover:text-blue-100 text-lg md:text-xl cursor-pointer"
        >
          Projects
        </Link>
        &nbsp;&nbsp;
      </span>
      <span>
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
          <Contact isOpen={true} onClose={() => setIsContactOpen(false)} />
        </CSSTransition>
      </span>
    </header>
  );
};

export default Header;
