import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import api from "../../../../api/api";
import * as Config from "../../../../constants/Config";

function ItemFriend(props) {
  //
  const { item } = props;

  const states = useSelector((state) => {
    return {
      isLogin: state.isLogin,
    };
  });

  const { isLogin } = states;

  const [idGroupMessage, setIdGroupMessage] = useState(null);

  const chat = async () => {
    const result = await api(
      `getGroupMessage/${isLogin.user.id}/${item.userRelationshipUser.id}`,
      "GET",
      null,
      null
    );
    if (result.status !== 200) console.log("error", result.status);
    else {
      setIdGroupMessage(result.data.groupMessage.id);
    }
  };

  useEffect(() => {
    chat();
  }, []);

  return (
    <Link
      to={`${Config.PAGE_MESSENGER}/${idGroupMessage}`}
      className="w-full md:py-2 md:px-4 py-3 hover:bg-gray-200 flex cursor-pointer 
    dark:hover:bg-dark-third"
    >
      <div
        className="w-full hover:bg-gray-200 flex cursor-pointer 
      dark:hover:bg-dark-third"
      >
        <div className="object-cover rounded-full mx-auto md:m-0 relative w-14 h-14">
          <img
            src={item.userRelationshipUser.avatar}
            alt=""
            className="rounded-full object-cover mx-auto w-14 h-14"
          />
        </div>
        <div className="ml-5 hidden md:flex">
          <span className="font-semibold flex items-center dark:text-gray-300">
            {`${item.userRelationshipUser.firstName} ${item.userRelationshipUser.lastName}`}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default ItemFriend;
