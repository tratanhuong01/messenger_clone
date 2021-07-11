import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CloseModal from "../../../UI/CloseModal/CloseModal";
// import ItemChoosed from "./ItemChoosed/ItemChoosed";
import ItemMemberChat from "./ItemMemberChat/ItemMemberChat";
import * as modalsAction from "../../../../actions/modals/index";
import ItemChoosed from "./ItemChoosed/ItemChoosed";
import * as process from "../../../../functions/process";
import * as messagesAction from "../../../../actions/messages/index";

function ModalAddMemberGroup(props) {
  //
  const resetArray = (friends, user) => {
    let arrayNew = [];
    friends.forEach((element_1) => {
      let count = 0;
      user.forEach((element_2) => {
        if (element_1.userRelationshipUser.id === element_2.idUser) count++;
      });
      if (count === 0) arrayNew.push(element_1);
    });
    return arrayNew;
  };

  const states = useSelector((state) => {
    return {
      friends: state.friends,
      messages: state.messages,
      isLogin: state.isLogin,
    };
  });

  const [itemChoosed, setItemChoosed] = useState([]);

  const [disabled, setDisabled] = useState(true);

  const dispatch = useDispatch();

  const { friends, messages, isLogin } = states;

  const { user } = process.dataUsersChat(messages.data, isLogin.user.id);

  const friendMain = resetArray(friends.listFriends, user);

  const [friendCurrent, setFriendCurrent] = useState(friendMain);

  const [search, setSearch] = useState("");

  const showListFriends = friendCurrent.map((item, index) => {
    return (
      <ItemMemberChat
        item={item}
        key={index}
        itemChoosed={itemChoosed}
        setItemChoosed={setItemChoosed}
        setDisabled={setDisabled}
      />
    );
  });

  const showItemChoosed = itemChoosed.map((item, index) => {
    return (
      <ItemChoosed
        item={item}
        key={index}
        itemChoosed={itemChoosed}
        setItemChoosed={setItemChoosed}
        setDisabled={setDisabled}
      />
    );
  });

  const searchData = (event) => {
    let arrayNew = [];
    let search = event.target.value.toLowerCase();
    let friendsSearch = [...friendMain];
    friendsSearch.forEach((element) => {
      let fullName = `${element.userRelationshipUser.firstName} ${element.userRelationshipUser.lastName}`;
      let email =
        element.userRelationshipUser.email === null
          ? ""
          : element.userRelationshipUser.email;
      let phone =
        element.userRelationshipUser.phone === null
          ? ""
          : element.userRelationshipUser.phone;

      if (
        email.toLowerCase().indexOf(search) !== -1 ||
        phone.toLowerCase().indexOf(search) !== -1 ||
        fullName.toLowerCase().indexOf(search) !== -1
      ) {
        arrayNew.push(element);
      }
    });
    setSearch(search);
    setFriendCurrent(arrayNew);
  };

  const data = {
    user: isLogin.user,
    list: itemChoosed,
    group: messages.group,
  };

  return (
    <div
      className="w-11/12 fixed top-50per left-50per dark:bg-dark-second transform-translate-50per 
      pb-2 pt-2 opacity-100 bg-white z-50 border-2 border-solid border-gray-300 sm:w-4/5 sm:mt-12 
      lg:w-3/5 xl:w-2/5 xl:mt-4 dark:border-dark-main shadow-1 rounded-lg"
    >
      <div className="w-full text-center">
        <p className="text-xl font-semibold py-2.5 pb-4 dark:text-white">
          Thêm người
        </p>
        <CloseModal />
        <hr />
      </div>
      <div className="w-full p-3">
        <input
          type="text"
          className="w-full py-2.5 px-4 rounded-full shadow-lg border-2 border-solid 
          border-gray-200 dark:border-dark-third dark:text-gray-300 font-semibold 
          bg-gray-100 dark:bg-dark-third"
          placeholder="Nhập họ tên , email , số điện thoại để tìm "
          onChange={searchData}
          value={search}
        />
      </div>

      <div className="w-full p-2 flex max-w-full overflow-x-auto">
        {showItemChoosed}
      </div>

      <p
        className="mb-1 font-semibold text-gray-800 text-xm dark:text-gray-300 pl-5 
      cursor-pointer "
      >
        Gợi ý
      </p>
      <div
        className="w-full dark:bg-dark-second pt-2 wrapper-content-right 
        overflow-y-auto"
        style={{ maxHeight: "330px", height: "330px" }}
      >
        {showListFriends}
      </div>
      <div className="text-right py-3">
        <button
          onClick={() => dispatch(modalsAction.closeModal())}
          type="button"
          className="cursor-pointer w-1/5 border-none 
          font-semibold text-blue-500 rounded-lg p-2.5 mx-2"
        >
          Hủy
        </button>
        <button
          onClick={() =>
            dispatch(messagesAction.addMemberToGroupMessageRequest(data))
          }
          type="button"
          className={`cursor-not-allowed w-1/4 border-none font-semibold text-white 
          rounded-lg p-2.5 mx-2 ${disabled ? "bg-gray-500" : "bg-blue-500"}`}
          disabled={disabled}
        >
          Lưu
        </button>
      </div>
    </div>
  );
}

export default ModalAddMemberGroup;
