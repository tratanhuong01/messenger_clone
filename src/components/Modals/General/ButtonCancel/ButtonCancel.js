import React from "react";
import { useDispatch } from "react-redux";
import * as modalsAction from "../../../../actions/modals/index";

function ButtonCancel(props) {
  //
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(modalsAction.closeModal())}
      className="py-2 px-8 rounded-full border-indigo-500 border-2 border-solid 
        mr-3 font-semibold hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-dark-third"
    >
      Hủy
    </button>
  );
}

export default ButtonCancel;
