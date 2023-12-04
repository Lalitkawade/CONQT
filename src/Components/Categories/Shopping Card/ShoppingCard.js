import React from 'react';
import './ShoppingCard.css'; // Import your CSS file

const ShoppingCard = () => {
  return (
    <div className="image-text-container">
      <div className="image-container">
        <img src="Druva.png" alt="pic" />
      </div>
      <div className="text-container">
        <h2>Get Your Favorite Discount 30%</h2>
        <button>Shop Now</button>
      </div>
      <div className='vertical-text'>FLAT 30% OFF</div>
    </div>
  );
};

export default ShoppingCard;
