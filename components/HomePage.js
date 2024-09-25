import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div>
      {/* <h2>Home Page</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <img src="https://via.placeholder.com/150" alt="Placeholder 1" />
        <img src="https://via.placeholder.com/150" alt="Placeholder 2" />
        <img src="https://via.placeholder.com/150" alt="Placeholder 3" />
        <img src="https://via.placeholder.com/150" alt="Placeholder 4" />
      </div> */}
      <div className='Main'>
        <h2>WEB APP AUTHENTICATIN FLOW</h2>
        <div style={{ display: 'block', margin: '10px auto' }}>
          <img src="pic1.png" alt="Placeholder 1" style={{ position: 'relative', width: '70%', }} />
          <img src="pic2.png" alt="Placeholder 2" />
          <img src="pic3.png" alt="Placeholder 3" />
          <img src="pic4.png" alt="Placeholder 4" />
          <img src="pic5.png" alt="Placeholder 5" />
          <img src="pic6.png" alt="Placeholder 6" style={{ position: 'relative', width: '40%', }} />
        </div>
      </div>


    
    </div>
  );
};

export default HomePage;
