import AboutSection from "../AboutSection";
import Menu from "../Menu";
import OrderSection from "../OrderSection";
import BookTableSection from "../BookTableSection";
import SpecialitySection from "../SpecialitySection";
import CustomerReviews from "../CustomerReviews";
import LocationSection from "../LocationSection";
import JoinTiffinboxFamily from "../JoinTiffinboxFamily";
import FooterSection from "../FooterSection";
import { IoIosArrowForward } from "react-icons/io";
import "./index.css";

const Home = () => (
  <div className="home-container">
    <div className="home-intro-section">
      <div className="home-intro-content">
        <img src="/app-logo.png" className="app-logo" alt="app logo" />
        <h2 className="home-intro-heading">Authentic South Indian Cuisine</h2>
        <button type="button" className="order-now-btn">
          Order Now
          <IoIosArrowForward size={16} color="#FCB017" />
        </button>
      </div>
      <div className="home-food-container-outer-layer">
        <div className="home-food-container-inner-layer">
          <img
            src="/home-food-pan.png"
            className="food-pan-img"
            alt="food pan"
          />
        </div>
      </div>
    </div>
    <AboutSection />
    <Menu />
    <OrderSection />
    <BookTableSection />
    <SpecialitySection />
    <CustomerReviews />
    <LocationSection />
    <JoinTiffinboxFamily />
    <FooterSection />
  </div>
);

export default Home;
