import React from "react";

AddModalControl.propTypes = {};

function AddModalControl(props) {
  return (
    <div className="flex py-1">
      <div className="cursor-pointer fill-65676B ">
        <div
          className="hover:bg-gray-200 rounded-full 
          dark:hover:bg-dark-third p-1 "
        >
          <svg
            fill="#EE046B"
            className="a8c37x1j ms05siws hr662l2t b7h9ocf4 crt8y2ji tftn3vyl"
            height="20px"
            width="20px"
            viewBox="0 0 24 24"
          >
            <g>
              <polygon fill="none" points="-6,30 30,30 30,-6 -6,-6 "></polygon>
              <path d="m18,11l-5,0l0,-5c0,-0.552 -0.448,-1 -1,-1c-0.5525,0 -1,0.448 -1,1l0,5l-5,0c-0.5525,0 -1,0.448 -1,1c0,0.552 0.4475,1 1,1l5,0l0,5c0,0.552 0.4475,1 1,1c0.552,0 1,-0.448 1,-1l0,-5l5,0c0.552,0 1,-0.448 1,-1c0,-0.552 -0.448,-1 -1,-1m-6,13c-6.6275,0 -12,-5.3725 -12,-12c0,-6.6275 5.3725,-12 12,-12c6.627,0 12,5.3725 12,12c0,6.6275 -5.373,12 -12,12"></path>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default AddModalControl;
