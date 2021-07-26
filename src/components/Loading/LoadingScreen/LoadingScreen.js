import React from "react";

function LoadingScreen(props) {
  return (
    <div className="w-full h-full absolute top-0 left-0">
      <div className="w-full h-full relative">
        <span
          className="fas fa-circle-notch fa-spin text-5xl absolute top-1/2 left-1/2 
            transform -translate-x-1/2 -translate-y-1/2 text-gray-300"
        ></span>
      </div>
    </div>
  );
}

export default LoadingScreen;
