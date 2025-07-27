import '../styles/contactUs.css';

function ContactUs() {
  return (
    <div className="contactPage">
      <h1>Contact Us</h1>
      <p className="intro">
        Feel free to contact us via following.
      </p>

      <div className="contactInfo">
        <div className="contactItem">
          📧 Email: <a href="mailto:support@jjdairies.com">support@jjdairies.com</a>
        </div>

        <div className="contactItem">
          📞 Mobile: <a href="tel:+919876543210">+91 98765 43210</a>
        </div>

        <div className="contactItem socialLinks">
          <span>Follow us:</span>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">📘 Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">🐦 Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">📸 Instagram</a>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
