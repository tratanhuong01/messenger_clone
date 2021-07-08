import React from "react";
import { useSelector } from "react-redux";

function ShowModal(props) {
  //
  const states = useSelector((state) => {
    return {
      modal: state.modal,
    };
  });

  const { modal } = states;

  return (
    <div
      className={`w-full bg-black top-0 left-0 z-50 bg-opacity-50 h-screen fixed 
      ${modal.StateModal === true ? "" : "hidden"}`}
    >
      {modal.DataModal}
    </div>
  );
}

export default ShowModal;
