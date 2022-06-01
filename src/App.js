import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { useState } from 'react';
import Home from './components/Home';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {isLoggedIn ? <Home /> : <Login updateLoggedIn={setLoggedIn} />}
      </header>
    </div>
  );
}

export default App;
