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
      <div className="course-list-container" style={{ marginLeft: '300px' }}>
        {requiredItems.map((Course) =>
          <div className='card' key={Course.id}> 
            <div><img src={Course.image_url} alt='pic'/></div>
            <h1>{Course.product_name}</h1>
            <div className="course-details">
              <Rating name={`rating-${Course.id}`} defaultValue={Course.avg_rating} precision={0.1} readOnly />
              <span>{Course.avg_rating}</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FlashSale;
