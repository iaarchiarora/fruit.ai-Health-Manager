import { SignInButton, useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Landing.css";

const Landing = () => {
  const { isSignedIn } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      navigate("/home");
    }
  }, [isSignedIn, navigate]);

  return (
    <div className="landing-container">
      <div className="intro-section">
        <div className="logo">
          <i className="logo-icon"></i>
        </div>
        <h1 className="main-title">
          Fruit.<span className="highlight">ai</span>
        </h1>
        <p className="description">
          Discover your new AI companion! Fruit.AI simplifies your life by answering fruit-related questions,
          <br></br>providing translation services, and engaging in dynamic chat interactions.
        </p>
        <div className="cta-button">
          {!isSignedIn && (
            <SignInButton mode="modal">
              <button className="signin-button">Join Now</button>
            </SignInButton>
          )}
        </div>
      </div>

      <section className="features-section">
        <h2 className="features-heading">Why Choose Us?</h2>
        <div className="features-container">
          <div className="feature-item">
            <img
              src="smart.jpeg" // Replace with actual URL
              alt="Smart Insights"
              className="feature-image"
            />
            <div className="feature-description">
              <h3>Smart Insights</h3>
              <p>Get personalized insights into your fruit choices and health tips.</p>
            </div>
          </div>
          <div className="feature-item">
            <img
              src="trans.jpeg" // Replace with actual URL
              alt="Instant Translation"
              className="feature-image"
            />
            <div className="feature-description">
              <h3>Instant Translation</h3>
              <p>Break language barriers with our seamless translation feature.</p>
            </div>
          </div>
          <div className="feature-item">
            <img
              src="chat.jpeg" 
              alt="Interactive Chat"
              className="feature-image"
            />
            <div className="feature-description">
              <h3>Interactive Chat</h3>
              <p>Engage in meaningful conversations with our intelligent chatbot.</p>
            </div>
          </div>
          <div className="feature-item">
            <img
              src="not.jpeg" // Replace with actual URL
              alt="Custom Alerts"
              className="feature-image"
            />
            <div className="feature-description">
              <h3>Custom Alerts</h3>
              <p>Receive personalized notifications and updates based on your preferences.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
