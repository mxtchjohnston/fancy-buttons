import { useState } from "react";

function CounterButton(props){
  const [clickAmount, setClickAmount] = useState(0);
  const handleCounter = () => setClickAmount(clickAmount + 1);

  return (
    <button className="CounterButton" onClick={handleCounter}>
      You clicked me {clickAmount} amount of times
    </button>
  );
}

export default CounterButton;