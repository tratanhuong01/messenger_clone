import React, { useEffect, useState } from "react";
import MainCall from "../../containers/Call/MainCall";
import ShowModal from "../../containers/ShowModal/ShowModal";

function Call(props) {
  //
  const audio = new Audio("../../../sound/messenger.mp3");

  const [stateCall, setStateCall] = useState(false);

  const [stateApi, setStateApi] = useState(false);

  const { match } = props;

  const handelAudio = () => {
    audio.play();
    audio.loop = true;
  };

  useEffect(() => {
    setTimeout(() => {
      setStateApi(true);
      handelAudio();
      setTimeout(() => {
        setStateCall(true);
        audio.pause();
      }, 5000);
    }, 3000);
  }, []);

  return (
    <div className="w-full bg-black h-screen relative">
      {stateApi ? (
        <>
          <MainCall audio={audio} stateCall={stateCall} match={match} />
          <ShowModal />
        </>
      ) : (
        <div
          className="w-60 flex justify-center absolute top-1/2 left-1/2 transform 
        -translate-x-1/2 -translate-y-1/2 flex-wrap"
        >
          <div className="w-full flex justify-center mb-1">
            <span class="fas fa-circle-notch fa-spin text-xl text-blue-500"></span>
          </div>
          <p className="text-center font-semibold text-white w-full">
            Đang tải....
          </p>
        </div>
      )}
    </div>
  );
}

export default Call;
