import "./index.css";

const ReviewItem = (props) => {
  const { reviewItem } = props;
  const { name, profile, review, rating, time } = reviewItem;
  return (
    <div className="review-card">
      <img src={rating} className="rating" alt="rating" />
      <p className="review">{review}</p>
      <hr className="review-separator" />
      <div className="review-profile-section">
        <img src={profile} className="profile" alt="profile" />
        <h6 className="name">
          {name} <br />
          <span className="time">{time}</span>
        </h6>
      </div>
    </div>
  );
};

export default ReviewItem;
