import "./Contact.css";

function Contact() {
  let contact = (
    <div className="contactMe">
      <h1 className="contactMeTitle">
        <span className="number">0.3</span> Contact
      </h1>
      <p className="contactMeBody">
        My current focus is on furthering my education and obtaining my B.A. in
        Computer Science, however I'm still always looking for new job
        oppurtunites. Feel free to reach out to me with any questions in an
        email or Google form below and I'll get back to you as soon as possible!
      </p>
    </div>
  );
  return <div>{contact}</div>;
}

export default Contact;
