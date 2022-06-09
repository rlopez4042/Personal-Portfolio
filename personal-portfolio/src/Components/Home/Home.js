function Home() {
  let home = (
    <div className="home">
      <h3 className="slimShady">Hi, my name is</h3>
      <h1 className="name">Robert Lopez.</h1>
      <h3 className="tagline">Student | Software Developer</h3>
      <p className="summary">
        A decorated Marine Corps veteran and recent San Diego Mesa College and
        General Assembly graduate, living in San Diego, California. I'm a Junior
        Software Developer at InnovaSystems International and student currently
        pursuing a bachelor's degree in Computer Science at San Diego State
        University.
      </p>
      <p className="summaryMobile">
        A decorated Marine Corps veteran and Junior Software Developer at
        InnovaSystems International, currently pursuing a bachelor's degree in
        Computer Science at San Diego State University.<br></br>
        <span className="spanWhite">Check out some of my projects below:</span>
      </p>
    </div>
  );
  return <div>{home}</div>;
}

export default Home;
