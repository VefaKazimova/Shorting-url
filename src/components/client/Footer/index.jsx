
import React from "react";
import '../Footer/index.css'
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <>
      <div className="footer-getStarted">
        <div className="wrapper">
          <p>Boots your links today</p>
          <button>Get Started</button>
        </div>
      </div>
      <div className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="shortly">
              <h1>Shortly</h1>
            </div>

            <div className="footer-links">
              <div className="title">
                <h4>Features</h4>
                <p>LinkShortening</p>
                <p>Brandend Links</p>
                <p>Analytics</p>
              </div>
              <div className="title">
                <h4>Resources</h4>
                <p>Blog</p>
                <p>Developers</p>
                <p>Support</p>
              </div>
              <div className="title">
                <h4>Company</h4>
                <p>About</p>
                <p>Our Team</p>
                <p>Carees</p>
                <p>Contact</p>
              </div>
            </div>

            <div className="social-icons">
              <FacebookIcon className="icon"/>
              <TwitterIcon className="icon"/>
              <PinterestIcon className="icon"/>
              <InstagramIcon className="icon"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
