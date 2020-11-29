import React, {useState} from 'react';
import Buttons from './Components/Buttons/Buttons';

function App() {
  return (
    <div className="App">
      <div className="TopScreen">
        <div className="Time">
          Time
        </div>
        <div className="indicators">
          Indicators
        </div>
      </div>

      <div className="Buttons">
        <Buttons />
      </div>
    </div>
  );
}

export default App;
