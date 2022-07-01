import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {
  const ws_url = 'ws://localhost:8888?token=vvDWxdtxMTyjfKJKIjq6';
  //give an initial state so that the data won't be undefined at start
  let ws = null;
  useEffect(() => {
    ws = new WebSocket(ws_url);
    console.log('connecting');
    ws.onopen = (event) => {
      console.log('OPENed');
    };
    ws.onmessage = function (event) {
      console.log(event.data);
    };
    //clean up function
    return () => ws.close();
  }, []);

  const sayHi = () => {
    ws.send('{"message":"hi"}');
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={sayHi}>say Hi</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
