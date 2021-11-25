import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import StartScreen from './components/screens/StartScreen';
import GameScreen from './components/screens/GameScreen';
import TableScreen from './components/screens/TableScreen';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<StartScreen/>} />
      <Route path="/game" element={<GameScreen/>} />
      <Route path="/table" element={<TableScreen/>} />
    </Routes>
    </>
    
  );
}

export default App;
