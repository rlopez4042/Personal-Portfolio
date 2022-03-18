function AboutMe() {
  let aboutMe = (
    <div>
      <p className="intro">
        My name is Robert Lopez and I'm currently located in San Diego,
        California. I'm a decorated transitioning service member with five years
        comprehensive ground combat intelligence analyst experience looking to
        launch a career in software development.
      </p>
      <p className="body">
        I recently graduated from San Diego Mesa College with an Associates in
        Science, majoring in Computer Science, and aim to continue my education
        at San Diego State University starting in the Fall of 2022. I'm
        currently enrolled in a Software Engineering Immersive course at General
        Assembly.
      </p>
      <p className="ending">
        I'm eager to launch a career in software development. If you'd like to
        learn a little more about me, I've linked a copy of my updated resume in
        the top right.
      </p>
      <p id="forList">Skills include:</p>
      <ul className="aboutMeLogoList">
        <li className="aboutMeLogo">
          <img
            src={require("../../Images/ImportedImages/htmlLogo.png")}
            width="50"
            height="50"
            alt=""
          />
        </li>
        <li className="aboutMeLogo">
          <img
            src={require("../../Images/ImportedImages/cssLogo.png")}
            width="50"
            height="50"
            alt=""
          />
        </li>
        <li className="aboutMeLogo">
          <img
            src={require("../../Images/ImportedImages/jsLogo.png")}
            width="50"
            height="50"
            alt=""
          />
        </li>
        <li className="aboutMeLogo">
          <img
            src={require("../../Images/ImportedImages/react.png")}
            width="50"
            height="50"
            alt=""
          />
        </li>
        <li className="aboutMeLogo">
          <img
            src={require("../../Images/5847ea22cef1014c0b5e4833.png")}
            width="50"
            height="50"
            alt=""
          />
        </li>
        <li className="aboutMeLogo">
          <img
            src={require("../../Images/ImportedImages/java-logo-1.png")}
            width="70"
            height="70"
            alt=""
          />
        </li>

        <li className="aboutMeLogo">
          <img
            src={require("../../Images/Python.webp")}
            width="60"
            height="60"
            alt=""
          />
        </li>

        <li className="aboutMeLogo">
          <img
            src={require("../../Images/mongoDB.png")}
            width="60"
            height="60"
            alt=""
          />
        </li>

        <li className="aboutMeLogo">
          <img
            src={require("../../Images/sql.png")}
            width="60"
            height="60"
            alt=""
          />
        </li>

      </ul>
    </div>
  );
  return (
    <div className="aboutMe">
      <h1 className="aboutMeTitle">
        <span className="number">0.2</span> About me<hr className="new4"></hr>
      </h1>
      {aboutMe}
    </div>
  );
}
export default AboutMe;
