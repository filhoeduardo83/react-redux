import React from 'react';
import './App.css';
import Intervalo from './components/Intervalo'
import Sorteio from './components/Sorteio'
import Soma from './components/Soma'
import Media from './components/Media'


function App() {

  return (
    <div className="App">
        <h1>Exercícios Redux</h1>
        <div className="linha">
          <Intervalo />
        </div>
        <div className="linha">
          <Sorteio/>
          <Soma />
          <Media/>
        </div>
    </div>
  );
}

export default App;
