import React from "react";

function ItemMemberChat(props) {
  //
  const { item, itemChoosed, setItemChoosed, setDisabled } = props;

  let itemChoosedAll = [...itemChoosed];

  let index = itemChoosedAll.findIndex(
    (data) => data.userRelationshipUser.id === item.userRelationshipUser.id
  );

  const onChange = (event) => {
    if (event.target.checked === true) {
      itemChoosedAll.push(item);
      setItemChoosed(itemChoosedAll);
      itemChoosedAll.length > 0 ? setDisabled(false) : setDisabled(true);
    } else {
      itemChoosedAll.splice(index, 1);
      setItemChoosed(itemChoosedAll);
      itemChoosedAll.length > 0 ? setDisabled(false) : setDisabled(true);
    }
  };

  return (
    <div
      className="w-full hover:bg-gray-200 dark:hover:bg-dark-third 
        flex cursor-pointer relative p-2"
    >
      <div className="w-1/12">
        <img
          src={item.userRelationshipUser.avatar}
          className="w-12 h-12 object-cover rounded-full"
          alt=""
        />
      </div>
      <div className="w-10/12 flex pl-3">
        <p className="flex items-center flex-wrap">
          <span className="w-full font-semibold dark:text-white">
            {`${item.userRelationshipUser.firstName} ${item.userRelationshipUser.lastName}`}
          </span>
        </p>
      </div>
      <div className="w-1/12 flex justify-center">
        <div className="flex items-center">
          <input
            type="checkbox"
            className="transform scale-150 p-0.5"
            checked={index === -1 ? false : true}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
}

export default ItemMemberChat;
