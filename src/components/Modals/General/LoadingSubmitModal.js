import React from "react";

LoadingSubmitModal.propTypes = {};

function LoadingSubmitModal(props) {
  return (
    <div
      className="w-full h-full bg-opacity-50 bg-white 
    dark:bg-dark-third fixed top-0 left-0 z-40"
    >
      <span
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 
         -translate-y-1/2 text-3xl font-semibold"
      >
        Loading.....
      </span>
    </div>
  );
}

export default LoadingSubmitModal;
