import React from "react";
import ItemFeel from "./ItemFeel/ItemFeel";
import * as Data from "../../../../constants/Data";

function Feel(props) {
  //
  const { setShow, item } = props;

  const showAllFeels = Data.FEEL.map((data, index) => {
    return (
      <ItemFeel item={data} setShow={setShow} key={index} message={item} />
    );
  });

  return (
    <ul
      className="-left-24 mb-2 absolute bottom-full flex flex-column dark:bg-dark-second bg-white 
      rounded-lg border-solid dark:border-dark-third border-gray-300 border rounded-3xl"
    >
      {showAllFeels}
    </ul>
  );
}

export default Feel;
