// NotFound.js
import React from 'react';
import './not_found.css'; // Import the stylesheet

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1>404 - Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        {/* <img
          src="https://i.imgur.com/qIufhof.png"
          alt="Lost astronaut"
          className="not-found-image"
        /> */}
      </div>
    </div>
  );
};

export default NotFound;
