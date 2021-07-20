import React from "react";
import { useSelector } from "react-redux";
import ItemGroupChat from "../../../ItemChat/ItemGroupChat/ItemGroupChat";
import ItemSingleChat from "../../../ItemChat/ItemSingleChat/ItemSingleChat";

function ContentChatTop(props) {
  //
  const states = useSelector((state) => {
    return {
      messages: state.messages,
    };
  });

  const { messages } = states;

  const { typeGroupMessage, user, setShowRight, showRight, image } = props;

  const y = window.top.outerHeight / 2 + window.top.screenY - 720 / 2;
  const x = window.top.outerWidth / 2 + window.top.screenX - 1200 / 2;

  return (
    <div className="w-full pt-3 flex shadow ">
      <div className="w-2/3 pl-3 flex ">
        <div className="">
          {typeGroupMessage === "0" || image !== null ? (
            <ItemSingleChat
              width="w-10"
              height="h-10"
              margin="my-2"
              padding=""
              widthParent=""
              heightParent=""
              image={image}
            />
          ) : (
            <ItemGroupChat
              width="w-8"
              height="h-8"
              margin="mb-1.5"
              padding=""
              widthParent="w-12"
              heightParent="h-12"
              user={user}
            />
          )}
        </div>
        <div className="pl-3 flex flex-col">
          <b
            className="block dark:text-white inline-block whitespace-nowrap 
            overflow-ellipsis overflow-hidden max-w-full pr-4"
          >
            {messages.name}
          </b>
          <span className="text-gray-700 dark:text-gray-300 text-sm">
            Đang hoạt động
          </span>
        </div>
      </div>
      <div className="w-1/3 ml-auto">
        <ul className="ml-auto flex float-right">
          <li
            onClick={() =>
              window.open(
                `../call/audioCall/${messages.group.id}`,
                "name",
                `toolbar=1,scrollbars=1,location=1,statusbar=0,menubar=1,resizable=1,width=1200,height=720,
                top=${y},left=${x},title="Cuộc gọi âm thanh - Messenger"`
              )
            }
            className="py-2 px-1 mx-1 rounded-full 
              dark:text-white cursor-pointer"
          >
            <svg
              role="presentation"
              height="34px"
              width="34px"
              viewBox="-5 -5 30 30"
            >
              <path
                fill={messages.color}
                d="M10.952 14.044c.074.044.147.086.22.125a.842.842 0 001.161-.367c.096-.195.167-.185.337-.42.204-.283.552-.689.91-.772.341-.078.686-.105.92-.11.435-.01 1.118.174 1.926.648a15.9 15.9 0 011.713 1.147c.224.175.37.43.393.711.042.494-.034 1.318-.754 2.137-1.135 1.291-2.859 1.772-4.942 1.088a17.47 17.47 0 01-6.855-4.212 17.485 17.485 0 01-4.213-6.855c-.683-2.083-.202-3.808 1.09-4.942.818-.72 1.642-.796 2.136-.754.282.023.536.17.711.392.25.32.663.89 1.146 1.714.475.808.681 1.491.65 1.926-.024.31-.026.647-.112.921-.11.35-.488.705-.77.91-.236.17-.226.24-.42.336a.841.841 0 00-.368 1.161c.04.072.081.146.125.22a14.012 14.012 0 004.996 4.996z"
              ></path>
              <path
                fill={messages.color}
                d="M10.952 14.044c.074.044.147.086.22.125a.842.842 0 001.161-.367c.096-.195.167-.185.337-.42.204-.283.552-.689.91-.772.341-.078.686-.105.92-.11.435-.01 1.118.174 1.926.648.824.484 1.394.898 1.713 1.147.224.175.37.43.393.711.042.494-.034 1.318-.754 2.137-1.135 1.291-2.859 1.772-4.942 1.088a17.47 17.47 0 01-6.855-4.212 17.485 17.485 0 01-4.213-6.855c-.683-2.083-.202-3.808 1.09-4.942.818-.72 1.642-.796 2.136-.754.282.023.536.17.711.392.25.32.663.89 1.146 1.714.475.808.681 1.491.65 1.926-.024.31-.026.647-.112.921-.11.35-.488.705-.77.91-.236.17-.226.24-.42.336a.841.841 0 00-.368 1.161c.04.072.081.146.125.22a14.012 14.012 0 004.996 4.996z"
                stroke={messages.color}
              ></path>
            </svg>
          </li>
          <li
            onClick={() =>
              window.open(
                `../call/videoCall/${messages.group.id}`,
                "name",
                `toolbar=1,scrollbars=1,location=1,statusbar=0,menubar=1,resizable=1,width=1200,height=720,
                top=${y},left=${x}`
              )
            }
            className="py-2 px-1 mx-1 rounded-full 
              dark:text-white cursor-pointer"
          >
            <svg
              role="presentation"
              height="34px"
              width="34px"
              viewBox="-5 -5 30 30"
            >
              <path
                fill={messages.color}
                d="M19.492 4.112a.972.972 0 00-1.01.063l-3.052 2.12a.998.998 0 00-.43.822v5.766a1 1 0 00.43.823l3.051 2.12a.978.978 0 001.011.063.936.936 0 00.508-.829V4.94a.936.936 0 00-.508-.828zM10.996 18A3.008 3.008 0 0014 14.996V5.004A3.008 3.008 0 0010.996 2H3.004A3.008 3.008 0 000 5.004v9.992A3.008 3.008 0 003.004 18h7.992z"
              ></path>
            </svg>
          </li>
          <li
            onClick={() => setShowRight(!showRight)}
            className="py-2.5 px-1 mx-1 rounded-full 
              dark:text-white cursor-pointer"
          >
            <svg
              fill={messages.color}
              role="presentation"
              height="28px"
              name="icon"
              width="28px"
              viewBox="0 0 36 36"
            >
              <g transform="translate(18,18)scale(1.2)translate(-18,-18)">
                <path
                  fill={messages.color}
                  d="M18,10 C16.6195,10 15.5,11.119 15.5,12.5 C15.5,13.881 16.6195,15 18,15 C19.381,15 20.5,13.881 20.5,12.5 C20.5,11.119 19.381,10 18,10 Z M16,25 C16,25.552 16.448,26 17,26 L19,26 C19.552,26 20,25.552 20,25 L20,18 C20,17.448 19.552,17 19,17 L17,17 C16.448,17 16,17.448 16,18 L16,25 Z M18,30 C11.3725,30 6,24.6275 6,18 C6,11.3725 11.3725,6 18,6 C24.6275,6 30,11.3725 30,18 C30,24.6275 24.6275,30 18,30 Z"
                  stroke={messages.color}
                ></path>
              </g>
            </svg>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ContentChatTop;
