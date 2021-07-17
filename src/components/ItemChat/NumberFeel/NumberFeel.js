import React from "react";
import { useDispatch } from "react-redux";
import * as modalsAction from "../../../actions/modals/index";

function NumberFeel(props) {
  //
  const { item, message, postion, data } = props;

  let listFeelDistinct = [];

  let allIcon = "";

  item.forEach((element) => {
    let index = listFeelDistinct.findIndex(
      (data) => data.typeFeel === element.typeFeel
    );
    if (index === -1) listFeelDistinct.push(element);
  });

  listFeelDistinct.forEach((element) => {
    allIcon += `${element.iconFeel} `;
  });

  const dispatch = useDispatch();

  return (
    <span
      onClick={() =>
        dispatch(
          modalsAction.openModalFeelMessage({
            listFeel: item,
            message: message,
          })
        )
      }
      className="dark:bg-dark-second bg-gray-100 color-word px-2 py-1 cursor-pointer
      rounded-3xl absolute -bottom-4 flex justify-center"
      style={{ [data]: `${postion}px` }}
    >
      <b className="dark:text-white text-xs flex items-center">
        {allIcon}&nbsp;{item.length}
      </b>
    </span>
  );
}

export default NumberFeel;
