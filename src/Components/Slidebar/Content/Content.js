import React from 'react';
import './Content.css';

const Content = () => {
  const handleSoftwareClick = () => {
    console.log('Software button clicked');
  };

  const handleHardwareClick = () => {
       console.log('Hardware button clicked');
  };

  const handleMoreSuggestionsClick = () => {
        console.log('More suggestions clicked');
  };

  return (
    <div className="sidebar">
      <br/>
      <span style={{ paddingLeft: '30px'}}><i class="fa-solid fa-house"></i>{" "}<i class="fa-solid fa-chevron-right"></i>{" "}Offer</span>
      <div className="sidebar-card" style={{ height: '300px', width: '200px' }}>
        <div className="sidebar-item" onClick={handleSoftwareClick}>
          Software{" "}<i class="fa-solid fa-chevron-right"></i>
        </div>
        <div className="sidebar-item" onClick={handleHardwareClick}>
          Hardware{" "}<i class="fa-solid fa-chevron-right"></i>
        </div>
        <div className="sidebar-item-more" onClick={handleMoreSuggestionsClick}>
        <i class="fa-solid fa-square-plus" style={{color: "#05f096"}}></i> More Suggestions
        </div>
      </div>
    </div>
  );
};

export default Content;
