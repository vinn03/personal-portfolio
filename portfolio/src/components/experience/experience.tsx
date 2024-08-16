import ExpComponent from "./components/exp-component";

const Experience = () => {
  return (
    <>
      <h2 className="text-2xl md:text-4xl mt-36 mb-6 md:pb-12 font-sans text-blue-100 text-center font-bold">
        Experience
      </h2>
      <div className="flex flex-row justify-between md:mr-28 md:ml-28">
        <span className="bg-opacity-20 p-4 w-1/2 rounded-lg shadow-md relative">
          <ExpComponent
            title="Coding Instructor"
            company="Roboplanet Robotics Academy"
            location="Richmond, BC"
            duration="SEP 2022 - MAR 2023"
            technologies={["Python", "Scratch"]}
            description="Taught students aged 6-12 the basics of Python and Scratch programming. Developed and delivered lesson plans, and provided guidance to students on their assignments and projects."
          />
        </span>
        <span className="bg-opacity-20 p-4 w-1/2 rounded-lg shadow-md relative">
          <ExpComponent
            title="Software Engineering Intern"
            company="Apple Inc."
            location="Cupertino, CA"
            duration="MAY 2024 - PRESENT"
            technologies={[
              "React",
              "Redux",
              "TypeScript",
              "CSS",
              "MapKit JS",
              "deck.gl",
            ]}
            description="Interned with the Apple Maps team. Developed, and deployed, an internal data visualization application that allows users to visualize large-scale datasets."
          />
        </span>
      </div>
    </>
  );
};

export default Experience;
