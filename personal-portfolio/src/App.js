import "./App.css";
import "./App.scss";
import { Route, Link, Routes, Navigate } from "react-router-dom";
import Home from "./Components/Home/Home";
import AboutMe from "./Components/AboutMe/AboutMe";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";

function App() {
  let navigation = {};
  return (
    <div>
      {<Home />}
      {<AboutMe />}
      {<Projects />}
      {<Contact />}
      <main>
        <Routes></Routes>
      </main>
    </div>
  );
}

export default App;
