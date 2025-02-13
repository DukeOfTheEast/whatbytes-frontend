import React from "react";

const ProgressBar = ({ percentage, color, bgColor }) => {
  return (
    <div className={`w-full h-2 ${bgColor} rounded`}>
      <div
        className={`h-2 ${color} rounded ${
          percentage > 0 ? "animate-progress" : ""
        }`}
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
