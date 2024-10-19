import MailIcon from "@mui/icons-material/Mail";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import { GitHub, LinkedIn } from "@mui/icons-material";

function Socials() {
  return (
    <div className="font-mono mt-4 mb-24 lg:mb-0 text-blue-300 text-right">
      <a href="mailto:vinliu356@gmail.com">
        <span className="hover:brightness-200 mr-1">
          <MailIcon fontSize="large" />
        </span>
      </a>
      <a href="https://github.com/vinn03" target="_blank" rel="noreferrer">
        <span className="hover:brightness-200 mr-1">
          <GitHub fontSize="large" />
        </span>
      </a>
      <a
        href="https://www.linkedin.com/in/vincent-wz-liu"
        target="_blank"
        rel="noreferrer"
      >
        <span className="hover:brightness-200 mr-1">
          <LinkedIn fontSize="large" />
        </span>
      </a>
      <a href="/public/cv.pdf" target="_blank" rel="noreferrer">
        <span className="hover:brightness-200">
          <TextSnippetIcon fontSize="large" />
        </span>
      </a>
    </div>
  );
}

export default Socials;
