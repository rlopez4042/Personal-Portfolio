function Home() {
  let home = (
    <div className="home">
      <h3 className="slimShady">Hi, my name is</h3>
      <h1 className="name">Robert Lopez.</h1>
      <h3 className="tagline">Software Engineer</h3>

      <p className="summary">
        A Marine Corps veteran and Software Engineer based in San Diego, California. I have experience building and maintaining full-stack applications in production environments, primarily using React, .NET, and API-driven architectures. I am currently pursuing a bachelor's degree in Computer Science at San Diego State University. The projects below reflect earlier work, while my recent experience includes production applications and enterprise systems.
      </p>

      <p className="summaryMobile">
        A Marine Corps veteran and Software Engineer with experience in full-stack development and production systems, currently pursuing a bachelor's degree in Computer Science at San Diego State University.<br></br>
        <span className="spanWhite">
          The projects below reflect earlier work. Recent experience includes production applications and enterprise systems.
        </span>
      </p>
    </div>
  );
  return <div>{home}</div>;
}

export default Home;
