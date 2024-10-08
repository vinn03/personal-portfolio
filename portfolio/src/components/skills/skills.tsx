import { useState, useEffect } from "react";
import SmallSkill from "./components/skill-sm";
import LargeSkill from "./components/skill-lg";
import reactimg from "../../assets/img_skills/react.png";
import pythonimg from "../../assets/img_skills/python.png";
import angularimg from "../../assets/img_skills/angular.png";
import typescriptimg from "../../assets/img_skills/typescript.png";
import javascriptimg from "../../assets/img_skills/js.png";
import cppimg from "../../assets/img_skills/cpp.png";
import htmlimg from "../../assets/img_skills/html.png";
import cssimg from "../../assets/img_skills/css.png";
import sqlimg from "../../assets/img_skills/sql.png";
import nodeimg from "../../assets/img_skills/node.png";
import mongoimg from "../../assets/img_skills/mongodb.png";
import qgisimg from "../../assets/img_skills/qgis.png";
import arcgisimg from "../../assets/img_skills/arcgispro.png";
import expressimg from "../../assets/img_skills/express.png";
import tailwindsvg from "../../assets/img_skills/tailwind.svg";
import "./skills.css";

const Skills: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <h2 className="text-2xl md:text-4xl mt-24 font-sans text-blue-100 text-center font-bold">
        Technical Skills
      </h2>
      <div
        className={`${isMobile ? "mt-4 font-mono text-blue-100" : "mt-4 font-mono text-blue-100"}`}
      >
        <div className={`${isMobile ? "" : "flex flex-row justify-center"}`}>
          <div
            className={`${isMobile ? "grid grid-cols-3 gap-2 text-lg" : "grid grid-rows-1 grid-flow-col gap-2 text-lg"}`}
          >
            <LargeSkill
              name="React"
              href="https://reactjs.org/"
              src={reactimg}
              isMobile={isMobile}
            />
            <LargeSkill
              name="JavaScript"
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              src={javascriptimg}
              isMobile={isMobile}
            />
            <LargeSkill
              name="TypeScript"
              href="https://www.typescriptlang.org/"
              src={typescriptimg}
              isMobile={isMobile}
            />
            <LargeSkill
              name="HTML"
              href="https://developer.mozilla.org/en-US/docs/Web/HTML"
              src={htmlimg}
              isMobile={isMobile}
            />
            <LargeSkill
              name="CSS"
              href="https://developer.mozilla.org/en-US/docs/Web/CSS"
              src={cssimg}
              isMobile={isMobile}
            />
            <LargeSkill
              name="Tailwind"
              href="https://tailwindcss.com/"
              src={tailwindsvg}
              isMobile={isMobile}
            />
          </div>
        </div>
        <div className="flex flex-row justify-center mt-2">
          <div
            className={`${isMobile ? "grid grid-cols-4 gap-3 text-xs" : "grid grid-rows-1 grid-flow-col gap-4 text-xs"}`}
          >
            <SmallSkill
              name="Angular"
              href=""
              src={angularimg}
              isMobile={isMobile}
            />
            <SmallSkill
              name="Node.js"
              href="https://nodejs.org/"
              src={nodeimg}
              isMobile={isMobile}
            />
            <SmallSkill
              name="Express"
              href="https://expressjs.com/"
              src={expressimg}
              isMobile={isMobile}
            />
            <SmallSkill
              name="C++"
              href="https://isocpp.org/"
              src={cppimg}
              isMobile={isMobile}
            />
            <SmallSkill
              name="Python"
              href="https://www.python.org/"
              src={pythonimg}
              isMobile={isMobile}
            />
            <SmallSkill
              name="SQL"
              href="https://www.w3schools.com/sql/"
              src={sqlimg}
              isMobile={isMobile}
            />
            <SmallSkill
              name="MongoDB"
              href="https://www.mongodb.com/"
              src={mongoimg}
              isMobile={isMobile}
            />
            <SmallSkill
              name="QGIS"
              href="https://www.qgis.org/"
              src={qgisimg}
              isMobile={isMobile}
            />
            <SmallSkill
              name="ArcGIS Pro"
              href="https://www.arcgis.com/"
              src={arcgisimg}
              isMobile={isMobile}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
