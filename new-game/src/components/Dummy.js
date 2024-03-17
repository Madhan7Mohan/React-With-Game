import React, { useState } from 'react';

const Dummy = () => {
  const [showBox, setShowBox] = useState(false);

  const toggleBox = () => {
    setShowBox(!showBox);
  };
  const containerStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', 
  };
  const boxStyles = {
    width: showBox ? '200px' : '100px',
    height: showBox ? '200px' : '100px',
    backgroundColor: showBox ? 'yellow' : 'black',
    transition: 'width 0.24s, height 0.3s, background-color 0.4s',
  };

  return (
    <div style={containerStyles}>
      <button onClick={toggleBox}>Nokku Be</button>
      <div style={boxStyles}></div>
      
    </div>
  );
};

export default Dummy;
