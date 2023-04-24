import React from 'react';
import PomodoroClock from './PomodoroClock';
import TodoList from './TodoList';
import Clock from './Clock';
import RainSoundEffectButton from './RainSoundEffectButton';
import Spotify from './spotify';

function App() {
  return (
    <div>
      <PomodoroClock />
      <TodoList />
      <Clock />
      <RainSoundEffectButton />
    </div>
  );
}

export default App;
