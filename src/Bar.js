import React from "react";
import "./Bar.css";

export default function Bar(props) {
  const style = {
    width: `${props.width * 16.66}%`,
    backgroundColor: `${props.backgroundColor}`,
  };

  return (
    <div className="bar-wrapper">
      <div className="bar-div">
        <div className="bar" style={style}></div>
      </div>
    </div>
  );
}
