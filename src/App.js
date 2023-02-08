import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const  [btn, setBtn] = useState('');
  let bgRed = () => {
    setBtn('red')
  }
  let bgGreen = () => {
    setBtn('green')
  }
  let bgBlue = () => {
    setBtn('blue')
  }


  return (
    <div className='container'>
      <h1>Color App</h1>
      <div className='color-box' id={btn}>box</div>
      <div className='btn-group'>
        <button onClick={bgRed}>red</button>
        <button onClick={bgGreen}>green</button>
        <button onClick={bgBlue}>blue</button>
        {/* <button onClick={function(){파라미터값}} */}
      </div>
    </div>
  )
}

export default App;
