import React, { useEffect, useState } from "react";
import * as process from "../../../../functions/process";

function MessengerLeftSearch(props) {
  //
  const { setShowAllMessage, setUserSearch, users } = props;

  const [show, setShow] = useState(false);

  const [data, setData] = useState("");

  const search = () => {
    let dataUsersChat = process.searchUserNotRelationship(data, users);
    let clone = [...dataUsersChat];
    setUserSearch(clone);
  };

  return (
    <div className="w-full text-center px-2 flex">
      {show && (
        <span
          onClick={() => {
            setShowAllMessage(true);
            setShow(false);
            setData("");
          }}
          className="w-12 h-10 rounded-full bx bxs-left-arrow-alt flex text-2xl cusor-pointer 
        items-center dark:text-gray-300 cursor-pointer hover:bg-gray-300 dark:hover:bg-dark-third 
        flex justify-center"
        ></span>
      )}
      <input
        onClick={() => {
          setShowAllMessage(false);
          setShow(true);
        }}
        type="text"
        className={` ${
          show ? "ml-3" : ""
        } w-full mx-auto p-2.5 px-5 rounded-4xl flex items-center
        bg-gray-200 dark:bg-dark-third dark:text-white`}
        placeholder="Tìm kiếm trên messenger"
        value={data}
        onChange={(event) => {
          setData(event.target.value);
        }}
      />
    </div>
  );
}

export default MessengerLeftSearch;
