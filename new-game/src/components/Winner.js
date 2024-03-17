import React from 'react';

const Winner = ({ winner }) => {
  return (
    <div>
      <h1 style={"color:Red"} >Game Over</h1>
      <p>Winner: {winner}</p>
    </div>
  );
};
export default Winner;