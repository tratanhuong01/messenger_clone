import React from "react";

function InfoCalling(props) {
  //
  const { stateCall } = props;

  return (
    <div
      className="w-80 p-2 fixed top-1/2 left-1/2 transform -translate-x-1/2 
        -translate-y-1/2 flex flex-col justify-center text-white"
    >
      <img
        src="/images/male/1.jpg"
        className="w-28 h-28 p-1 rounded-full object-cover mx-auto"
        alt=""
      />
      <p className="font-bold text-2xl text-center py-1">Trà Hưởng</p>
      <p className="font-semibold text-sm text-center py-1 text-gray-300">
        {stateCall === false ? "Đang gọi..." : "Không liên hệ được"}
      </p>
    </div>
  );
}

export default InfoCalling;
