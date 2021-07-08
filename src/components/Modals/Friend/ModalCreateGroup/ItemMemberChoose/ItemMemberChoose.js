import React, { useState } from "react";

ItemMemberChoose.propTypes = {};

function ItemMemberChoose(props) {
  const { index, item, memberChoose, setMemberChoose, setSubmitStatus } = props;
  const isCheck = memberChoose.findIndex(
    (ele) => ele.userRelationshipUser.id === item.userRelationshipUser.id
  );
  const [check, setCheck] = useState(isCheck === -1 ? false : true);
  const setValue = (event) => {
    let memberChooses = [...memberChoose];
    if (check === true) {
      memberChooses.splice(isCheck, 1);
      setMemberChoose(memberChooses);
      setCheck(false);
    } else {
      memberChooses.push(item);
      setMemberChoose(memberChooses);
      setCheck(true);
    }
    memberChooses.length > 0 ? setSubmitStatus(false) : setSubmitStatus(true);
  };
  return (
    <div
      onClick={setValue}
      className="p-2.5 flex hover:bg-gray-200 dark:hover:bg-dark-third cursor-pointer"
    >
      <div className="flex relative">
        <div className="top-1/2 transform -translate-y-1/2 absolute roundInputCheckBoxTagMember">
          <input
            type="checkbox"
            id={`checkbox_${index}`}
            onChange={setValue}
            checked={check}
          />
          <label htmlFor={`checkbox_${index}`}></label>
        </div>
      </div>
      <div className="w-12 h-12 relative ml-10 mr-4">
        <img
          src={item.userRelationshipUser.avatar}
          className="w-full h-full rounded-full object-cover"
          alt=""
        />
      </div>
      <div className="flex">
        <span className="flex items-center font-semibold dark:text-gray-300">
          {`${item.userRelationshipUser.firstName} ${item.userRelationshipUser.lastName}`}
        </span>
      </div>
    </div>
  );
}

export default ItemMemberChoose;
