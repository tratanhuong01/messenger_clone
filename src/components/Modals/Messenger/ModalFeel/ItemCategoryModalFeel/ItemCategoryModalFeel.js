import React from "react";

function ItemCategoryModalFeel(props) {
  //
  const { type, value, current, setCurrent, setDataCurrent, dataFeel } = props;

  const getByType = (type) => {
    let data = [];
    if (type === "All") data = dataFeel.listFeel;
    else {
      dataFeel.listFeel.forEach((element) => {
        if (element.typeFeel === type) data.push(element);
      });
    }
    return data;
  };

  return (
    <li
      onClick={() => {
        setCurrent(type);
        setDataCurrent(getByType(type));
      }}
      className={`font-semibold text-blue-500 px-4 py-3 cursor-pointer 
      ${current === type ? " border-b-4 border-solid border-blue-500 " : ""}`}
    >
      {value}
    </li>
  );
}

export default ItemCategoryModalFeel;
