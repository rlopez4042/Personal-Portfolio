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
            <li><span className="number">0.1</span> about me</li>
            <li><span className="number">0.2</span> projects</li>
            <li><span className="number">0.3</span> contact</li>
          </ul>
        </nav>
      </header>
      
      <div className="mainContent">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        {<AboutMe />}
        {<Projects />}
        {<Contact />}
        {<SocailMenu />}
      </div>
    </div>
  );
}

export default App;
