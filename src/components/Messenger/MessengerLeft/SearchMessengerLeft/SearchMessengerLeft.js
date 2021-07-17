import React from "react";
import ItemUserOnline from "../UserOnline/ItemUserOnline/ItemUserOnline";

function SearchMessengerLeft(props) {
  //
  const { showAllMessage, dataSearch } = props;

  const showAllUsers = [0, 1, 2, 3, 4].map((item, index) => {
    return <ItemUserOnline item={item} key={index} />;
  });

  return (
    <div className={`w-full ${showAllMessage !== true ? "" : "hidden"}`}>
      <div
        className={`w-full p-2 dark:hover:bg-dark-third hover:bg-gray-200 
      flex px-4 my-1.5 cursor-pointer ${
        dataSearch.value.length > 0 ? "" : "hidden"
      }`}
      >
        <div className="bx bx-search flex items-center text-2xl dark:text-gray-300 mr-3"></div>
        <div
          className="w-full max-w-full overflow-hidden inline-block dark:text-gray-300 text-sm py-2 
          font-semibold items-center whitespace-nowrap overflow-ellipsis pr-1"
        >
          Search message for "{dataSearch.value}"
        </div>
      </div>
      <div
        className="w-full overflow-y-auto py-2"
        style={{ maxHeight: "545px" }}
      >
        {showAllUsers}
      </div>
    </div>
  );
}

export default SearchMessengerLeft;
