import { useReducer } from "react";

function AngryButton(props){
  const [anger, dispatch] = useReducer((anger, action) => anger > 1 ? 0 : anger + action, 0);

  return (
    <button style={{ backgroundColor: `rgba(255,0,0,${anger})`}} className="AngryButton" onClick={() => dispatch(0.1)}>
      {anger < 1 && <span>Don't click me too much! </span>}
      {anger > 1 && <span>Rawr!</span>}
    </button>
  );
}

export default AngryButton;