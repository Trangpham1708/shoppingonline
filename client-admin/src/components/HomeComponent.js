import React from 'react';
import './styles.css';

const WelcomeFrame = () => {
  return (
    <div className="container">
      <div className="left">
        <div className="header">
          <h2>Admin Home</h2>
         
        </div>
      </div>
      <div className="right">
        {/* You can replace the following line with your image source */}
        <img src="https://superbwishes.com/wp-content/uploads/2022/11/Merry-Christmas-GIF-7.gif" alt="Avatar" />
     
      </div>
    </div>
  );
};

export default WelcomeFrame;
