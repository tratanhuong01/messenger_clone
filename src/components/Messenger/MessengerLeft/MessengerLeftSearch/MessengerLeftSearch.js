import React from "react";

MessengerLeftSearch.propTypes = {};

function MessengerLeftSearch(props) {
  return (
    <div className="w-full text-center px-2">
      <input
        type="text"
        className="w-full mx-auto p-2.5 px-5 rounded-4xl 
        bg-gray-200 dark:bg-dark-third dark:text-white"
        placeholder="Tìm kiếm trên messenger"
      />
    </div>
  );
}

export default MessengerLeftSearch;
