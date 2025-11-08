import WelcomeNav from './welcomeNav.jsx'
import Welcome from './welcome.jsx';
import AboutUs from './aboutUs.jsx';
import Reviews from './reviews.jsx';
import ContactUs from './contactUs.jsx';

import '../App.css';

function Home() {
  return (
    <>
      <WelcomeNav />

      <div id="home">
        <Welcome />
      </div>

      <div id="about">
        <AboutUs />
      </div>

      <div id="reviews">
        <Reviews />
      </div>

      <div id="contact">
        <ContactUs />
      </div>
    </>
  );
}

export default Home;