// eslint-disable-next-line no-unused-vars
import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Her</h1>
        <p>The woman who makes my world brighter every day!</p>
      </div>
      <div className="about-content">
        <div className="about-section">
          <h2>Beauty</h2>
          <p>
            She has the most mesmerizing smile, radiant eyes, and a presence
            that lights up every room. Her elegance is timeless, and her
            simplicity is what makes her unique.
          </p>
        </div>
        <div className="about-section">
          <h2>Nature</h2>
          <p>
            Her heart is pure gold. Shes kind, caring, and always sees the good
            in people. Her positivity and warmth bring comfort to everyone
            around her.
          </p>
        </div>
        <div className="about-section">
          <h2>Behavior</h2>
          <p>
            Her patience and understanding are unmatched. She knows how to
            balance strength and softness, making her truly inspiring. 
          </p>
        </div>
        <div className="about-section">
          <h2>Relationship</h2>
          <p>
            Being with her feels like home. She supports me in every aspect of
            life, and our bond grows stronger every day. I’m grateful for her
            love, trust, and friendship.
          </p>
        </div>
        <div className="about-section">
          <h2>Career</h2>
          <p>
            She’s a brilliant IT professional, passionate about her work and
            always eager to learn and grow. Her determination and ambition
            inspire me to be the best version of myself.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
