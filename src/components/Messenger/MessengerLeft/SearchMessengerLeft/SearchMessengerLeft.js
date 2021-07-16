import React from "react";
import ItemUserOnline from "../UserOnline/ItemUserOnline/ItemUserOnline";

function SearchMessengerLeft(props) {
  //
  const showAllUsers = [].map((item, index) => {
    return <ItemUserOnline item={item} key={index} />;
  });

  return (
    <div className="w-full">
      <div
        className="w-full overflow-y-auto py-2"
        style={{ maxHeight: "575px" }}
      >
        {showAllUsers}
      </div>
    </div>
  );
}

export default SearchMessengerLeft;
