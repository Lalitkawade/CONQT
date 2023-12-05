import React from 'react';
import "./FlashSale.css"
import Rating from '@mui/material/Rating';

const FlashSale = ({ items }) => {
  
  if (!Array.isArray(items)) {
    return <p>No courses available</p>; 
  }

  const requiredItems = items.slice(0, 3);

  return (
    <>
      <h2 className='headline'>FLASH SALE{" "}<i class="fa-solid fa-fire" style={{color: '#fbda04'}}></i></h2>
      <div className="course-list-container">
        {requiredItems.map((Course) =>
          <div className='card' key={Course.id}> 
            <div><img src={Course.image_url} alt='pic'/></div>
            <h1>{Course.product_name}</h1>
            <div className="course-details">
              <Rating size='small' name={`rating-${Course.id}`} defaultValue={Course.avg_rating} precision={0.1} readOnly />
              {Course.avg_rating}
            </div>
            <div className='card-button'>
            <button>Features</button>
            <button>Plan</button>
            <button>Write Review</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FlashSale;
