import "./App.css";
import "./App.scss";
import { Route, Link, Routes, Navigate } from "react-router-dom";
import Home from "./Components/Home/Home";
import AboutMe from "./Components/AboutMe/AboutMe";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import SocailMenu from "./Components/SocialMenu/SocialMenu";

function App() {
  return (
    <div>
      <div className="vlLeft"></div>
      <p className="emailLink">rlopez4042@gmail.com</p>
<div className="vlRight"></div>
      <header>
        <nav>
          <ul>
          <li id="resumeButton">
          <a href="https://www.linkedin.com/in/robert-t-lopez/">
          <img
              src={require(
                "/Users/robertlopez/Desktop/MyPortfolio/PersonalPortfolio/personal-portfolio/src/Images/business-contact-icon-256.png"
              )}
             
            
              width="50"
              height="50"
              alt=""
            />
          </a>
        </li>
            <li className="mainNavBar"><span className="number">0.1</span><a href="#aboutMe"> about me</a></li>
            <li className="mainNavBar"><span className="number">0.2</span><a href="#projects"> projects</a></li>
            <li className="mainNavBar"><span className="number">0.3</span><a href="#contact"> contact</a></li>
          </ul>
        </nav>
      </header>
      
      <div className="mainContent">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <a name="aboutMe"></a>
        {<AboutMe />}
        <a name="projects"></a>
        {<Projects />}
        <a name="contact"></a>
        {<Contact />}
        {<SocailMenu />}
      </div>
    </div>
  );
}

export default App;
