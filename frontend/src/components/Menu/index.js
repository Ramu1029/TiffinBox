import MenuItem from "../MenuItem";
import { IoIosArrowForward } from "react-icons/io";
import "./index.css";
const menuList = [
  {
    id: 1,
    imageUrl: "/dish-img.png",
    name: "Chicken Chettinad",
    cost: "9.9",
  },
  {
    id: 2,
    imageUrl: "/dish-img.png",
    name: "Chicken Chettinad",
    cost: "9.9",
  },
  {
    id: 3,
    imageUrl: "/dish-img.png",
    name: "Chicken Chettinad",
    cost: "9.9",
  },
];
const Menu = () => (
  <div className="menu-section">
    <div
      className="bg-logo"
      style={{
        backgroundImage: "url('/background-app-logo.png')",
      }}
    ></div>
    <div className="menu-header-content">
      <h5 className="menu-heading">Featured Menu</h5>
      <h3 className="menu-sub-heading">Discover our most popular dishes</h3>
    </div>
    <ul className="menu-list-container">
      {menuList.map((eachItem) => (
        <MenuItem key={eachItem.id} item={eachItem} />
      ))}
    </ul>
    <button type="button" className="explore-menu-btn">
      Explore Full Menu
      <IoIosArrowForward size={18} color="#B58F42" />
    </button>
  </div>
);

export default Menu;
