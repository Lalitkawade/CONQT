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
      <div className="sidebar-card" style={{ height: '500px', width: '200px' }}>
        <div className="sidebar-item" onClick={handleSoftwareClick}>
          Software
        </div>
        <div className="sidebar-item" onClick={handleHardwareClick}>
          Hardware
        </div>
        <div className="sidebar-item-more" onClick={handleMoreSuggestionsClick}>
          More Suggestions
        </div>
      </div>
    </div>
  );
};

export default Content;
