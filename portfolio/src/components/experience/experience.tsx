import ExpComponent from "./exp-component";

function Experience() {
  return (
    <div className="grid grid-cols-1 gap-8 justify-start ">
      <div className="bg-opacity-20 rounded-lg shadow-md relative">
        <ExpComponent
          title="Software Engineering Intern"
          company="Apple Inc."
          location="Cupertino, CA"
          duration="MAY 2024 - AUG 2024"
          technologies={[
            "React",
            "Redux",
            "TypeScript",
            "MapKit JS",
            "deck.gl",
            "CSS",
          ]}
          description={
            <>
              I integrated{" "}
              <a
                className="text-blue-100 hover:underline"
                href="https://developer.apple.com/maps/web/"
                target="_blank"
                rel="noopener noreferrer"
              >
                MapKit JS
              </a>{" "}
              and Apple-themeed visualization palettes into{" "}
              <a
                className="text-blue-100 hover:underline"
                href="https://kepler.gl"
                target="_blank"
                rel="noopener noreferrer"
              >
                Kepler.gl
              </a>
              . <br></br>
              <br></br>I also refactored the application using adapter, factory,
              and object-oriented design patterns to improve scalability and
              maintainability.
            </>
          }
        />
      </div>
      <div className="bg-opacity-20 rounded-lg shadow-md relative">
        <ExpComponent
          title="Coding Instructor"
          company="Roboplanet"
          location="Richmond, BC"
          duration="SEP 2022 - MAR 2023"
          technologies={["Python", "JavaScript", "Scratch"]}
          description="Taught students aged 6-12 the basics of programming in Python, JavaScript, and Scratch. Developed and delivered lesson plans, and provided guidance to students on their assignments and projects."
        />
      </div>
    </div>
  );
}

export default Experience;
