import React, { useState } from 'react';
import './GamePages.css'; // Import the CSS file

const GamePage = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6]);
  const [diceNumber, setDiceNumber] = useState(1);
  const [showMessage, setShowMessage] = useState(false);
  const [showRules, setShowRules] = useState(false);

  // Array of dice images (now accessed directly from the public folder)
  const diceImages = [
    '/imagesdices/dice_1.png',
    '/imagesdices/dice_2.png',
    '/imagesdices/dice_3.png',
    '/imagesdices/dice_4.png',
    '/imagesdices/dice_5.png',
    '/imagesdices/dice_6.png',
  ];

  const rollDice = () => {
    if (selectedNumber === null) {
      setShowMessage(true); // Show message if no number is selected
      return; // Exit the function if no number is selected
    }

    const randomNumber = Math.floor(Math.random() * 6) + 1; // Generates a number between 1 and 6
    setDiceNumber(randomNumber);
    if (selectedNumber === randomNumber) {
      setScore(score + randomNumber);
    } else {
      setScore(score - 2);
    }
    setShowMessage(false); // Hide the message after rolling
  };

  function resetScore() {
    setScore(0);
    setSelectedNumber(null);
  }

  return (
    <div className="game-container">
      {/* Top section */}
      <div className="top-section">
        <div className="score-section">
          <div className="my-score">{score}</div>
          <div className="my-score-text">Total Score</div>
        </div>
        <div className="right-section">
          <div className="number-selection">
            {numbers.map((num, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelectedNumber(num);
                  setShowMessage(false); // Hide message when a number is selected
                }}
              >
                {num}
              </button>
            ))}
          </div>
          <div className="select-number-text">Select Number</div>
          {showMessage && <div className="message">Please select a number to proceed</div>}
        </div>
      </div>

      {/* Body section */}
      <div className="body-section">
        <img
          src={diceImages[diceNumber - 1]}
          alt={`Dice ${diceNumber}`}
          className="dice-image"
          onClick={rollDice}
        />
        <div className="roll-text">Click on Dice to roll</div>
        <button className="reset-button" onClick={resetScore}>Reset Score</button>
        <div></div>
        <button className="show-rules-button" onClick={() => setShowRules(!showRules)}>Show Rules</button>
        {showRules && (
          <div className="rules-section">
            <h1>How to play dice game</h1>
            <p>Select any number</p>
            <p>Click on dice image</p>
            <p>If the selected number matches the dice number, you get the same points as the dice number.</p>
            <p>If the guess is incorrect, 2 points will be deducted.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GamePage;
