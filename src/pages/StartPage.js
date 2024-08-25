import React from 'react';
import './StartPages.css'; // Import the CSS file
// import dices from '../';

const StartPage = ({ setStart }) => {
  return (
    <div className="start-container">
      <div>
      <img src="/imagesdices/dices.png" alt="Dices" />

      </div>
      <div>
        <div className="start-title">
            DICE GAME
        </div>
        <button 
            className="start-button"
            onClick={() => {
            setStart(true);
            }}
        >
            START
        </button>
        </div>
    </div>
  );
}

export default StartPage;
