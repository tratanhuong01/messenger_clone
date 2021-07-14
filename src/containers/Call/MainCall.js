import React from "react";
import CallAgain from "../../components/Call/CallAgain/CallAgain";
import ExtensionCall from "../../components/Call/ExtensionCall/ExtensionCall";
import ItemExtensionCall from "../../components/Call/ExtensionCall/ItemExtensionCall/ItemExtensionCall";
import InfoCalling from "../../components/Call/InfoCalling/InfoCalling";
import NotifyRight from "../../components/Call/NotifyRight/NotifyRight";

function MainCall(props) {
  //
  const { audio, stateCall } = props;

  return (
    <div className="w-full h-screen relative">
      <InfoCalling stateCall={stateCall} />
      {stateCall === true ? <CallAgain /> : <ExtensionCall />}
      <div className="absolute bottom-6 left-5">
        <ItemExtensionCall
          icon={"bx bx-message-rounded"}
          disabled={true}
          addClass="text-gray-300"
        />
      </div>
      <NotifyRight />
    </div>
  );
}

export default MainCall;
