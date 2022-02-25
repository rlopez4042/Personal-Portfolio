function SocailMenu() {
  let socialMenu = (
    <div className="social">
      <ul>
        <li id="social">
          <a href="https://www.linkedin.com/in/robert-t-lopez/">
          <img
              src={require(
                "/Users/robertlopez/Desktop/MyPortfolio/PersonalPortfolio/personal-portfolio/src/Images/linkedin-2-icon-256.png"
              )}
             
            
              width="50"
              height="50"
              alt=""
            />
          </a>
        </li>
        <li id="social">
          <a href="https://github.com/rlopez4042">
          <img
              src={require(
                "/Users/robertlopez/Desktop/MyPortfolio/PersonalPortfolio/personal-portfolio/src/Images/github-icon-256.png"
              )}
             
            
              width="50"
              height="50"
              alt=""
            />
          </a>
        </li><li id="social">
          <a href="https://www.instagram.com/roebawtoe/">
          <img
              src={require(
                "/Users/robertlopez/Desktop/MyPortfolio/PersonalPortfolio/personal-portfolio/src/Images/instagram-2-icon-256.png"
              )}
             
            
              width="50"
              height="50"
              alt=""
            />
          </a>
        </li>
        
      </ul>
    </div>
  );
  return <div>{socialMenu}</div>;
}

export default SocailMenu;
