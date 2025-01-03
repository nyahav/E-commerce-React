import React from 'react';
import { useNavigate } from 'react-router-dom';  
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const navigate = useNavigate();  // Get the navigate function

  const handleClick = () => {
    navigate(linkUrl);  // Use navigate to redirect to the linkUrl
  };

  return (
    <div
      className={`${size} menu-item`}
      onClick={handleClick}  // Use the handleClick function on click
    >
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
