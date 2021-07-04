import React from "react";

ImageAvatar.propTypes = {};

function ImageAvatar(props) {
  return (
    <div className="w-40 h-40 mx-auto relative">
      <img
        src="https://pbs.twimg.com/media/EYVxlOSXsAExOpX.jpg"
        className="w-full h-full rounded-full 
        object-cover p-1 border-4 bg-white border-solid border-gray-500"
        alt=""
      />
      <span
        className=" bx bxs-camera absolute bottom-0 right-0 h-10 w-10 dark:text-white
        rounded-full cursor-pointer bg-gray-200 dark:bg-dark-main text-2xl flex
        justify-center items-center"
      ></span>
    </div>
  );
}

export default ImageAvatar;
