import deloitteLogo from "../icons/deloitte_logo.png";
import infoIcon from "../icons/Shape.png";
import LandingPageImage from "../icons/landing_page_image.png";
import "../LandingPage.css";
function LandingPage() {
  return (
    <div className="container-main">
      <div className="header">
        <div className="left">
          <div className="header-logo">
            <img src={deloitteLogo} alt="deloitte logo" />
          </div>
          <div className="header-title">Beacon Digital Tagging</div>
        </div>
        <div className="header-info">
          <img src={infoIcon} alt="info icon" />
        </div>
      </div>
      <div className="landing-main">
        <div className="left-section">
          <div className="title">
            Welcome to the Beacon <br />
            Digital Tagging
          </div>
          <div className="content">
            A secure internal platform for managing user access and 
            engagement permissions in compliance with Deloitte policies.
          </div>
          <div className="login-button">
            <button type="button" className="button">
              Login
            </button>
          </div>
        </div>
        <div className="right-section">
            <div className="image-container">
              <img src={LandingPageImage} alt="Landing Page" />
            </div>
        </div>
      </div>
    </div>
  );
}
export default LandingPage;