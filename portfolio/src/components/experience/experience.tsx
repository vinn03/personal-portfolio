import ExpComponent from "./exp-component";

function Experience() {
  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "Apple Inc.",
      location: "Cupertino, CA",
      duration: "MAY 2025 - AUG 2025",
      description: <>Apple Maps part 2 :D</>,
      technologies: [],
    },
    {
      title: "Software Engineering Intern",
      company: "Apple Inc.",
      location: "Cupertino, CA",
      duration: "MAY 2024 - AUG 2024",
      technologies: [
        "React",
        "Redux",
        "TypeScript",
        "MapKit JS",
        "deck.gl",
        "CSS",
      ],
      description: (
        <>
          I got to intern with Apple Maps during the summer of 2024! <br></br>
          <br></br>I worked on the integration of{" "}
          <a
            className="text-blue-100 hover:underline"
            href="https://developer.apple.com/maps/web/"
            target="_blank"
            rel="noopener noreferrer"
          >
            MapKit JS
          </a>{" "}
          and Apple-themed visualization palettes into{" "}
          <a
            className="text-blue-100 hover:underline"
            href="https://kepler.gl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kepler.gl
          </a>
          . <br></br>
          <br></br>I worked on refactoring Kepler.gl using the adapter design
          pattern to improve the scalability and maintainability of the app.
        </>
      ),
    },
    {
      title: "Coding Instructor",
      company: "Roboplanet",
      location: "Richmond, BC",
      duration: "SEP 2022 - MAR 2023",
      technologies: ["Python", "JavaScript", "Scratch"],
      description: (
        <>
          I taught students, aged 6-12, the basics of programming in Python,
          JavaScript, and Scratch.
          <br></br>
          <br></br>I also developed and delivered the lesson plans, and provided
          guidance to students on their assignments and projects.{" "}
        </>
      ),
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-8 justify-start">
      {experiences.map((exp, index) => (
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
