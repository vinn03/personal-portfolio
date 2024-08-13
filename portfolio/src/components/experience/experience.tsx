import ExpComponent from "./components/exp-component";

const Experience = () => {
  return (
    <div className="bg-blue-400 bg-opacity-20 p-4 rounded-lg shadow-md relative">
      <ExpComponent
        title="Software Developer"
        company="Company Name"
        duration="Jan 2021 - Present"
        description="I am a software developer working on a variety of projects. 
        I have experience with front-end and back-end technologies, as well as deployment and testing."
      />
    </div>
  );
};

export default Experience;
