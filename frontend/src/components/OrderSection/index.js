import { IoIosArrowForward } from "react-icons/io";
import "./index.css";

const OrderSection = () => (
  <div className="order-section">
    <div className="large-device-view">
      <div className="online-order-header-content">
        <div className="online-order-content">
          <h6 className="online-order-heading">ONLINE ORDER</h6>
          <h2 className="online-order-sub-heading">
            Fresh South Indian Flavors Delivered!
          </h2>
        </div>
        <img src="/food-item-img.png" className="food-item" alt="food item" />
      </div>
      <div className="online-order-footer-content">
        <div className="online-order-content">
          <p className="online-order-description">
            Craving your favorite South Indian dishes? Enjoy the rich, authentic
            flavors of The Tiffin Box from the comfort of your home. Order
            online for a quick and easy delivery straight to your doorstep. Our
            dishes are prepared fresh and delivered fast, ensuring a delicious
            experience every time
          </p>
          <button type="button" className="online-order-btn">
            Order Now
            <IoIosArrowForward size={18} color="#B58F42" />
          </button>
        </div>
        <div className="bike-sketch-container">
          <img
            src="/bike-sketch-img.png"
            className="bike-sketch"
            alt="bike sketch"
          />
        </div>
      </div>
    </div>
    <div className="mobile-view">
      <h6 className="online-order-heading">ONLINE ORDER FASTER</h6>
      <h2 className="online-order-sub-heading">
        Fresh South Indian Flavors Delivered!
      </h2>
      <img src="/food-item-img.png" className="food-item" alt="food item" />
      <p className="online-order-description">
        Craving your favorite South Indian dishes? Enjoy the rich, authentic
        flavors of The Tiffin Box from the comfort of your home. Order online
        for a quick and easy delivery straight to your doorstep. Our dishes are
        prepared fresh and delivered fast, ensuring a delicious experience every
        time
      </p>
      
      <div className="bike-sketch-bg-container"
        style={{
          backgroundImage: "url('/bike-sketch-img.png')",
        }}
      >
        <div className="mobile-view-order-now-btn">
        <button type="button" className="online-order-btn">
          Order Now
          <IoIosArrowForward size={18} />
        </button>
        </div>
      </div>
    </div>
  </div>
);

export default OrderSection;
