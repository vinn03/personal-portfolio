import ExpComponent from "./exp-component";
import EXPERIENCES from "../../data/experiences.json";

function Experience() {
  return (
    <div className="grid grid-cols-1 gap-8 justify-start">
      {EXPERIENCES.map((exp, index) => (
        <div
          key={index}
          className="bg-opacity-20 rounded-lg shadow-md relative"
        >
          <ExpComponent
            title={exp.title}
            company={exp.company}
            location={exp.location}
            duration={exp.duration}
            technologies={exp.technologies}
            description={exp.description}
          />
        </div>
      ))}
    </div>
  );
}

export default Experience;
