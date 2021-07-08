import React from "react";

AddFileControl.propTypes = {};

function AddFileControl(props) {
  const { item } = props;
  return (
    <>
      <input
        className="hidden"
        type="file"
        name="fileImage[]"
        id="fileImageChatMain"
        multiple="multiple"
      />
      <label>
        <li
          className="float-left cursor-pointer p-1 fill-65676B hover:bg-gray-200 rounded-full 
          dark:hover:bg-dark-third"
        >
          <svg
            className="a8c37x1j ms05siws hr662l2t b7h9ocf4"
            height="20px"
            width="20px"
            viewBox="0 -1 17 17"
          >
            <g fill="gray">
              <path
                fill={item[0].colorChat}
                d="M2.882 13.13C3.476 4.743 3.773.48 3.773.348L2.195.516c-.7.1-1.478.647-1.478 1.647l1.092 11.419c0 .5.2.9.4 1.3.4.2.7.4.9.4h.4c-.6-.6-.727-.951-.627-2.151z"
              ></path>
              <circle cx="8.5" cy="4.5" r="1.5" fill="gray"></circle>
              <path
                fill={item[0].colorChat}
                d="M14 6.2c-.2-.2-.6-.3-.8-.1l-2.8 2.4c-.2.1-.2.4 0 .6l.6.7c.2.2.2.6-.1.8-.1.1-.2.1-.4.1s-.3-.1-.4-.2L8.3 8.3c-.2-.2-.6-.3-.8-.1l-2.6 2-.4 3.1c0 .5.2 1.6.7 1.7l8.8.6c.2 0 .5 0 .7-.2.2-.2.5-.7.6-.9l.6-5.9L14 6.2z"
              ></path>
              <path
                fill={item[0].colorChat}
                d="M13.9 15.5l-8.2-.7c-.7-.1-1.3-.8-1.3-1.6l1-11.4C5.5 1 6.2.5 7 .5l8.2.7c.8.1 1.3.8 1.3 1.6l-1 11.4c-.1.8-.8 1.4-1.6 1.3z"
                stroke={item[0].colorChat}
              ></path>
            </g>
          </svg>
        </li>
      </label>
    </>
  );
}

export default AddFileControl;
