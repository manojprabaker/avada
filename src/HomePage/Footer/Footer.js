import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <section className="footer-sec">
        <div className="container">
          <div className="footer-row">
            <div className="footer-col">
              <img src="https://avada.com/wp-content/uploads/2021/11/avada-logo-light-svg.svg" />
            </div>

            <div className="footer-col">
              <p>Help Center</p>
              <p>Avada Studio</p>
              <p>Prebuilt Websites</p>
              <p>Reviews</p>
              <p>Submit A Ticket</p>
            </div>
            <div className="footer-col">
              <p>About Us</p>
              <p>Support Policy</p>
              <p>Terms And Conditions</p>
              <p>Privacy Policy</p>
            </div>

            <div className="footer-col footer-col-last">
              <p>
                Sign up to our newsletter and get all of the latest news and
                updates
              </p>
              <span className="email-data">
                <input className="email" type="text" placeholder="Your Email*"/>
                <a className="submit-btn">Subscribe</a>
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
