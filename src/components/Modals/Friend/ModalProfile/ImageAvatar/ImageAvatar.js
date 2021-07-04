import React from "react";

ImageAvatar.propTypes = {};

function ImageAvatar(props) {
  const { user } = props;
  return (
    <div className="w-40 h-40 mx-auto relative">
      <img
        src={user.avatar}
        className="w-full h-full rounded-full 
        object-cover p-1 border-4 bg-white border-solid border-gray-500"
        alt=""
      />
      <input type="file" className="hidden" id="avatar__file" />
      <label
        htmlFor="avatar__file"
        className="absolute bottom-0 right-0 h-10 w-10"
      >
        <span
          className=" bx bxs-camera dark:text-white w-full h-full
          rounded-full cursor-pointer bg-gray-200 dark:bg-dark-main text-2xl flex
          justify-center items-center"
        ></span>
      </label>
    </div>
  );
}

export default ImageAvatar;
