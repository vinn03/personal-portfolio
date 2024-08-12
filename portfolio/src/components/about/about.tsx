import image from "../../assets/APC_0084.jpg";

function About() {
  return (
    <div className="mt-10 ml-5 md:ml-28 md:mt-20 flex flex-col md:flex-row">
      <span
        className="w-full mr-0 md:w-1/2 md:mr-10"
        style={{ animation: "fadeIn 2s ease-in-out 0s forwards" }}
      >
        <h1 className="text-4xl md:text-8xl pt-16 md:pt-8 font-sans font-bold text-blue-100">
          Vincent Liu
        </h1>

        <h3 className="text-xl md:text-2xl mt-6 font-sans text-blue-100">
          Aspiring GIS & Software Developer
        </h3>

        <ul className="pr-10 pt-10 ml-4 font-sans list-disc text-blue-100">
          <li>
            Third-year Geographic Information Science student at Simon Fraser
            University
          </li>
          <li>Software Engineering Intern at Apple</li>
          <li>Seeking Spring & Summer 2025 internships</li>
        </ul>

        <hr className="border-t-2 border-blue-100 mt-10"></hr>

        <br></br>
        <br></br>

        <p className="font-mono text-sm md:text-base pr-5 w-full text-blue-100">
          Originally a Human Geography major, my interest in computing science
          and software development sparked after taking my first programming
          course in Summer 2022.
          <br></br> <br></br>
          The process of problem-solving and creating programs proved to be
          incredibly fulfilling, fuelling my desire to transfer into the School
          of Computing Science and to further pursue such rewarding work.
          <br></br> <br></br>
          Since then, I've attended numerous hackathons and worked towards a
          transfer into the combined honours program between computing science
          and geography. <br></br> <br></br>
          This goal was finally achieved in Summer 2023. <br></br> <br></br>
          Currently, I am honing my skills in{" "}
          <strong>full-stack development</strong>, with interest in{" "}
          <strong>web GIS</strong>. <br></br> <br></br>
          In my down time, I enjoy playing video games (especially role-playing
          games), strumming the guitar, jamming on drums, 3D printing and
          modelling, and diving into topics such as urbanism and world history.{" "}
          <br></br> <br></br>
        </p>
      </span>
      <img
        className="slide-in size-4/5 sm:mt-5 ml-10 md:size-1/4 md:m-10 md:ml-44"
        src={image}
        alt="Vincent Liu"
        style={{ borderRadius: "20px" }}
      />
    </div>
  );
}

export default About;
