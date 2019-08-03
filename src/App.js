import React from 'react';
import logo from './logo_fgts.png';
import Saque from './components/saque-component';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Saiba o valor disponível para saque
        </p>
        
        <Saque />
      </header>
    </div>
  );
}

export default App;
