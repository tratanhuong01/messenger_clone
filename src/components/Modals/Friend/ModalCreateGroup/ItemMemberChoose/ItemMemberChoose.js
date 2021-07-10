import React from "react";

function ItemMemberChoose(props) {
  //
  const { index, item, memberChoose, setMemberChoose, setSubmitStatus } = props;

  let memberChooses = [...memberChoose];

  let isCheck = memberChooses.findIndex(
    (ele) => ele.userRelationshipUser.id === item.userRelationshipUser.id
  );

  const setValue = (event) => {
    if (isCheck !== -1) {
      memberChooses.splice(isCheck, 1);
      setMemberChoose(memberChooses);
      isCheck = false;
    } else {
      memberChooses.push(item);
      setMemberChoose(memberChooses);
      isCheck = true;
    }
    memberChooses.length > 0 ? setSubmitStatus(false) : setSubmitStatus(true);
  };

  return (
    <div className="p-2.5 flex hover:bg-gray-200 dark:hover:bg-dark-third cursor-pointer">
      <div className="flex relative">
        <div className="top-1/2 transform -translate-y-1/2 absolute roundInputCheckBoxTagMember">
          <input
            type="checkbox"
            id={`checkbox_${index}`}
            onChange={setValue}
            checked={isCheck === -1 ? false : true}
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
