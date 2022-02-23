import './Home.css'

function Home() {
  let home = (
    <div className="home">
      <h3 className="slimShady">Hi, my name is</h3>
      <h1 className="name">Robert Lopez</h1>
      <h3 className="tagline">
        I strive to build value by design and development.
      </h3>
      <p className="summary">
        A transitioning Marine Corps veteran currently pursuing a degree in
        Computer Science at San Diego State University. I'm an aspiring
        interdisciplinary software engineer currently enrolled at General
        Assembly and living in San Diego, California.
      </p>
    </div>
  );
  return <div>{home}</div>;
}

export default Home;
