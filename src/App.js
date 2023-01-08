

import React, { useState } from 'react';

function App() {
  const [result, setResult] = useState(0);
  const [input, setInput] = useState('');

  function handleClick(e) {
    setInput(input + e.target.value);
  }
  const handleClear =()=>{
    setInput('0');
    setResult('0')
  }

  function calculate() {
    setResult(eval(input));
    setInput('');
  }

  return (
    <div className='home'>
      <input className='output' type="text" value={input || result} readOnly />
      <br />
      <button  id="clear"
      onClick={handleClear}>C</button>
      <div className='btns'>
        
      <button value="7" onClick={handleClick}>7</button>
      <button value="8" onClick={handleClick}>8</button>
      <button value="9" onClick={handleClick}>9</button>
      <button id='symbols' value="+" onClick={handleClick}>+</button>
      <br />
      <button value="4" onClick={handleClick}>4</button>
      <button value="5" onClick={handleClick}>5</button>
      <button value="6" onClick={handleClick}>6</button>
      <button id='symbols' value="-" onClick={handleClick}>-</button>
      <br />
      <button value="1" onClick={handleClick}>1</button>
      <button value="2" onClick={handleClick}>2</button>
      <button value="3" onClick={handleClick}>3</button>
      <button id='symbols' value="*" onClick={handleClick}>x</button>
      <br />
      <button value="." onClick={handleClick}>.</button>
      <button value="0" onClick={handleClick}>0</button>
      <button id='symbols' onClick={calculate}>=</button>
      <button id='symbols' value="/" onClick={handleClick}>÷</button>
      
      </div>
    </div>
  );
}




 export default App;
