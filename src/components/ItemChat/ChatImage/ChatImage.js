import React from "react";

function ChatImage(props) {
  //
  const { margin, item } = props;

  const images = JSON.parse(item.content);

  const showAllMesage = images.data.map((image, index) => {
    return images.data.length === 1 ? (
      <li className="w-full" key={index}>
        <img
          src={image.src}
          className="w-full object-cover rounded-lg"
          style={{ maxHeight: 500 }}
          alt=""
        />
      </li>
    ) : (
      <li className="w-60 h-60 m-1.5" key={index}>
        <img
          src={image.src}
          className="w-60 h-60 object-cover rounded-lg"
          alt=""
        />
      </li>
    );
  });

  return (
    <div
      className={`mess-right relative break-all border-none outline-none p-1.5 
          rounded-lg relative text-white ${margin}`}
      style={{ maxWidth: "75%", fontSize: "15px" }}
    >
      <ul className="flex flex-wrap pl-1 z-20">{showAllMesage}</ul>{" "}
    </div>
  );
}

export default ChatImage;
