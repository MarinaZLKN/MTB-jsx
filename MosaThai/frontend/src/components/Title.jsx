import React from "react";
import '../styles/Accordion.scss';

const Title = ({ text, size = "large", color, lineHeight, style }) => {
  const getSizeStyles = () => {
    switch (size) {
      case "small":
        return "title-small";
      case "large":
        return "title-large";
      default:
        return "title-medium";
    }
  };

  return (
    <h1
      className={`title ${getSizeStyles()}`}
      style={{ color: color, lineHeight: lineHeight, ...style }}
    >
      {text}
    </h1>
  );
};

export default Title;
