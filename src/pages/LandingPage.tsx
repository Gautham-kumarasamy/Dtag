import deloitteLogo from "../icons/deloitte_logo.svg";
import infoIcon from "../icons/Shape.png";
import LandingPageImage from "../icons/landing_page.svg";
import "../LandingPage.css";
import Header from "../layout/Header";
function LandingPage() {
  return (
    <div className="container-main">
      <Header showLocationDropdown={false} showUserSection={false} />
      <div className="landing-main">
        <div className="left-section">
            <div className="title">
              Welcome to the Beacon <br />
              Digital Tagging
            </div>
            <div className="content">
              A secure internal platform for managing user access and engagement
              permissions in compliance with Deloitte policies.
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