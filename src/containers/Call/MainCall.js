import React from "react";
import CallAgain from "../../components/Call/CallAgain/CallAgain";
import ExtensionCall from "../../components/Call/ExtensionCall/ExtensionCall";
import ItemExtensionCall from "../../components/Call/ExtensionCall/ItemExtensionCall/ItemExtensionCall";
import InfoCalling from "../../components/Call/InfoCalling/InfoCalling";
import NotifyRight from "../../components/Call/NotifyRight/NotifyRight";
import WebcamView from "../../components/Call/WebcamView/WebcamView";
// import * as process from "../../functions/process";

function MainCall(props) {
  //
  const { stateCall, match, members } = props;

  return (
    <div className="w-full h-screen relative">
      <InfoCalling
        stateCall={stateCall}
        members={members.members}
        group={members.group}
      />
      {stateCall === true ? (
        <CallAgain match={match} />
      ) : (
        <ExtensionCall match={match} />
      )}
      <div className="absolute bottom-6 left-5">
        <ItemExtensionCall
          icon={"bx bx-message-rounded"}
          disabled={true}
          addClass="text-gray-300"
        />
      </div>
      <NotifyRight />

      {stateCall === false && match.match.params.typeCall === "videoCall" && (
        <WebcamView />
      )}
    </div>
  );
}

export default MainCall;
