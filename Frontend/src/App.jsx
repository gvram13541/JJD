import WelcomeNav from './pages/welcomeNav.jsx';
import Welcome from './pages/welcome.jsx';
import AboutUs from './pages/aboutUs.jsx';
import Reviews from './pages/reviews.jsx';
import ContactUs from './pages/contactUs.jsx';

import './App.css';

function App() {
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

export default App;
