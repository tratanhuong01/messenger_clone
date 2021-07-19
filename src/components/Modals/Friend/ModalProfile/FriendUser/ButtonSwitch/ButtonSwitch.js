import React from "react";

const ButtonSwitch = (props) => {
  //
  const {
    profile,
    setShowConnectFriend,
    relationship,
    dispatch,
    relationshipsAction,
  } = props;

  switch (profile.statusFriend) {
    case 0:
      return (
        <button
          onClick={() => setShowConnectFriend(true)}
          className="border-2 border-solid border-white bg-indigo-500 text-white font-semibold rounded-full
            py-2 px-8 hover:border-indigo-500 hover:bg-white hover:text-indigo-500 shadow-xl ml-5"
        >
          Kết bạn
        </button>
      );

    case 1:
      return (
        <button
          type="button"
          onClick={() =>
            dispatch(
              relationshipsAction.deleteRelationShipRequest(relationship)
            )
          }
          className="border-2 border-solid border-white bg-indigo-500 text-white font-semibold rounded-full
          py-2 px-8 hover:border-indigo-500 hover:bg-white hover:text-indigo-500 shadow-xl ml-5"
        >
          Hủy kết bạn
        </button>
      );

    case 2:
      return (
        <button
          type="button"
          onClick={() =>
            dispatch(
              relationshipsAction.updateStatusRelationShipRequest(relationship)
            )
          }
          className="border-2 border-solid border-white bg-indigo-500 text-white font-semibold rounded-full
            py-2 px-8 hover:border-indigo-500 hover:bg-white hover:text-indigo-500 shadow-xl ml-5"
        >
          Đồng ý
        </button>
      );
    default:
      return "";
  }
};
export default ButtonSwitch;
