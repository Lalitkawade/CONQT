import React from 'react';
import "./YourComponent.css"

const YourComponent = () => {
  return (
    <div>
      {/* Section 1 */}
      <div className="section-1">
        <div className="image-text-left">
          <img src="1.png" alt="Software" />
          <p>15000+ Softwares</p>
        </div>
        <div className="image-text-left">
          <img src="2.png" alt="Best Price Guaranteed" />
          <p>Best Price Guaranteed</p>
        </div>
        <div className="image-text-left">
          <img src="3.png" alt="Free Expert Consultation" />
          <p>Free Expert Consultation</p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="section-2">
        <div className="sign-up">
          <p>Sign-up for Newsletter</p>
        </div>
        <div className="email-input">
          <input type="email" placeholder="Your email address" />
          <button>Subscribe</button>
          <img style={{height:"50px"}} src='Linkedin-Logo.png' alt='pic' />
        </div>
      </div>
    </div>
  );
};

export default YourComponent;

