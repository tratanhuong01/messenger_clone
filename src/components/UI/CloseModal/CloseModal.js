import React from "react";
import { useDispatch } from "react-redux";
import * as modalsAction from "../../../actions/modals/index";

function CloseModal(props) {
  //
  const dispatch = useDispatch();

  return (
    <span
      onClick={() => dispatch(modalsAction.closeModal())}
      className="rounded-full dark:bg-dark-third text-gray-700 dark:text-white z-50
      px-3 py-1 text-2xl font-bold fixed right-2 bg-gray-300 top-2 cursor-pointer"
    >
      ×
    </span>
  );
}

export default CloseModal;
