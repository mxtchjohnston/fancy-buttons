import { useState } from 'react';
import './App.css';
import AngryButton from './components/AngryButton';
import CounterButton from './components/CounterButton';
import LightSwitchButton from './components/LightSwitchButton';
import TextRepeaterButton from './components/TextRepeaterButton';

function App() {
  const [light, setLight] = useState(false);
  const handleClick = () => setLight(!light);
  const dark = light ? '' : 'dark';
  return (
    <div className={`App ${dark}`}>
      <h1>Fancy Buttons!</h1>
      <section>
        <AngryButton />
        <CounterButton />
        <LightSwitchButton light={light} handleClick={handleClick}/>
        <TextRepeaterButton />
      </section>
    </div>
  );
}

export default App;
