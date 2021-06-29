import React from "react";
import FeelMessageRight from "../FeelMessageRight/FeelMessageRight";

ChatImage.propTypes = {};

function ChatImage(props) {
  return (
    <div
      className="mess-right relative break-all ml-auto border-none outline-none p-1.5 
          rounded-lg relative text-white "
      style={{ maxWidth: "75%", fontSize: "15px" }}
    >
      <ul className="flex flex-wrap pl-1 z-20">
        <li className="w-full">
          <img
            src="http://res.cloudinary.com/tratahuong01/image/upload/v1624936026/ImageMessage/a0q5sfetqy0lmhyukgxu.jpg"
            className="object-cover rounded-lg"
            alt=""
          />
        </li>
      </ul>{" "}
    </div>
  );
}

export default ChatImage;
