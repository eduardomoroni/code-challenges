import React from "react";
import "./Dots.css";

const Dot = ({ isSelected, id }) => (
  <span className={`dot ${isSelected ? "current" : ""}`} key={id} />
);

export const Dots = ({ selected, quantity }) => (
  <div className="dots">
    {Array.from(Array(quantity).keys(), (value, index) => (
      <Dot id={value} isSelected={index + 1 === selected} />
    ))}
  </div>
);
