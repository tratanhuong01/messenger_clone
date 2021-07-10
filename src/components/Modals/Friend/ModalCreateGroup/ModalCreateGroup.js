import React, { useEffect, useState } from "react";
import CloseModal from "../../../UI/CloseModal/CloseModal";
import ButtonCancel from "../../General/ButtonCancel/ButtonCancel";
import ButtonSave from "../../General/ButtonSave/ButtonSave";
import AddMemberGroup from "./AddMemberGroup/AddMemberGroup";
import ColorGroup from "./ColorGroup/ColorGroup";
import ItemMemberChoose from "./ItemMemberChoose/ItemMemberChoose";
import NameGroup from "./NameGroup/NameGroup";
import api from "../../../../api/api";
import { useDispatch, useSelector } from "react-redux";
import * as groupMessagesAction from "../../../../actions/groupmessage/index";

function ModalCreateGroup(props) {
  //
  const states = useSelector((state) => {
    return {
      isLogin: state.isLogin,
    };
  });

  const { isLogin } = states;

  const [nameGroup, setNameGroup] = useState(null);
  const [colorGroup, setColorGroup] = useState("");
  const [memberChoose, setMemberChoose] = useState([]);
  const [allMember, setAllMember] = useState([]);
  const [userCurrent, setUserCurrent] = useState([]);
  const [statusChoosed, setStatusChoosed] = useState("Tất cả");
  const [submitStatus, setSubmitStatus] = useState(true);
  const [data, setData] = useState("");

  useEffect(() => {
    api(`relationshipuser/${isLogin.user.id}`, "GET", null, null)
      .then((res) => {
        setAllMember(res.data);
        setUserCurrent(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isLogin]);

  const dispatch = useDispatch();

  const all = () => {
    setUserCurrent(allMember);
    setStatusChoosed("Tất cả");
  };

  const choose = () => {
    setUserCurrent(memberChoose);
    setStatusChoosed("Đã chọn");
  };

  const groupMessage = {
    groupMessage: {
      nameGroup: nameGroup,
      colorChat: colorGroup,
    },
    user: isLogin.user,
    users: memberChoose,
  };

  const showAllFriends = userCurrent.map((item, index) => {
    return (
      <ItemMemberChoose
        key={index}
        index={item.userRelationshipUser.id}
        item={item}
        memberChoose={memberChoose}
        setMemberChoose={setMemberChoose}
        setSubmitStatus={setSubmitStatus}
      />
    );
  });

  const searchUser = (data) => {
    let listUserNew = [];

    allMember.forEach((element) => {
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
        email.indexOf(data) !== -1 ||
        phone.indexOf(data) !== -1 ||
        fullName.toLowerCase().indexOf(data) !== -1
      ) {
        listUserNew.push(element);
      }
    });

    return listUserNew;
  };

  return (
    <div
      className="w-11/12 xl:w-1/3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
      rounded-lg z-50 bg-white dark:bg-dark-second shadow-lg rounded-lg "
    >
      <div className="w-full relative">
        <p className="m-3 font-semibold text-xl dark:text-gray-300">Tạo nhóm</p>
        <CloseModal />
        <hr />
        <NameGroup setNameGroup={setNameGroup} />
        <ColorGroup setColorGroup={setColorGroup} colorGroup={colorGroup} />
        <AddMemberGroup
          memberChoose={memberChoose}
          setMemberChoose={setMemberChoose}
          searchUser={searchUser}
          setUserCurrent={setUserCurrent}
          setData={setData}
          data={data}
        />
        <div className="m-2 w-full mt-4 pl-2 pr-6">
          <span
            onClick={all}
            className={`px-5 py-2 rounded-full font-semibold cursor-pointer mr-4 text-sm 
            ${
              statusChoosed === "Tất cả"
                ? "bg-blue-200 text-blue-600"
                : "bg-gray-200"
            }`}
          >
            Tất cả
          </span>
          <span
            onClick={choose}
            className={`px-5 py-2 rounded-full font-semibold cursor-pointer mr-4 text-sm 
            ${
              statusChoosed !== "Tất cả"
                ? "bg-blue-200 text-blue-600"
                : "bg-gray-200"
            }`}
          >
            Đã chọn
          </span>
        </div>
        <div
          className="my-2 w-full mt-4 h-52 max-h-52 overflow-y-auto 
          wrapper-scrollbar"
        >
          {showAllFriends}
        </div>
        <div className="w-full">
          <div className="flex my-2 justify-end">
            <ButtonCancel />
            <ButtonSave
              onClick={() =>
                dispatch(
                  groupMessagesAction.addGroupMessageRequestGroup(groupMessage)
                )
              }
              label={"Tạo nhóm"}
              disabled={submitStatus}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalCreateGroup;
