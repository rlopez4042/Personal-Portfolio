function Projects() {
  let firstProject = (
    <div className="rowProject">
      <div className="columnProject leftProject">
        <div className="projectImage">
          <img className="projectImageRound"
            src={require("/Users/robertlopez/Desktop/MyPortfolio/PersonalPortfolio/personal-portfolio/src/Images/Firstproject.png")}
            width="260"
            height="140"
            alt=""
          />
        </div>
      </div>
      <div className="columnProject rightProject">
        <p className="projectDescripton">
          This was my very first project. I built a personal portfolio using
          CSS, HTML, and JavaScript. I decided to keep my original portfolio
          in-tact instead of upgrading it. I think this project serves as a good
          benchmark for progess, and sometimes I like to look back and see how
          far I've come
        </p>
      </div>
    </div>
  );

  let secondProject = (
    <div className="rowProject">
      <div className="columnProject leftProject">
        <div className="projectImage">
          <img className="projectImageRound"
            src={require("/Users/robertlopez/Desktop/MyPortfolio/PersonalPortfolio/personal-portfolio/src/Images/Secondproject.png")}
            width="260"
            height="140"
            alt=""
          />
        </div>
      </div>
      <div className="columnProject rightProject">
        <p className="projectDescripton">
          This was my first project working with APIs. This app is designed to
          show updated surf conditions for my favorite beaches in San Diego. The
          Surfline API I was using wasn't very user friendly so the displayed
          information was a bit limited. Most proud of the clean design and
          animated background.
        </p>
      </div>
    </div>
  );

  let thirdProject = (
    <div className="rowProject">
      <div className="columnProject leftProject">
        <div className="projectImage">
          <img className="projectImageRound"
            src={require("/Users/robertlopez/Desktop/MyPortfolio/PersonalPortfolio/personal-portfolio/src/Images/ThirdProject.jpg")}
            width="260"
            height="140"
            alt=""
          />
        </div>
      </div>
      <div className="columnProject rightProject">
        <p className="projectDescripton">
          THis is a fitness tracker. It's not done yet but as soon as it is,
          I'll have the links up and running. This app is designed to calculate
          an inididuals BMI give user-input and calcualte optimal caloric
          deficit to lose weight at the user's desired pace. Really want to lean
          into mathematics with this one.
        </p>
      </div>
    </div>
  );

  return (
    <div className="aboutMe">
      <h1>
        <span className="number">0.2</span> Projects
      </h1>
      <h3 className="projectSubText">Some of my recent work. If you click the image, it'll take you to my Github repo. You can check out my code there if you like.</h3>
      <h2 className="projectTitle">My first portfolio</h2>
      <div className="projectSpacing">{firstProject}</div>
      <h2 className="projectTitle">Surfs Up San Diego</h2>
      <div className="projectSpacing">{secondProject}</div>
      <h2 className="projectTitle">BMI Calculator</h2>
      <div className="projectSpacing">{thirdProject}</div>
    </div>
  );
}

export default Projects;
