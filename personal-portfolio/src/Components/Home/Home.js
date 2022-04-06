function Home() {
  let home = (
    <div className="home">
      <h3 className="slimShady">Hi, my name is</h3>
      <h1 className="name">Robert Lopez.</h1>
      <h3 className="tagline">Student | Software Engineer</h3>
      <p className="summary">
        A decorated Marine Corps veteran and recent San Diego Mesa College and
        General Assembly graduate, living in San Diego, California. I'm an
        interdisciplinary software engineer currently pursuing a bachelor's
        degree in Computer Science at San Diego State University.
      </p>
      <p className="summaryMobile">
        A decorated Marine Corps veteran and interdisciplinary software
        engineer, recently graduated from San Diego Mesa College and General
        Assembly.<br></br>
        <span className="spanWhite">Check out some of my projects below:</span>
      </p>
    </div>
  );
  return <div>{home}</div>;
}

export default Home;
