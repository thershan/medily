import React from 'react';

const NewsSection = () => (
  <div className="news-section">
    <h2>Read Our Latest News</h2>
    <div className="news-cards">
      {/* Add individual news cards */}
      <div className="news-card">
        <img src="path_to_image" alt="News Title" />
        <h3>News Title</h3>
        <p>Short description of the news</p>
      </div>
      <div className="news-card">
        <img src="path_to_image" alt="News Title" />
        <h3>News Title</h3>
        <p>Short description of the news</p>
      </div>
      {/* Add more news cards as per the design */}
    </div>
  </div>
);

export default NewsSection;
