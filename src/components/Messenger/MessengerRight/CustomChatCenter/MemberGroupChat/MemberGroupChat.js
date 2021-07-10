import React, { useState } from "react";
import ItemMember from "./ItemMember";

function MemberGroupChat(props) {
  //
  const [show, setShow] = useState(false);

  return (
    <>
      <li
        onClick={() => setShow(!show)}
        className="w-full font-semibold py-2.5 px-4 cursor-pointer 
        hover:bg-gray-300 dark:hover:bg-dark-third rounded-lg dark:text-white relative"
      >
        Thành viên trong đoạn chat{" "}
        <i className="fas fa-chevron-down float-right absolute right-5 top-3.5"></i>
      </li>
      <li className={`w-full py-1 ${show ? "" : "hidden"}`}>
        <ul className="w-full">
          <ItemMember />
          <ItemMember />
          <ItemMember />
        </ul>
      </li>
    </>
  );
}

export default MemberGroupChat;
