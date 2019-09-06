import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

          <div className="header">
              <h1>Diceware Password Generator</h1>
          </div>
          <div className="content">

              <h2>Generated password: <span id="password"></span></h2>
              <h3>Entropy: <span id="entropy"></span></h3>
              <button id="generate-button">Skapa lösenord</button>
          </div>
      </header>
    </div>
  );
}

export default App;
