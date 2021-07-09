import React from "react";
import ContentEditable from "react-contenteditable";
import MainItemMemberTag from "./MainItemMemberTag/MainItemMemberTag";

AddMemberGroup.propTypes = {};

function AddMemberGroup(props) {
  const { memberChoose, setMemberChoose, setUserCurrent, setData, data } =
    props;
  const searchUsers = (event) => {
    const userCurrent = props.searchUser(event.target.value);
    setData(event.target.value);
    setUserCurrent(userCurrent);
  };
  return (
    <div className="m-2 w-full pl-2 pr-6">
      <label
        className="w-full text-sm text-gray-700 dark:text-gray-300 
        font-semibold"
      >
        Mời bạn thêm vào cuộc trò chuyện (0/100)
      </label>
      <div className="w-full relative mb-1">
        {memberChoose.length <= 0 ? (
          <ContentEditable
            placeholder="Nhập họ tên , email , số điện thoại để tìm..."
            className="w-full border-gray-300 shadow-lg my-2 py-2 px-10 rounded-lg
            border-2 border-solid flex dark:text-gray-300  "
            html={data}
            onChange={searchUsers}
          />
        ) : (
          <div
            placeholder="Nhập họ tên , email , số điện thoại để tìm..."
            className="w-full border-gray-300 shadow-lg my-2 py-2 px-10 rounded-lg 
            border-2 border-solid flex dark:text-gray-300 max-h-28 overflow-y-auto wrapper-content-right"
          >
            <MainItemMemberTag
              memberChoose={memberChoose}
              setMemberChoose={setMemberChoose}
              data={data}
              setData={setData}
              setUserCurrent={setUserCurrent}
              searchUser={props.searchUser}
            />
          </div>
        )}

        <span
          className="bx bx-search absolute top-1/2 transform -translate-y-1/2 left-3 text-xl 
            text-gray-500"
        ></span>
      </div>
    </div>
  );
}

export default AddMemberGroup;
