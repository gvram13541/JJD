import '../styles/aboutUs.css'

const features = [
  {
    title: "Fresh Dairy Products",
    description: "We deliver the freshest milk, cheese, and yogurt directly from farms to your doorstep.",
    icon: "🥛",
  },
  {
    title: "Sell Your Milk Products",
    description: "Are you a farmer or dairy producer? List your products and reach more customers easily.",
    icon: "🧀",
  },
  {
    title: "Fast & Safe Delivery",
    description: "Cold-chain logistics ensures your dairy stays fresh and safe during transport.",
    icon: "🚚",
  },
  {
    title: "Trusted by Farmers",
    description: "We work closely with local farmers to support ethical and profitable dairy farming.",
    icon: "👨‍🌾",
  },
  {
    title: "Easy Online Payments",
    description: "Secure payment gateway with multiple options including UPI, Cards, and Wallets.",
    icon: "💳",
  },
  {
    title: "Sustainability Focused",
    description: "Our operations prioritize eco-friendly packaging and local sourcing.",
    icon: "🌱",
  },
];

function AboutUs() {
  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <p className="intro">
        We are a modern dairy e-commerce platform connecting local farmers and customers.
      </p>
      <div className="card-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="icon">{feature.icon}</div>
            <h2>{feature.title}</h2>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;
