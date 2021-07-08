import React from "react";

function FirstGroupChat(props) {
  const { item } = props;
  return (
    <div className="w-full p-2 text-center">
      <div className="w-16 h-16 relative mx-auto">
        <img
          src="http://res.cloudinary.com/tratahuong01/image/upload/v1622792457/Avatar/ohr7yxb89srga7aoggdr.jpg"
          className={`w-10 h-10 rounded-full object-cover 
            absolute top-0 right-0`}
          alt=""
        />
        <img
          src="http://res.cloudinary.com/tratahuong01/image/upload/v1622792457/Avatar/ohr7yxb89srga7aoggdr.jpg"
          className={`w-10 h-10 rounded-full object-cover 
            absolute bottom-0 left-0`}
          alt=""
        />
      </div>
      <p className="text-center text-gray-900 font-semibold dark:text-white">
        <span className="py-1.5 text-sm font-semibold dark:text-gray-300 ">
          Ensonet
        </span>{" "}
        <br />
        <span className="text-sm font-semibold dark:text-gray-300">
          {JSON.parse(item.content).data[0].content}
        </span>
      </p>
    </div>
  );
}

export default FirstGroupChat;
