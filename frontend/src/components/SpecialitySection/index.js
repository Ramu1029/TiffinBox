import MasterChefSection from "../MasterChefSection";
import "./index.css";
const SpecialFeature = (props) => {
    const { heading, paragraph,rightFeature ,middle}=props
    const marginRight= middle ? 'margin-right':''
    const marginLeft=middle && rightFeature ? 'margin-left':''
  return (
    <div className={`feature-item-left ${rightFeature} ${marginLeft} ${marginRight}` }>
      <h4 className="feature-heading">{heading}</h4>
      <p className="feature-paragraph">{paragraph}</p>
    </div>
  );
};

const SpecialitySection = () => (
  <div className="speciality-section">
    <h6 className="section-heading">why tiffin box</h6>
    <h2 className="section-sub-heading">Our Specialties </h2>
    <div className="specaility-details-layout">
      <div className="features-list">
        <SpecialFeature
          heading={"Authentic South Indian Cuisine"}
          paragraph={
            "Our dishes are prepared using traditional recipes to bring you the true flavors of South India."
          }
        />
        <SpecialFeature
          middle={true}
          heading={"Expert Chefs"}
          paragraph={
            "Our chefs have years of experience crafting exquisite South Indian dishes, ensuring every bite is a delight."
          }
        />
        <SpecialFeature
          heading={"Fresh, Quality Ingredients"}
          paragraph={
            "We use only the finest, fresh ingredients to ensure the highest quality and authentic taste in every meal."
          }
        />
      </div>
      <div className="special-food-container">
      <img
        src="/special-food-item.png"
        className="special-food-item"
        alt="specail dish img"
      /></div>
      <div className="features-list">
        <SpecialFeature
          rightFeature="feature-item-right"
          heading={"Comfortable Dining Experience"}
          paragraph={
            "Our restaurant offers a warm and welcoming ambiance for a relaxed and enjoyable dining experience."
          }
        />
        <SpecialFeature
          middle={true}
          rightFeature="feature-item-right"
          heading={"Health-Conscious Options"}
          paragraph={
            "From vegetarian to gluten-free dishes, we provide healthy options without compromising on flavor."
          }
        />
        <SpecialFeature
          rightFeature="feature-item-right"
          heading={"Seamless Online Ordering & Delivery"}
          paragraph={
            "Enjoy your favorite dishes at home with our easy online ordering and fast delivery service."
          }
        />
      </div>
    </div>
    <MasterChefSection />
  </div>
);

export default SpecialitySection;
