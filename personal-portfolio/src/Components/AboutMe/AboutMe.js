function AboutMe() {
  let aboutMe = (
    <div>
<p className="intro">
  My name is Robert Lopez and I’m based in San Diego, California. I’m a Software Engineer with a background in the Marine Corps and experience building and maintaining production systems.
</p>

<p className="body">
  I hold an Associate of Science in Computer Science from San Diego Mesa College and am currently pursuing a Bachelor’s degree in Computer Science at San Diego State University. My professional experience includes developing full-stack applications using React, .NET, and API-driven architectures in enterprise environments.
</p>

<p className="ending">
  I’m currently a Software Engineer working on DoD enterprise systems. If you’d like to learn more, you can view my resume using the link in the top right.
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
