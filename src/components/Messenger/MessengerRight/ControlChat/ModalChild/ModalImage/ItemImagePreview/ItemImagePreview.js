import React from "react";

function ItemImagePreview(props) {
  //
  const { item, setImagePreview, imagePreview, index } = props;

  const remove = () => {
    let imagePreviews = [...imagePreview];
    imagePreviews.splice(index, 1);
    setImagePreview(imagePreviews);
  };

  return (
    <li className="w-20 h-20 rounded-lg text-center mr-4 relative flex-shrink-0">
      <img
        src={URL.createObjectURL(item)}
        className="w-20 h-20 mx-auto rounded-lg object-cover"
        alt=""
      />
      <span
        onClick={remove}
        className="font-bold text-sm absolute -top-2 -right-2 p-0.5 px-2 dark:text-white 
        rounded-full bg-gray-300 dark:bg-dark-third cursor-pointer"
      >
        ×
      </span>
    </li>
  );
}

export default ItemImagePreview;
