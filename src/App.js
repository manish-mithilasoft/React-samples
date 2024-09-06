import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyButton/>
        <MyButton/>
      </header>
    </div>
  );
}
function MyButton() {
  const[count,setCount]=useState(0);
  function handleClick(){
    setCount(count+1);
    alert(`I am clicked ${count} times`);
  }
  return (
    <button onClick={handleClick}>I'm a button</button>
  );
}
export default App;
