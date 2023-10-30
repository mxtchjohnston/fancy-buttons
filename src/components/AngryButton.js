import { useState } from "react";

function AngryButton(props){
  const [anger, setAnger] = useState(0);

  const handleClick = amt => () => anger < 1 ? setAnger(amt + anger) : setAnger(0);

  return (
    <button style={{ backgroundColor: `rgba(255,0,0,${anger})`}} className="AngryButton" onClick={handleClick(0.1)}>
      {anger < 1 && <span>Don't click me too much! </span>}
      {anger > 1 && <span>Rawr!</span>}
    </button>
  );
}

export default AngryButton;