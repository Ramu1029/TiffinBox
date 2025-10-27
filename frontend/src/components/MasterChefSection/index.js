import "./index.css";

const MasterChefSection = () => (
  <div className="chef-section">
    <img src="/spoon.png" className="spoon" alt="spoon" />
    <h6 className="section-heading">chef</h6>
    <h2 className="section-sub-heading">Our brand chef</h2>
    <div className="chef-details">
      <img src="/chef-pic.png" className="chef-pic" alt="chef profile" />
      <div className="chef-content">
        <h6 className="chef-fullname">
          Chef Jomon <br />
          <span className="chef-role">senior chef at tiffin box</span>
        </h6>

        <p className="chef-description">
          Craving your favorite South Indian dishes? Enjoy the rich, authentic
          flavors of The Tiffin Box from the comfort of your home. Order online
          for a quick and easy delivery straight to your doorstep. Our dishes
          are prepared fresh and delivered fast, ensuring Craving your favorite
          South Indian dishes? Enjoy the rich, authentic flavors of The Tiffin
          Box from the comfort of your home. Order online for a quick and easy
          delivery straight to your doorstep.{" "}
        </p>
      </div>
    </div>
  </div>
);

export default MasterChefSection;
