import '../styles/welcomeNav.css';

function WelcomeNav() {
  return (
    <div className="welcomeNav">
      <nav className="items">
        <ul>
          <li className="logo">JJD</li>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#reviews">Reviews</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default WelcomeNav;
