function SocailMenu() {
  let socialMenu = (
    <div>
      <ul className="socialIconList">
        <li className="socialIcons">
          <a href="https://www.linkedin.com/in/robert-t-lopez/" rel="noreferrer" target="_blank">
            <img
              src={require("../../Images/linkedin-2-icon-256.png")}
              width="50"
              height="50"
              alt=""
            />
          </a>
        </li>
        <li className="socialIcons">
          <a href="https://github.com/rlopez4042" rel="noreferrer" target="_blank">
            <img
              src={require("../../Images/github-icon-256.png")}
              width="50"
              height="50"
              alt=""
            />
          </a>
        </li>{" "}
        {/* <li className="socialIcons">
          <a href="https://www.instagram.com/roebawtoe/">
            <img
              src={require("../../Images/instagram-2-icon-256.png")}
              width="50"
              height="50"
              alt=""
            />
          </a>
        </li> */}
      </ul>
    </div>
  );
  return <div>{socialMenu}</div>;
}

export default SocailMenu;
