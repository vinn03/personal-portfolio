import MailIcon from "@mui/icons-material/Mail";
import { GitHub, LinkedIn } from "@mui/icons-material";

function Intro() {
  return (
    <span
      className="text-right"
      style={{ animation: "fadeIn 2s ease-in-out 0s forwards" }}
    >
      <h1 className="text-4xl md:text-6xl font-sans font-bold text-blue-100">
        Vincent Liu
      </h1>

      <div className="text-lg md:text-xl mt-8 font-sans text-blue-100">
        <div className="mb-4">CS + GIS Undergrad @ Simon Fraser University</div>
        <div>Former SWE Intern @ Apple</div>
        <div>Seeking Spring or Fall 2025 co-op/internship</div>
      </div>

      <div className="font-mono mt-12 text-blue-300">
        <a href="mailto:vinliu356@gmail.com" className="block">
          <span className="hover:underline">
            vinliu356@gmail.com <MailIcon />
          </span>
        </a>
        <a
          href="https://github.com/vinn03"
          target="_blank"
          rel="noreferrer"
          className="block"
        >
          <span className="hover:underline">
            vinn03 <GitHub />
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/vincent-wz-liu"
          target="_blank"
          rel="noreferrer"
          className="block"
        >
          <span className="hover:underline">
            vincent-wz-liu <LinkedIn />
          </span>
        </a>
      </div>
    </span>
  );
}

export default Intro;
