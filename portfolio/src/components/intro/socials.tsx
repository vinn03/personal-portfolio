import MailIcon from "@mui/icons-material/Mail";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import { GitHub, LinkedIn } from "@mui/icons-material";

function Socials() {
  return (
    <div className="font-mono mt-4 mb-16 lg:mb-0 text-navy-700 dark:text-blue-300 text-center lg:text-right">
      <a href="mailto:vinliu356@gmail.com" aria-label="Send email to Vincent">
        <span className="hover:text-navy-900 dark:hover:brightness-200 mr-1 transition-colors">
          <MailIcon fontSize="large" aria-hidden="true" />
        </span>
      </a>
      <a
        href="https://github.com/vinn03"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub profile (opens in new tab)"
      >
        <span className="hover:text-navy-900 dark:hover:brightness-200 mr-1 transition-colors">
          <GitHub fontSize="large" aria-hidden="true" />
        </span>
      </a>
      <a
        href="https://www.linkedin.com/in/vincent-wz-liu"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn profile (opens in new tab)"
      >
        <span className="hover:text-navy-900 dark:hover:brightness-200 mr-1 transition-colors">
          <LinkedIn fontSize="large" aria-hidden="true" />
        </span>
      </a>
      <a
        href="https://www.vinn03.dev/cv/cv.pdf"
        target="_blank"
        rel="noreferrer"
        aria-label="View CV (opens in new tab)"
      >
        <span className="hover:text-navy-900 dark:hover:brightness-200 transition-colors">
          <TextSnippetIcon fontSize="large" aria-hidden="true" />
        </span>
      </a>
    </div>
  );
}

export default Socials;
