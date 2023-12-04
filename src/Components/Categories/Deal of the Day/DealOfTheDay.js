import React from 'react';
import Rating from '@mui/material/Rating';
import './DealOfTheDay.css';
const DealOfTheDay = ({ items }) => {
  
  if (!Array.isArray(items)) {
    return <p>No courses available</p>; 
  }

  const requiredItems = items.slice(0, 5);

  return (
    <>
      <h2 className='headline-1'>DEAL OF THE DAY</h2>
      <div className="course-list-container-1">
        {requiredItems.map((Course) =>
          <div className='card-1' key={Course.id}> 
            <div><img src={Course.image_url} alt='pic'/></div>
            <h3>{Course.product_name}</h3>
            <div className="course-details-1">
              <Rating size="small" name={`rating-${Course.id}`} defaultValue={Course.avg_rating} precision={0.1} readOnly />
              <span>{Course.avg_rating}</span>
            </div>
            <button className='button'>Get Pricing</button>
          </div>
        )}
      </div>
    </>
  );
};

export default DealOfTheDay;
