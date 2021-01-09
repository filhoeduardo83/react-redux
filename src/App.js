import React, { useState } from 'react';
import './App.css';
import Intervalo from './components/Intervalo'
import Sorteio from './components/Sorteio'
import Soma from './components/Soma'
import Media from './components/Media'


function App() {
  
  const [min,setMin] = useState (0)
  const [max,setMax] = useState (99)

  return (
    <div className="App">
        <h1>Exercícios Redux</h1>
        <div className="linha">
          <Intervalo  min={min} max={max} 
          onMinChanged={setMin} onMaxChanged={setMax} />
        </div>
        <div className="linha">
          <Sorteio min={min} max={max}/>
          <Soma min={min} max={max}/>
          <Media min={min} max={max}/>
        </div>
    </div>
  );
}

export default App;
