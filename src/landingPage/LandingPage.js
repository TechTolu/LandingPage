import React from "react";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="container">
      <p className="wait-list">Join our waitlist to learn more...</p>
      <div className="wait-wrap">
        <div className="wait">
          <p>
            Enter your email to join the waitlist, and stay up to speed on all
            updates from our end.
          </p>
        </div>
        <div className="input">
          <label>
            <input className="mail" type="email" name="" placeholder="Email" />
          </label>
          <div className="butt">
            <button className="input-btn">Keep me Posted</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
