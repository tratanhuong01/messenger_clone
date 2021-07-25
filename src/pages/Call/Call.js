import React, { useEffect, useState } from "react";
import MainCall from "../../containers/Call/MainCall";
import ShowModal from "../../containers/ShowModal/ShowModal";
import api from "../../api/api";

function Call(props) {
  //
  const audio = new Audio("../../../sound/messenger.mp3");

  const [stateCall] = useState(false);

  const [stateApi, setStateApi] = useState(false);

  const [members, setMembers] = useState({
    members: [],
    group: null,
  });

  const { match } = props;

  const handelAudio = () => {
    audio.play();
    audio.loop = true;
  };

  useEffect(() => {
    async function fetch() {
      try {
        const resultMembers = await api(
          `getMemberGroupChat/${match.match.params.id}`,
          "GET",
          null,
          null
        );
        const resultGroup = await api(
          `groupMessage/${match.match.params.id}`,
          "GET",
          null,
          null
        );
        setMembers({
          members: resultMembers.data,
          group: resultGroup.data,
        });
        setStateApi(true);
        handelAudio();
        setTimeout(() => {
          window.close();
        }, 20000);
      } catch (error) {
        console.log(error);
      }
    }
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full bg-black h-screen relative">
      {stateApi ? (
        <>
          <MainCall
            audio={audio}
            stateCall={stateCall}
            match={match}
            members={members}
          />
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
