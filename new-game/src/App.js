import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Board from './components/Board';
import Winner from './components/Winner';
import StartPage from './components/StartPage';
import './styles/Board.css';
import './styles/StartPage.css';
import Dummy from './components/Dummy';

const App = () => {
  const [isGameStarted, setGameStarted] = useState(false);
  const [winner, setWinner] = useState(null);


  const [player1, setPlayer1] = useState({ name: '', color: '' });
  const [player2, setPlayer2] = useState({ name: '', color: '' });

  const handleStartGame = (name1, color1, name2, color2) => {
    setPlayer1({ name: name1, color: color1 });
    setPlayer2({ name: name2, color: color2 });
    setGameStarted(true);
  };

  const handleGameEnd = (result) => {
    setWinner(result);
    
  };

  return (
    // <Router>
    //   <div className="App">
    //     <header className="App-header">
    //       <Routes>
    //         <Route
    //           path="/"
    //           element={!isGameStarted ? <StartPage onStartGame={handleStartGame} /> :
    //            <Board player1={player1} player2={player2} onGameEnd={handleGameEnd} />}
    //         />
    //         <Route path="/winner" element={<Winner winner={winner} />} />
    //       </Routes>
    //     </header>
    //   </div>
    // </Router>
    <Dummy />
  );
};

export default App;