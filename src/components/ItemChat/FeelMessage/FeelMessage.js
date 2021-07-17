import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Feel from "./Feel/Feel";
import * as modalsAction from "../../../actions/modals/index";

function FeelMessage(props) {
  //
  const { postion, data, item } = props;

  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  return (
    <div
      className="cursor-pointer color-word absolute top-1/2 pl-2 mess-user-feel z-50 hidden "
      style={{ transform: "translateY(-50%)", [data]: postion }}
    >
      <ul className="w-full flex relative">
        {show && <Feel setShow={setShow} item={item} />}
        <li
          onClick={() => setShow(!show)}
          className="feel-mess px-1 mr-1 rounded-full hover:bg-gray-300 dark:hover:bg-dark-third"
        >
          <i className="far fa-smile text-xm"></i>
        </li>
        <li
          onClick={() => dispatch(modalsAction.openModalWarningMessage(item))}
          className="px-1.5 rounded-full hover:bg-gray-300 dark:hover:bg-dark-third"
        >
          <i className="far fa-trash-alt text-xm"></i>
        </li>
      </ul>
    </div>
  );
}

export default FeelMessage;
