import React from "react";
import Rating from '@mui/material/Rating';
import "./SpecialOffers.css"


const SpecialOffers = ({ items }) => {

    if (!Array.isArray(items)) {
        return <p>No courses available</p>;
    }

    const requiredItems = items.slice(0, 3);

    return (
        <>
            <h2 className='new-offer-headline'>SPECIAL OFFERS FOR YOU</h2>
            <div className="new-offer-list-container" style={{ marginLeft: '300px' }}>
                {requiredItems.map((Course) =>
                    <div className='new-offer-card' key={Course.id}>
                        <div>
                            <img src={Course.image_url} alt='pic' />
                        </div>
                        <div className="new-offer-course-details">
                            <h2>{Course.product_name}</h2>
                            <Rating size="small" name={`rating-${Course.id}`} defaultValue={Course.avg_rating} precision={0.1} readOnly />
                            <button className="button">Get Pricing</button>
                        </div>
                        
                    </div>
                )}
            </div>
        </>
    );
};

export default SpecialOffers;
