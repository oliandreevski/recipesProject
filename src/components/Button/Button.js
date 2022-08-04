import React from "react";
import "./button.sass";

const STYLES = [
  "btn--primary--solid",
  "btn--secondary--solid",
  "btn--danger--solid",
  "btn--warning--solid",
  "btn--success--solid",
  "btn--primary--outline",
  "btn--secondary--outline",
  "btn--danger--outline",
  "btn--warning--outline",
  "btn--success--outline",
];

const SIZES = ["btn--large", "btn--medium", "btn--small"];

export const Button = ({ onClick, children, buttonStyle, buttonSize }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  return (
    <button
      onClick={onClick}
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
    >
      {children}
    </button>
  );
};
