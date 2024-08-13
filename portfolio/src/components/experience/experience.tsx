import ExpComponent from "./components/exp-component";

const Experience = () => {
  return (
    <div className="bg-opacity-20 p-4 rounded-lg shadow-md relative">
      <h2 className="text-2xl md:text-4xl pt-8 pb-6 md:pb-12 font-sans text-blue-100 text-center font-bold">
        Experience
      </h2>
      <ExpComponent
        title="Software Engineering Intern"
        company="Apple Inc."
        duration="MAY 2024 - PRESENT"
        technologies={[
          "React",
          "Redux",
          "TypeScript",
          "CSS",
          "MapKit JS",
          "deck.gl",
        ]}
        description="Interned with the Apple Maps team. Worked on the development of an internal data visualization application."
      />
    </div>
  );
};

export default Experience;
