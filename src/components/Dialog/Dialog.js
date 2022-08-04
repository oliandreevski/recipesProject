import React from "react";

const Dialog = ({ message, onDialog }) => {
  return (
    <div className="dialog">
      <h3>{message}</h3>
      <div className="buttons">
        <button onClick={() => onDialog(true)}>Yes</button>
        <button onClick={() => onDialog(false)}>No</button>
      </div>
    </div>
  );
};

export default Dialog;
