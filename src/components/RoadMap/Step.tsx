import React from "react";
import "./Step.css";

const Step: React.FC = () => {
  return (
    <div className="cube">
      <div className="side top"></div>
      <div className="side left"></div>
      <div className="side front"></div>
    </div>
  );
};

export default Step;
