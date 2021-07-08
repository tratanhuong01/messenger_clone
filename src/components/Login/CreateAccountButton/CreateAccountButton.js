import React from "react";
import { useDispatch } from "react-redux";
import * as modalsAction from "../../../actions/modals/index";

function CreateAccountButton(props) {
  //
  const dispatch = useDispatch();

  return (
    <>
      <hr className="w-90% mx-auto mb-4" />
      <div className="w-full">
        <div className="bg-white mb-4">
          <button
            onClick={() => dispatch(modalsAction.openModalRegister())}
            type="button"
            className="outline-none px-8 py-3 bg-36A420 text-15px
            font-semibold text-white rounded-lg cursor-pointer"
          >
            Tạo Tài Khoản
          </button>
        </div>
      </div>
    </>
  );
}

export default CreateAccountButton;
