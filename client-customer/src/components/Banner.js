// Banner.js
import React from 'react';
import './Banner.css'; // Import file CSS

const Banner = () => {
  return (
    <div className="banner-container">
      <img src="https://images.augustman.com/wp-content/uploads/sites/6/2022/12/01174228/hero-1.jpg" alt="Banner" className="banner-image" />
      <div className="banner-text">
        <h3>Nước Hoa</h3>
        <h2>Sale off 40%</h2>
        <a href="danhmucsanpham.html" className="main_btn mb-20 mt-5">Mua Ngay</a>
        
      </div>
    </div>
  );
};

export default Banner;