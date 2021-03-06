function Contact() {
  let contact = (
    <div>
      <p className="contactMeBody">
        I'm always looking for new opportunities. Feel free to reach out to
        me with any questions in an email with the link below, and I'll get back
        to you as soon as possible.
      </p>
      <section className="emailSection">
        <a href="https://www.linkedin.com/in/robert-t-lopez/" rel="noreferrer" target="_blank">
          <img
            className="miniMobileLink"
            src={require("../../Images/linkedinmobile.png")}
              width="50"
              height="50"
              alt=""
          />
        </a>
        <a href="mailto:rlopez4042@gmail.com">
          <img
            className="emailImage"
            src={require("../../Images/ImportedImages/colored-gmail.png")}
            width="50"
            height="50"
            alt=""
          />
        </a>
        <a href="https://github.com/rlopez4042" rel="noreferrer" target="_blank">
          <img
            className="miniMobileLink"
            src={require("../../Images/GitHubmobile.png")}
            width="50"
            height="50"
            alt=""
          />
        </a>
      </section>
    </div>
  );
  return (
    <div className="contactMe">
      <h1 className="contactMeTitle">
        <span className="number">0.3</span> Contact<hr className="new4"></hr>
      </h1>
      <div>{contact}</div>
    </div>
  );
}

export default Contact;
