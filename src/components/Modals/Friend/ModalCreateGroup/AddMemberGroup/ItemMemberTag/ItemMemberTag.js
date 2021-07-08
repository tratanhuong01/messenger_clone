import React from "react";

ItemMemberTag.propTypes = {};

function ItemMemberTag(props) {
  const { item, memberChoose } = props;
  const setMemberChoose = () => {
    const index = memberChoose.findIndex(
      (ele) => ele.userRelationshipUser.id === item.userRelationshipUser.id
    );
    let memberChooses = [...memberChoose];
    memberChooses.splice(index, 1);
    props.setMemberChoose(memberChooses);
  };
  return (
    <div
      className="px-4 py-2 mr-2 mb-2 rounded-full bg-gray-300 dark:bg-dark-third dark:text-gray-300 
        cursor-pointer flex justify-center w-auto break-all"
    >
      <img
        src={item.userRelationshipUser.avatar}
        className="w-6 h-6 rounded-full object-cover mr-1"
        alt=""
      />
      <span className="font-semibold text-sm mr-1 flex items-center">
        {`${item.userRelationshipUser.firstName} ${item.userRelationshipUser.lastName}`}
      </span>
      <span
        onClick={setMemberChoose}
        className="ml-2 font-bold flex items-center"
      >
        &times;
      </span>
    </div>
  );
}

export default ItemMemberTag;
