import React from "react";
import { Link } from "react-router-dom";
import ItemExtensionCall from "../ExtensionCall/ItemExtensionCall/ItemExtensionCall";

function CallAgain(props) {
  return (
    <div
      className="p-2 flex justify-center absolute bottom-6 transform 
        -translate-x-1/2 left-1/2"
      style={{ width: "450px" }}
    >
      <Link to="call" className="w-12 h-12 relative mx-2.5">
        <div className="w-12 h-12 relative">
          <span
            className={`bx bxs-video w-12 h-12 rounded-full text-2xl flex bg-opacity-80 z-10
            items-center justify-center cursor-pointer text-gray-300 `}
            style={{ backgroundColor: "#00a400" }}
          ></span>
        </div>
      </Link>
      <ItemExtensionCall
        icon={"fas fa-times"}
        disabled={true}
        addClass="text-gray-300"
      />
    </div>
  );
}

export default CallAgain;
