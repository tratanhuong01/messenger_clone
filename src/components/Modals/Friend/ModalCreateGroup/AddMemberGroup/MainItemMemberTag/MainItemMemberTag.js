import React from "react";
import ContentEditable from "react-contenteditable";
import ItemMemberTag from "../ItemMemberTag/ItemMemberTag";

MainItemMemberTag.propTypes = {};

function MainItemMemberTag(props) {
  const { memberChoose, setMemberChoose, data, setData, setUserCurrent } =
    props;
  const searchData = (event) => {
    const userCurrent = props.searchUser(event.target.value);
    setData(event.target.value);
    setUserCurrent(userCurrent);
  };
  const showTagFriends = memberChoose.map((item, index) => {
    return (
      <ItemMemberTag
        item={item}
        key={index}
        setMemberChoose={setMemberChoose}
        memberChoose={memberChoose}
      />
    );
  });
  return (
    <div className="w-auto flex flex-wrap max-h-32">
      {showTagFriends}
      <ContentEditable
        className="py-2 px-4"
        html={data}
        onChange={searchData}
      />
    </div>
  );
}

export default MainItemMemberTag;
