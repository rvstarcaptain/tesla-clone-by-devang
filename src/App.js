import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <h1>Tesla clone </h1>
      <Header />
      <Home />
    </div>
  );
}

export default App;
