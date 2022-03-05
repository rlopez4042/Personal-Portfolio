import "./App.css";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import AboutMe from "./Components/AboutMe/AboutMe";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import SocailMenu from "./Components/SocialMenu/SocialMenu";

function App() {
  return (
    <div className="container">
      <div>
        <div className="accentLineLeft"></div>
        <p className="emailLink">rlopez4042@gmail.com</p>
        <div className="accentLineRight"></div>
        <header>
          <nav>
            <ul>
              <li className="mainNavBar">
                <span className="number">0.1</span>
                <a href="#projects"> projects</a>
              </li>
              <li className="mainNavBar">
                <span className="number">0.2</span>
                <a href="#aboutMe"> about me</a>
              </li>
              <li className="mainNavBar">
                <span className="number">0.3</span>
                <a href="#contact"> contact</a>
              </li>
            </ul>
          </nav>
          <section className="resumeLink">
            <a
              href="https://docs.google.com/document/d/1__CDPlZyVmbbblfBeLImqJ1tBSAsYPOtUBDie_52Ybs/edit?usp=sharing"
              target="_blank"
            >
              <button className="button"> Resume </button>
            </a>
          </section>
        </header>
        <div className="mainContent">
          <main>
            <div className="homeGrid">
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </div>
          </main>
          <div className="projectsGrid">
            <a name="projects"></a>
            {<Projects />}
          </div>
          <div className="aboutGrid">
            <a name="aboutMe"></a>
            {<AboutMe />}
          </div>
          <div className="contactGrid">
            <a name="contact"></a>
            {<Contact />}
          </div>
          {<SocailMenu />}
        </div>
      </div>
    </div>
  );
}

export default App;
