import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [ count, setCount] = useState(0);
  const addCount = () => {
    setCount(count + 1);
  }
  console.log('App 랜더링')
  /* 
    useEffect(함수) - 모든 상태변화 감지(비추)
    useEffect(함수. []) - 시작(마운트) 할때 1번만 초기화
    useEffect(함수,[변수]) - 변수가 update 될 때 마다 실행
  */  return (

  <>
    <h1>App</h1>
    <p>count: {count}</p>
    <button onClick={ addCount }>count 증가</button>
  </>
  );
}

export default App;
