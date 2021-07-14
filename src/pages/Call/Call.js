import React, { useEffect, useState } from "react";
import MainCall from "../../containers/Call/MainCall";
import ShowModal from "../../containers/ShowModal/ShowModal";

function Call(props) {
  //
  const audio = new Audio("./sound/messenger.mp3");

  const [stateCall, setStateCall] = useState(false);

  const handelAudio = () => {
    audio.play();
    audio.loop = true;
  };

  useEffect(() => {
    handelAudio();
  }, []);

  setTimeout(() => {
    setStateCall(true);
    audio.pause();
  }, 10000);

  return (
    <div className="w-full bg-black h-screen relative">
      <MainCall audio={audio} stateCall={stateCall} />
      <ShowModal />
    </div>
  );
}

export default Call;
