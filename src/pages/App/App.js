import './App.css';
import LittleBox from '../LittleBox/LittleBox'
import React, { useState } from 'react';

function App () {
  const [display, setDisplay] = useState('flex');

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
      </div>
      <LittleBox bgColor="grey" display={display} />
    </div>
  );
}

export default App;
