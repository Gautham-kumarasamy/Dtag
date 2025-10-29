import LandingPageImage from "../icons/landing_page.svg";
import "../LandingPage.css";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
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
              A secure internal platform for managing user access and
              engagement permissions in compliance with Deloitte policies.
            </div>
            <div className="login-button">
              <button type="button" className="button">
                LOGIN
              </button>
          </div>
        </div>
        <div className="right-section">
          <div className="image-container">
            <img src={LandingPageImage} alt="Landing Page" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default LandingPage;