import { IoIosArrowForward } from "react-icons/io";
import "./index.css";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <h1 className="navbar-logo">TiffinBox</h1>
      <ul className="navItem-list-container">
        <li className="nav-item">Home</li>
        <li className="nav-item">Menu</li>
        <li className="nav-item">About Us</li>
        <li className="nav-item">Contact</li>
      </ul>
      <button className="view-menu-button">
        <div className="btn-layout">
          View Menu <IoIosArrowForward size={16} />
        </div>
      </button>
    </nav>
  );
};

export default Navbar;
