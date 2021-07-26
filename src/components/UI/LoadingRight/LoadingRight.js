import React from "react";

function LoadingRight(props) {
  return (
    <div className="w-full h-full relative bg-white dark:bg-dark-second">
      <span
        className="fas fa-circle-notch fa-spin absolute left-1/2 transform cursor-pointer
        -translate-x-1/2 -translate-y-1/2 text-5xl text-gray-700 dark:text-gray-300"
        style={{ top: "38%" }}
      ></span>
    </div>
  );
}

export default LoadingRight;
