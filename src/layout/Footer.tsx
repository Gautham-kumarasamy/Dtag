import React from "react";
import "./Footer.css";

interface FooterProps {
  className?: string;
}

function Footer({ className = "" }: FooterProps) {
  return (
    <footer className={`footer ${className}`}>
      <div className="footer-content">
        <p className="footer-copyright">
          © 202[X]. For information, contact Deloitte Global. See{" "}
          <a href="#" className="footer-link">Privacy Statement</a>
          {" , "}
          <a href="#" className="footer-link">Cookies Policy</a>
          {" and "}
          <a href="#" className="footer-link">Notices</a>
          {" for more information."}
        </p>
        
        <p className="footer-disclaimer">
         Deloitte refers to one or more of Deloitte Touche Tohmatsu Limited (“DTTL”), its global network of member firms, and their related entities (collectively, the “Deloitte organization”). DTTL (also referred to as “Deloitte Global”) and each of its member firms and related 
         entities are legally separate and independent entities, which cannot obligate or bind each other in respect of third parties. DTTL and each DTTL member firm and related entity is liable only for its own acts and omissions, and not those of each other. DTTL does not
         provide services to clients. Please see www.deloitte.com/about to learn more.
        </p>
      </div>
    </footer>
  );
}

export default Footer;