import '../styles/reviews.css';

function Reviews() {
  return (
    <div className="reviewsPage">
      <h1>Reviews</h1>
      <p className="intro">
        Listen what some of our customers say about us
      </p>

      <div className="reviewCards">
        <div className="reviewCard">
          <h3>⭐️⭐️⭐️⭐️⭐️</h3>
          <p>"JJ Dairies has the freshest milk I've ever had. Highly recommended!"</p>
          <span>— Priya Sharma</span>
        </div>

        <div className="reviewCard">
          <h3>⭐️⭐️⭐️⭐️</h3>
          <p>"Great service and quality. The curd is thick and creamy."</p>
          <span>— Rohit Verma</span>
        </div>

        <div className="reviewCard">
          <h3>⭐️⭐️⭐️⭐️⭐️</h3>
          <p>"Best ghee and paneer in town. Delivery is always on time!"</p>
          <span>— Anjali Patel</span>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
