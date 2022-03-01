function Projects() {
  let firstProject = (
    <div className="rowProject">
      <div className="projectColumn projectLeft">
        <div className="projectImage">
          <img
            className="projectImageRound"
            src={require("/Users/robertlopez/Desktop/MyPortfolio/PersonalPortfolio/personal-portfolio/src/Images/Firstproject.png")}
            width="260"
            height="140"
            alt=""
          />
        </div>
      </div>
      <div className="projectColumn rightProject">
        <p className="projectDescripton">
          This was my very first project. I built a personal portfolio using
          CSS, HTML, and JavaScript. I decided to keep my original portfolio
          in-tact instead of upgrading it. I think this project serves as a good
          benchmark for progress, and sometimes I like to look back and see how
          far I've come.
        </p>
        <p className="projectDescriptonMobile">
          My first project and orignal portfolio. Built using exclusively HTML,
          CSS, and JavaScript.
        </p>
      </div>
    </div>
  );

  let secondProject = (
    <div className="rowProject">
      <div className="projectColumn projectLeft">
        <div className="projectImage">
          <img
            className="projectImageRound"
            src={require("/Users/robertlopez/Desktop/MyPortfolio/PersonalPortfolio/personal-portfolio/src/Images/Secondproject.png")}
            width="260"
            height="140"
            alt=""
          />
        </div>
      </div>
      <div className="projectColumn rightProject">
        <p className="projectDescripton">
          This was my first project working with APIs. This app is designed to
          show updated surf conditions for my favorite beaches in San Diego. The
          Surfline API I was using wasn't very user friendly so the displayed
          information was a bit limited. Most proud of the clean design and
          animated background.
        </p>
        <p className="projectDescriptonMobile">
          My first project using APIs and React. 'Surfs Up San Diego', provides
          surf data for local beaches in San Diego.
        </p>
      </div>
    </div>
  );

  let thirdProject = (
    <div className="rowProject">
      <div className="projectColumn projectLeft">
        <div className="projectImage">
          <img
            className="projectImageRound"
            src={require("/Users/robertlopez/Desktop/MyPortfolio/PersonalPortfolio/personal-portfolio/src/Images/ThirdProject.jpg")}
            width="260"
            height="140"
            alt=""
          />
        </div>
      </div>
      <div className="projectColumn rightProject">
        <p className="projectDescripton">
          This is a fitness tracker. It's not done yet but as soon as it is,
          I'll have the links up and running. This app is designed to calculate
          an individual’s BMI give user-input and calculate optimal caloric
          deficit to lose weight at the user's desired pace. Really want to lean
          into mathematics with this one.
        </p>
        <p className="projectDescriptonMobile">
          Leaned heavily into the math side of software developement. A BMI
          calculator, also provides caloric estimates for weight adjustment
          goals
        </p>
      </div>
    </div>
  );

  let fourthProject = (
    <div className="rowProject">
      <div className="projectColumn projectLeft">
        <div className="projectImage">
          <img
            className="projectImageRound"
            src={require("/Users/robertlopez/Desktop/MyPortfolio/PersonalPortfolio/personal-portfolio/src/Images/ThirdProject.jpg")}
            width="260"
            height="140"
            alt=""
          />
        </div>
      </div>
      <div className="projectColumn rightProject">
        <p className="projectDescripton">
        First Angular Project goes here.

        </p>
        <p className="projectDescriptonMobile">
          First Angular Project goes here.
        </p>
      </div>
    </div>
  );

  return (
    <div className="projects">
      <h1 className="projectsTitle">
        <span className="number">0.1</span> Projects
      </h1>
      <section className="projectSubText">
        <p>
        Some of my recent projects. Clicking the project images will bring you
        to each respective Github rep, ther you can take a closer look at my
        code and a more indepth porject description.
        </p>
      </section>
      <h2 className="projectTitle">My first portfolio</h2>
      <div className="projectSpacing">{firstProject}</div>
      <h2 className="projectTitle">Surfs Up San Diego</h2>
      <div className="projectSpacing">{secondProject}</div>
      <h2 className="projectTitle">BMI Calculator</h2>
      <div className="projectSpacing">{thirdProject}</div>
      {/* <h2 className="projectTitle">Angular Project</h2> */}
      {/* <div className="projectSpacing">{fourthProject}</div> */}
    </div>
  );
}

export default Projects;
