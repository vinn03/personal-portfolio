import Socials from "./socials";

function IntroHeader() {
  return (
    <span className="text-center lg:text-right block">
      <h1 className="text-4xl lg:text-6xl font-mono font-bold text-navy-900 dark:text-blue-100">
        Vincent Liu
      </h1>

      <div className="text-xl font-mono mt-4 text-navy-800 dark:text-blue-100">
        <div>CS + GIS Undergrad @ SFU</div>
        <div>SWE Intern @ GeoComply</div>
        <div>Prev. 2x SWE Intern @ Apple</div>
      </div>

      <div className="text-lg font-mono font-bold mt-4 text-navy-700 dark:text-blue-200">
        New Grad Availability: Summer 2026
      </div>
    </span>
  );
}

function IntroFooter() {
  return (
    <span className="text-center lg:text-right block">
      <Socials />
    </span>
  );
}

function Intro() {
  return (
    <>
      <IntroHeader />
      <IntroFooter />
    </>
  );
}

export default Intro;
export { IntroHeader, IntroFooter };
