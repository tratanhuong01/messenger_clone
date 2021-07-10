import React from "react";

function ItemChoosed(props) {
  //
  const { itemChoosed, setItemChoosed, item, setDisabled } = props;

  const removeItemChoosed = () => {
    let itemChoosedAll = [...itemChoosed];
    let index = itemChoosedAll.findIndex(
      (data) => data.userRelationshipUser.id === item.userRelationshipUser.id
    );
    itemChoosedAll.splice(index, 1);
    setItemChoosed(itemChoosedAll);
    itemChoosedAll.length > 0 ? setDisabled(false) : setDisabled(true);
  };

  return (
    <div className="w-20 mx-1 flex-shrink-0">
      <div className="w-10 h-10 relative mx-auto">
        <img
          src={item.userRelationshipUser.avatar}
          alt=""
          className="w-10 h-10 object-cover rounded-full mx-auto"
        />
        <span
          onClick={removeItemChoosed}
          className="absolute top-0 -right-2 w-4 h-4 pb-0.5 flex items-center text-xm font-semibold 
          justify-center bg-gray-200 rounded-full dark:bg-dark-second dark:text-gray-300 cursor-pointer 
          hover:bg-gray-300 dark:hover:bg-dark-third"
        >
          ×
        </span>
      </div>
      <p
        className="w-full px-1 max-w-full py-1.5 text-xs font-semibold inline-block dark:text-gray-300 
        whitespace-nowrap overflow-ellipsis overflow-hidden text-gray-800 text-center"
      >
        {`${item.userRelationshipUser.firstName} ${item.userRelationshipUser.lastName}`}
      </p>
    </div>
  );
}

export default ItemChoosed;
