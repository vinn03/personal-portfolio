import ExpComponent from "./components/exp-component";

const Experience = () => {
  return (
    <div className="ml-2 mr-2">
      <h2 className="text-2xl md:text-4xl mt-36 mb-6 md:pb-12 font-sans text-blue-100 text-center font-bold">
        Experience
      </h2>
      <div className="md:flex md:flex-row md:justify-between md:mr-36 md:ml-36">
        <span className="bg-opacity-20 p-4 w-1/2 rounded-lg shadow-md relative">
          <ExpComponent
            title="Software Engineering Intern"
            company="Apple Inc."
            location="Cupertino, CA"
            duration="MAY 2024 - PRESENT"
            technologies={["React", "Redux", "TypeScript", "CSS"]}
            description="Interned with the Apple Maps team. Developed, and deployed, an internal application that allows users to visualize large-scale datasets."
          />
        </span>
        <span className="bg-opacity-20 p-4 w-1/2 rounded-lg shadow-md relative">
          <ExpComponent
            title="Coding Instructor"
            company="Roboplanet"
            location="Richmond, BC"
            duration="SEP 2022 - MAR 2023"
            technologies={["Python", "Scratch"]}
            description="Taught students aged 6-12 the basics of programming in Python and Scratch. Developed and delivered lesson plans, and provided guidance to students on their assignments and projects."
          />
        </span>
      </div>
    </div>
  );
};

export default Experience;
