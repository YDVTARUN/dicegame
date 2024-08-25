import logo from './logo.svg';
import './App.css';
import dices from './imagesdices/dices.png'
import StartPage from './pages/StartPage'
import { useState } from 'react';
import GamePage from './pages/GamePage';
function App() {
  const [start,setStart] = useState(false);
  return (
    <div >
    {!start && <StartPage setStart={setStart}/>}
    {start && <GamePage/>}
      
      
    </div>
  );
}

export default App;
