import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import StartScreen from './components/screens/StartScreen';
import GameScreen from './components/screens/GameScreen';
import TableScreen from './components/screens/TableScreen';

function App() {
  return (
    <>
    <Switch>
      <Route exact path="/" component={StartScreen} />
      <Route exact path="/game" component={GameScreen} />
      <Route exact path="/table" component={TableScreen} />
    </Switch>
    </>
    
  );
}

export default App;
