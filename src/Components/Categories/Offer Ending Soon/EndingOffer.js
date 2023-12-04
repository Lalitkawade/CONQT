import React from 'react';
import Rating from '@mui/material/Rating';

const EndingOffer = ({ items }) => {
  
  if (!Array.isArray(items)) {
    return <p>No courses available</p>; 
  }

  const requiredItems = items.slice(0, 3);

  return (
    <>

  <h2 className='headline'>FLASH SALE{" "}<i className="fa-solid fa-fire" style={{ color: '#fbda04' }}></i></h2>
  <div className="course-list-container-2" style={{ marginLeft: '300px', display: 'flex', gap: '20px' }}>
    {requiredItems.map((Course) =>
      <div className='card-2' key={Course.id}>
        <div className="image-container-2">
          <img src={Course.image_url} alt='pic' />
          <div className="discount-text-2">Flat 40% off</div>
        </div>
        <div className="text-details-2">
          <h1>{Course.product_name}</h1>
          <p className="description-2">{Course.product_description}</p>
          <div className="course-details-2">
            <Rating size='small' name={`rating-${Course.id}`} defaultValue={Course.avg_rating} precision={0.1} readOnly />
          </div>
        </div>
      </div>
    )}
  </div>
    </>
  );
};

export default EndingOffer;
