import React from "react";
import "./Header.css";
import global from "../icons/globe_icon.png";
import DeloitteLogo from "../icons/deloitte_logo.png";
import infoIcon from "../icons/Shape.png";
import Dropdown from "../icons/down-arrow.png";

interface HeaderProps {
  showLocationDropdown?: boolean;
  showUserSection?: boolean;
}

function Header({ 
  showLocationDropdown = true, 
  showUserSection = true 
}: HeaderProps) {
  return (
    <div className="header">
      <div className="header-left">
        <div className="header-logo">
           <img src={DeloitteLogo} alt="info icon" />
        </div>
        <div className="header-title">Beacon Digital Tagging</div>
      </div>
      
      <div className="header-right">
        {showLocationDropdown && (
          <div className="location-dropdown">
            <img src={global} alt="info icon" />
            <span className="location-text">United Kingdom</span>
            <img src={Dropdown} alt="info icon" />
          </div>
        )}
        {showUserSection && (
          <>
            <img src={infoIcon} alt="info icon" />
            <div className="user-avatar">D</div>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;