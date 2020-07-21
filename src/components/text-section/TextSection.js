import React from "react";
import "./TextSection.scss";

const TextSection = ({ title, subtitle }) => {
  return (
    <div className="text-container">
      <h2 className="title">{title}</h2>
      <h3 className="subtitle">{subtitle}</h3>
    </div>
  );
};

export default TextSection;
