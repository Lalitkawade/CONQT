import React from "react";
import Rating from '@mui/material/Rating';
import "./LatestProduct.css"


const LatestProduct = ({ items }) => {

    if (!Array.isArray(items)) {
        return <p>No courses available</p>;
    }

    const requiredItems = items.slice(0, 5);

    return (
        <>
            <div className="latest-product-list-container">
                <div className="sidebar">
                    <h2 className='latest-product-headline'>Latest Product</h2>
                    {requiredItems.map((Course) =>
                        <div className='latest-product-card' key={Course.id}>
                            <div>
                                <img src={Course.image_url} alt='pic' />
                            </div>
                            <div className="latest-product-course-details">
                                <h2>{Course.product_name}<Rating size="small" name={`rating-${Course.id}`} defaultValue={Course.avg_rating} precision={0.1} readOnly /></h2>
                            </div>

                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default LatestProduct;
