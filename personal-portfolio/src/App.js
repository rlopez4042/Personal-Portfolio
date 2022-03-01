import "./App.css";
import "./App.scss";
import { Route, Link, Routes, Navigate } from "react-router-dom";
import Home from "./Components/Home/Home";
import AboutMe from "./Components/AboutMe/AboutMe";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import SocailMenu from "./Components/SocialMenu/SocialMenu";
import Hamburger from "./Components/Hamburger/Hamburger";
// import Animation from "./Components/Animation/Animation";

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
        </header>

        <div className="mainContent">
          <main>
            <div className="homeGrid">
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </div>
          </main>
          {<Hamburger />}

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
