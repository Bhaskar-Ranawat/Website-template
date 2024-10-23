import React from "react";
import Header from "./sub-components/Header";

const Hero = () => {
  return (
    <div className="hero-container">
      Hero
      <Header />
      <div className="hero">
        <div className="hero-content">
          <h1>Something something</h1>
          <button className="join-btn">Join Today</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
