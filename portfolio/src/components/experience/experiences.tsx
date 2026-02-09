import ExpComponent from "./exp-component";
import EXPERIENCES from "../../data/experiences.json";

function Experience() {
  return (
    <section aria-labelledby="experience-heading">
      <h1 id="experience-heading" className="sr-only">
        Work Experience
      </h1>
      <div className="grid grid-cols-1 gap-8 justify-start">
        {EXPERIENCES.map((exp, index) => (
          <ExpComponent
            key={index}
            title={exp.title}
            company={exp.company}
            companyUrl={exp.companyUrl}
            duration={exp.duration}
            technologies={exp.technologies}
            description={exp.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Experience;
