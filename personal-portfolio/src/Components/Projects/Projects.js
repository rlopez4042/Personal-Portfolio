function Projects() {
  let firstProject = (
    <div id="container">
      <p className="date">20220121</p>
      <img
        className="projectImage"
        src={require("../../Images/Firstproject.png")}
        alt=""
      />
      <div className="projBox">
        <p className="projectDescriptionMobile">
          My first project and orignal portfolio. Built using only HTML, CSS,
          and JavaScript.
        </p>
        <p className="projectDescription1">
          I built a personal portfolio using CSS, HTML, and JavaScript. I
          decided to keep my original portfolio in-tact instead of upgrading it.
          I think this project serves as a good benchmark for progress, and
          sometimes I like to look back and see how far I've come.
        </p>
      </div>
      <div className="projectButtons">
        <a
          href="https://rlopez4042.github.io/Project-1-Portfolio/"
          rel="noreferrer"
          target="_blank"
        >
          <button className="button-3" role="button">
            Website
          </button>
        </a>
        <a
          href="https://github.com/rlopez4042/Project-1-Portfolio"
          rel="noreferrer"
          target="_blank"
        >
          <button className="button-3" role="button">
            My Code{" "}
          </button>
        </a>
      </div>
    </div>
  );

  let secondProject = (
    <div id="container">
      <p className="date">20220211</p>
      <img
        className="projectImage"
        src={require("../../Images/Secondproject.png")}
        alt=""
      />
      <div className="projBox">
        <p className="projectDescriptionMobile">
          My first project using APIs and React. 'Surfs Up San Diego', provides
          surf data for local beaches in San Diego.
        </p>
        <p className="projectDescription1">
          This app is designed to show updated surf conditions for my favorite
          beaches in San Diego. The Surfline API I was using wasn't very user
          friendly so the displayed information was a bit limited. Most proud of
          the clean design and animated background.
        </p>
      </div>
      <div className="projectButtons">
        <a
          href="https://rlopez4042.github.io/project-2-portfolio/"
          rel="noreferrer"
          target="_blank"
        >
          <button className="button-3" role="button">
            Website
          </button>
        </a>
        <a
          href="https://github.com/rlopez4042/project-2-portfolio"
          rel="noreferrer"
          target="_blank"
        >
          <button className="button-3" role="button">
            My Code{" "}
          </button>
        </a>
      </div>
    </div>
  );

  let thirdProject = (
    <div id="container">
      <p className="date">20220306</p>
      <img
        className="projectImage"
        src={require("../../Images/ThirdProject.jpg")}
        alt=""
      />
      <div className="projBox">
        <p className="projectDescriptionMobile">
          Takes user input to provide an estimated BMI, also provides caloric
          estimates for weight adjustment goals.
        </p>
        <p className="projectDescription1">
          My first project built with Angular. This app is designed to calculate
          an individual’s BMI give user-input and calculate optimal caloric
          deficit to lose weight at the user's desired pace.
        </p>
      </div>
      <div className="projectButtons">
        <a
          href="https://rlopez4042.github.io/Calorie-Calculator/"
          rel="noreferrer"
          target="_blank"
        >
          <button className="button-3" role="button">
            Website
          </button>
        </a>
        <a
          href="https://github.com/rlopez4042/Calorie-Calculator"
          rel="noreferrer"
          target="_blank"
        >
          <button className="button-3" role="button">
            My Code{" "}
          </button>
        </a>
      </div>
    </div>
  );

  let fourthProject = (
    <div id="container">
      <p className="date">20220307</p>
      <img
        className="projectImage"
        src={require("../../Images/Project3GA.png")}
        alt=""
      />
      <div className="projBox">
        <p className="projectDescriptionMobile">
          A workout planner for users to create custom workouts with exercises,
          repetitions and set schemes.
        </p>
        <p className="projectDescription1">
          My first large group project and third project at General Assembly.
          This project incorporates a fully functional back and front end. My
          biggest take away from this project was learning how to work with
          other developers on a larger project.
        </p>
      </div>
      <div className="projectButtons">
        <a
          href="https://rlopez4042.github.io/WorkoutPlannerClient/"
          rel="noreferrer"
          target="_blank"
        >
          <button className="button-3" role="button">
            Website
          </button>
        </a>
        <a
          href="https://github.com/rlopez4042/WorkoutPlannerApi"
          rel="noreferrer"
          target="_blank"
        >
          <button className="button-3" role="button">
            Our Code{" "}
          </button>
        </a>
      </div>
    </div>
  );

  return (
    <div className="projects">
      <h1 className="projectsTitle">
        <span className="number">0.1</span> Projects<hr className="new4"></hr>
      </h1>
      <section className="projectSubText"></section>
      <h2 className="projectTitle">My First Portfolio</h2>
      <div className="projectSpacing">{firstProject}</div>
      <h2 className="projectTitle">Surfs Up San Diego</h2>
      <div className="projectSpacing">{secondProject}</div>
      <h2 className="projectTitle">Calorie Calculator</h2>
      <div className="projectSpacing">{thirdProject}</div>
      <h2 className="projectTitle">Workout Planner</h2>
      <div className="projectSpacing">{fourthProject}</div>
    </div>
  );
}

export default Projects;
