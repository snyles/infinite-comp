import './App.css';
import LittleBox from '../LittleBox/LittleBox'
import React, { useState } from 'react';

function App () {
  const [display, setDisplay] = useState('flex');
  const [key, setKey] = useState('1234');

  const changeKey = () => {
    const newKey = Math.floor(Math.random()*9999)
    setKey(newKey);
  }

  const switchDisplay = () => {
    const newDisplay = display === 'flex' ? 'grid' : 'flex';
    setDisplay(newDisplay);
  };

  return (
    <div className="App">
      <div className="displayButton">
        <button onClick={switchDisplay}>
          Display{ display === 'grid' ? ' Flex' : ' Grid'}
        </button>
        <button onClick={changeKey}>
          Reset
        </button>
      </div>
      <LittleBox key={key} bgColor="grey" display={display} />
    </div>
  );
}

export default App;
