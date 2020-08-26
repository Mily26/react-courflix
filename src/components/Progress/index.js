import React from "react";
import "./index.css";

function Progress(props) {
  const width = (props.progress / 100) * 200;
  const style = {
    width: width + "px",
  };
  return (
    <div className="progress">
      <div className="inner-progress" style={style}></div>
    </div>
  );
}
export default Progress;