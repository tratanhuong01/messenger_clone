import React from "react";

FriendUser.propTypes = {};

function FriendUser(props) {
  const { setShowConnectFriend, profile } = props;
  const ButtonSwitch = () => {
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
            className="border-2 border-solid border-white bg-indigo-500 text-white font-semibold rounded-full
          py-2 px-8 hover:border-indigo-500 hover:bg-white hover:text-indigo-500 shadow-xl ml-5"
          >
            Hủy kết bạn
          </button>
        );

      case 2:
        return (
          <button
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
  return (
    <div className="w-full my-2 relative flex justify-center">
      <button
        className="border-2 border-solid border-indigo-500 text-indigo-500 font-semibold mr-5 bg-white
        py-2 px-8 hover:border-white hover:bg-indigo-500 hover:text-white rounded-full shadow-xl"
      >
        Nhắn tin
      </button>
      <ButtonSwitch />
    </div>
  );
}

export default FriendUser;
