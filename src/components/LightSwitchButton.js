import { useState } from "react";

function LightSwitchButton(props) {
  const [light, setLight] = useState(false);

  const handleClick = () => setLight(!light);

  return (
    <button className="LightSwitchButton" onClick={handleClick}>
      {light && <span><i>💡</i> I'm on!</span>}
      {!light && <span className="off"><i>💡</i> I'm off!</span>}
    </button>
  );
}

export default LightSwitchButton;