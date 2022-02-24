import './AboutMe.css'

function AboutMe() {
  let aboutMe = (
    <div className="aboutMe">
      <h1><span className="number">0.1</span> About Me</h1>
      <p className="intro">
        Hey! My name is Rober Lopez and I'm currently located in San Diego,
        California. I'm a decorated transitioning service member with five years
        comprehensive ground combat intelligence analyst experience looking to
        launch a career in software developement.
      </p>
      <p className="body">
        I've recently graduated from San Diego Mesa College with an Associates
        in Science, majoring in Computer Science, and aim to continue my
        education at San Diego State University starting in the Fall of 2022.
        I'm also currently enrolled in a Software Engineering Immersive course
        at General Assembly.
      </p>
      <p className="ending">
        I'm eager to launch a career in software development and work tirelessly
        to hone my skills and develope myself proffesionally. These are my areas
        of focus:
      </p>
    </div>
  );
  return <div>{aboutMe}</div>;
}

export default AboutMe;
