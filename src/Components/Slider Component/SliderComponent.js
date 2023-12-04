import React, { useState } from 'react';
import './SliderComponent.css'; // Import your CSS file for styling

const SliderComponent = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1 >= items.length ? 0 : prevIndex + 1);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => prevIndex === 0 ? items.length - 1 : prevIndex - 1);
  };

  return (
    <div className="slider-container">
      <button className='button' onClick={handlePrev}><i class="fa-regular fa-circle-left"></i></button>
      <div className="slides-container">
        {items?.slice(currentIndex, currentIndex + 3).map((slide) => (
          <div
            key={slide.id}
            className="slide" >
           <img src={slide.image_url} alt='pic' />
          </div>
        ))}
      </div>
      <button className='button' onClick={handleNext}><i class="fa-regular fa-circle-right"></i></button>
    </div>
  );
};

export default SliderComponent;
