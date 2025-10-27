import { IoIosArrowForward } from "react-icons/io";
import "./index.css";

const FooterSection = () => (
  <div className="footer-section">
    <div className="subscribe-section">
      <img
        src="app-logo.png"
        className="footer-section-app-logo"
        alt="app logo"
      />
      <h2 className="footer-heading">Subscribe to our newsletter</h2>
      <div className="email-subscribe">
        <input type="email" className="email" placeholder="Email" />
        <button type="button" className="subscribe">
          Subscribe
          <IoIosArrowForward size={18} color="#B58F42" />
        </button>
      </div>
    </div>
    <div className="contact-us-section">
      <h4 className="contact-us-heading">Contact Us</h4>
      <p className="contact-us-section-paragraph">0151 245 1500</p>
      <p className="contact-us-section-paragraph">Info@tiffinbox.co.uk</p>
      <p className="contact-us-section-paragraph">
        Allerton Rd, Liverpool L25 7RE
      </p>
    </div>
    <p className="footer-paragraph">
      MENU | ORDER ONLINE | BOOK TABLE | ABOUT US | CONTACT US
    </p>
  </div>
);

export default FooterSection;
