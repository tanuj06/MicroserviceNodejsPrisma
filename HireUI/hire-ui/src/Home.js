// Home.js
import React from 'react';
import Login from './Login';

function Home() {
  return (
    <div className="container">
      <div className="left-section">
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
          arcu at ex molestie rhoncus. Ut sed mi nec ipsum fermentum eleifend.
          Nam eget justo id lacus pretium tempor. Sed in lacus ut ipsum mollis
          pharetra eu non neque. Donec quis sapien vitae dolor tincidunt
          volutpat.
        </p>
      </div>
      <div className="right-section">
        <Login /> {/* Render the Login component */}
      </div>
    </div>
  );
}

export default Home;
