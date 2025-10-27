import ReviewItem from "../ReviewItem";
import "./index.css";
const reviews = [
  {
    id: 1,
    name: "Anna Mathew",
    profile: "/profile1.png",
    review:
      "Bavette delivers an unforgettable steak experience! The food, service, and ambiance are second to none. We ",
    rating: "/rating.png",
    time: "one day ago",
  },
  {
    id: 2,
    name: "Gerrin Tom",
    profile: "/profile2.png",
    review:
      "Bavette delivers an unforgettable steak experience! The food, service, and ambiance are second to none. We will definitely be coming",
    rating: "/rating.png",
    time: "one day ago",
  },
  {
    id: 3,
    name: "Mery Elza",
    profile: "/profile3.png",
    review:
      "Bavette delivers an unforgettable steak experience! The food, service, and ambiance are second to none. We will definitely be coming back We booked private dining for our ",
    rating: "/rating.png",
    time: "one day ago",
  },
  {
    id: 4,
    name: "Anna Mathew",
    profile: "/profile3.png",
    review:
      "Bavette delivers an unforgettable steak experience! The food, service, and ambiance are second to none. We will definitely be coming back We booked private dining for our ",
    rating: "/rating.png",
    time: "one day ago",
  },
];
const CustomerReviews = () => (
  <div className="customer-reviews-section">
    
    <h6 className="customer-reviews-section-heading">testimonial</h6>
    <h2 className="customer-reviews-section-sub-heading">What Our Customers Says</h2>
    <div className="reviews-list">
      {reviews.map((eachReview) => (
        <ReviewItem key={eachReview.id} reviewItem={eachReview} />
      ))}
    </div>
  </div>
);

export default CustomerReviews;
