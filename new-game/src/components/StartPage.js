import React, { useState } from 'react';

const StartPage = ({ onStartGame }) => {
  const [player1, setPlayer1] = useState({ name: '', color: 'red' });
  const [player2, setPlayer2] = useState({ name: '', color: 'blue' });

  const handleStartGame = () => {
    if (player1.name.trim() !== '' && player2.name.trim() !== '') {
      onStartGame(player1.name, player1.color, player2.name, player2.color);
    }
  };
 
  return (
    <div className="start-page">
      <h1>Tic-Tac-Toe Game</h1>
      <form className="start-form">
        <label>
          Player 1 Name:
          <input
            type="text"
            value={player1.name}
            onChange={(e) => setPlayer1((prev) =>
               ({ ...prev, name: e.target.value }))}
            placeholder="Enter Player 1 Name"
          />
          {/* <select
            value={player1.color}
            onChange={(e) => setPlayer1((prev) => 
              ({ ...prev, color: e.target.value }))}
          >
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
          </select> */}
        </label>
        <label>
          Player 2 Name:
          <input
            type="text"
            value={player2.name}
            onChange={(e) => setPlayer2((prev) => ({ ...prev, name: e.target.value }))}
            placeholder="Enter Player 2 Name"
          />
          {/* <select
            value={player2.color}
            onChange={(e) => setPlayer2((prev) => ({ ...prev, color: e.target.value }))}
          >
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
          </select> */}
        </label>
        <button type="button" onClick={handleStartGame}>
          Click To Start
        </button>
      </form>
    </div>
  );
};

export default StartPage;
