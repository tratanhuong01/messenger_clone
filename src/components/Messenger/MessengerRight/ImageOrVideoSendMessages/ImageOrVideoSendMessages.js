import React, { useState } from "react";
import { useSelector } from "react-redux";

function ImageOrVideoSendMessages(props) {
  //
  const states = useSelector((state) => {
    return {
      messages: state.messages,
    };
  });

  const [show, setShow] = useState(true);

  const { messages } = states;

  const generalMedia = () => {
    const listMedias = [];
    messages.data.forEach((message) => {
      if (message.content !== null) {
        let content = JSON.parse(message.content);
        if (content.type === 1 && message.typeMessage === "2")
          for (let index = 0; index < content.data.length; index++) {
            const element = content.data[index];
            listMedias.push(element);
          }
      }
    });
    return listMedias;
  };

  const showAllMedia = generalMedia().map((item, index) => {
    return (
      <img
        key={index}
        src={item.src}
        className="object-cover rounded-lg m-0.5"
        alt=""
        style={{ width: 110, height: 110 }}
      />
    );
  });

  return (
    <>
      <li
        onClick={() => setShow(!show)}
        className="w-full font-semibold py-2.5 px-4 cursor-pointer 
        hover:bg-gray-300 dark:hover:bg-dark-third rounded-lg dark:text-white relative"
      >
        File phương tiện được chia sẽ{" "}
        <i className="fas fa-chevron-down float-right absolute right-5 top-3.5"></i>
      </li>
      {show && (
        <li className="w-full py-1 flex flex-wrap pl-2.5">{showAllMedia}</li>
      )}
    </>
  );
}

export default ImageOrVideoSendMessages;
