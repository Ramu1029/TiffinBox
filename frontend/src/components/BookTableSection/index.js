import { IoIosArrowForward } from "react-icons/io";
import "./index.css";

const BookTableSection = () => (
  <div className="book-table-section">
    <img
      src="/book-table-img.png"
      className="book-table-img"
      alt="book table img"
    />
    <div className="book-table-content">
      <h6 className="book-table-heading">book TABLE</h6>
      <h2 className="book-table-sub-heading">
        Planning a meal at The Tiffin Box?
      </h2>
      <p className="book-table-description">
        Craving your favorite South Indian dishes? Enjoy the rich, authentic
        flavors of The Tiffin Box from the comfort of your home. Order online
        for a quick and easy delivery straight to your doorstep. Our dishes are
        prepared fresh and delivered fast, ensuring a delicious{" "}
      </p>
      <button type="button" className="book-table-btn">
        Book Table
        <IoIosArrowForward size={18} color="#B58F42" />
      </button>
    </div>
  </div>
);

export default BookTableSection;
