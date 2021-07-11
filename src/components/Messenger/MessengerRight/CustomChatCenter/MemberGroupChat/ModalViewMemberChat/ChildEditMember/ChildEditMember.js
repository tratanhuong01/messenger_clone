import React from "react";

function ChildEditMember(props) {
  //
  const { label, onClick, data } = props;
  return (
    <li
      onClick={() => onClick(data)}
      className="w-full px-2.5 py-2.5 hover:bg-gray-300 dark:hover:bg-dark-third  
      cursor-pointer dark:text-white text-xm border-b-2 border-solid border-gray-200 
      dark:border-dark-third font-semibold"
    >
      {label}
    </li>
  );
}

export default ChildEditMember;
