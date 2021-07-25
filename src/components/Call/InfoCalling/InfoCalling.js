import React from "react";
import * as process from "../../../functions/process";

function InfoCalling(props) {
  //
  const { stateCall, members, group } = props;

  const name =
    group.typeGroupMessage === 0
      ? `${members[0].firstName} ${members[0].lastName}`
      : group.nameGroupMessage === null
      ? process.generalNameGroup(members)
      : group.nameGroupMessage;

  return (
    <div
      className="w-80 p-2 fixed top-1/2 left-1/2 transform -translate-x-1/2 
        -translate-y-1/2 flex flex-col justify-center text-white"
    >
      {group.typeGroupMessage === 0 ? (
        <img
          src={members[0].avatar}
          className="w-28 h-28 p-1 rounded-full object-cover mx-auto"
          alt=""
        />
      ) : (
        <div className="w-24 h-24 relative mx-auto">
          <img
            src="/images/male/1.jpg"
            className="w-16 h-16 rounded-full object-cover absolute top-0 left-0"
            alt=""
          />
          <img
            src="/images/male/1.jpg"
            className="w-16 h-16 rounded-full object-cover absolute bottom-0 right-0"
            alt=""
          />
        </div>
      )}

      <p className="font-bold text-2xl text-center py-1">{name}</p>
      <p className="font-semibold text-sm text-center py-1 text-gray-300">
        {stateCall === false ? "Đang gọi..." : "Không liên hệ được"}
      </p>
    </div>
  );
}

export default InfoCalling;
