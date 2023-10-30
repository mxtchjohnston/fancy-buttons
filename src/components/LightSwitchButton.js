function LightSwitchButton(props) {
  return (
    <button className="LightSwitchButton" onClick={props.handleClick}>
      {props.light && <span><i>💡</i> I'm on!</span>}
      {!props.light && <span className="off"><i>💡</i> I'm off!</span>}
    </button>
  );
}

export default LightSwitchButton;