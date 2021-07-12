import React, { useState } from "react";
import ModalViewMemberChat from "../ModalViewMemberChat/ModalViewMemberChat";

function ItemMember(props) {
  //
  const { item, leader } = props;

  const [show, setShow] = useState(false);

  return (
    <li
      className="w-full py-2 px-4 hover:bg-gray-200 dark:hover:bg-dark-third flex 
        cursor-pointer rounded-sm"
    >
      <div className="w-12 flex justiy-center mr-3">
        <img
          src={item.avatar}
          className="w-10 h-10 rounded-full object-cover flex items-center"
          alt=""
        />
      </div>
      <div className="w-full flex items-center dark:text-gray-300 flex-wrap">
        <p className="mb-0.5 w-full font-semibold">{`${item.firstName} ${item.lastName}`}</p>
        {leader.idUser === item.idUser && (
          <p className="text-xs text-gray-500">Quản trị viên</p>
        )}
      </div>
      <div className="w-10 flex justify-center relative">
        <span
          onClick={() => setShow(!show)}
          className="bx bx-dots-horizontal-rounded text-2xl flex items-center 
          dark:text-gray-300"
        ></span>
        {show && (
          <ModalViewMemberChat data={item} setShow={setShow} leader={leader} />
        )}
      </div>
    </li>
  );
}

export default ItemMember;
