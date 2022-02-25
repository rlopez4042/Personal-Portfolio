import "./AboutMe.css";

function AboutMe() {
  let aboutMe = (
    <div className="aboutMe">
      <h1>
        <span className="number">0.1</span> About me 
      </h1><div className="vl"></div>
      <div className="row">
      <div className="column left">
      <div>
      <img className="resumeImage"
        src={require("/Users/robertlopez/Desktop/MyPortfolio/PersonalPortfolio/personal-portfolio/src/Images/picofmeee.png")}
        width="160"
        height="190"
        alt=""
      />
    </div>
      </div>
      <div className="column right">
      <p className="intro">
        Hey! My name is Robert Lopez and I'm currently located in San Diego,
        California. I'm a decorated transitioning service member with five years
        comprehensive ground combat intelligence analyst experience looking to
        launch a career in software developement.
      </p>
      </div>
      </div>
      <p className="body">
        I've recently graduated from San Diego Mesa College with an Associates
        in Science, majoring in Computer Science, and aim to continue my
        education at San Diego State University starting in the Fall of 2022.
        I'm also currently enrolled in a Software Engineering Immersive course
        at General Assembly.
      </p>
      <p className="ending">
        I'm eager to launch a career in software development. If you'd like to
        learn a little more about me, I've linked a copy of my updated resume
        in the top right! Some of my areas of focus:
      </p>
      <ul className="aboutMeLogoList">
        <li className="aboutMeLogo">
          <img
            src={require("/Users/robertlopez/Desktop/MyPortfolio/PersonalPortfolio/personal-portfolio/src/Images/ImportedImages/htmlLogo.png")}
            width="50"
            height="50"
            alt=""
          />
        </li>
        <li className="aboutMeLogo">
          {" "}
          <img
            src={require("/Users/robertlopez/Desktop/MyPortfolio/PersonalPortfolio/personal-portfolio/src/Images/ImportedImages/cssLogo.png")}
            width="50"
            height="50"
            alt=""
          />
        </li>
        <li className="aboutMeLogo">
          {" "}
          <img
            src={require("/Users/robertlopez/Desktop/MyPortfolio/PersonalPortfolio/personal-portfolio/src/Images/ImportedImages/jsLogo.png")}
            width="50"
            height="50"
            alt=""
          />
        </li>
        <li className="aboutMeLogo">
          {" "}
          <img
            src={require("/Users/robertlopez/Desktop/MyPortfolio/PersonalPortfolio/personal-portfolio/src/Images/ImportedImages/react.png")}
            width="50"
            height="50"
            alt=""
          />
        </li>{" "}
      </ul>
    </div>
  );
  let resumeImage = (
    <div className="resumeImage">
      <img
        src={require("/Users/robertlopez/Desktop/MyPortfolio/PersonalPortfolio/personal-portfolio/src/Images/picofmeee.png")}
        width="180"
        height="210"
        alt=""
      />
    </div>
  );
  return (
    <div>{aboutMe}</div>
    // <div class="row">
    //   <div class="column">{resumeImage}</div>
    //   <div class="column">{aboutMe}</div>
    // </div>
  );
}

export default AboutMe;
