function Contact() {
  let contact = (
    <div>
      <p className="contactMeBody">
        I'm always looking for new job opportunities. Feel free to reach out to
        me with any questions in an email or Google form below and I'll get back
        to you as soon as possible.
      </p>
      <section className="emailSection">
        <a href="mailto:rlopez4042@gmail.com">
          <img
            className="emailImage"
            src={require("/Users/robertlopez/Desktop/MyPortfolio/PersonalPortfolio/personal-portfolio/src/Images/ImportedImages/colored-gmail.png")}
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
