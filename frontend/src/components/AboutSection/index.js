import { IoIosArrowForward } from "react-icons/io";
import "./index.css";

const AboutSection = () => (
  <div className="about-section-container">
    <div className="layout">
    <img src="about-us-img.png" alt="about us" className="about-us-image" />

    <div className="about-us-content">
      <h5 className="about-us-sub-heading">ABOUT US</h5>
      <p className="about-us-description">
        Experience Authentic South Indian Flavors at The Tiffin Box
      </p>
      <button type="button" className="know-more-btn">
        Know More
        <IoIosArrowForward size={16} />
      </button>
    </div>
    </div>
  </div>
);

export default AboutSection;
