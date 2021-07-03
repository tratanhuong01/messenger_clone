import React from "react";

ContentChatTop.propTypes = {};

function ContentChatTop(props) {
  return (
    <div className="w-full py-3 flex shadow">
      <div className="w-1/2 pl-3 flex">
        <div className="pt-1">
          <div className="w-10 h-10 relative">
            <img
              src="http://res.cloudinary.com/tratahuong01/image/upload/v1622792457/Avatar/ohr7yxb89srga7aoggdr.jpg"
              alt=""
              className="w-10 h-10 object-cover rounded-full"
            />
          </div>
        </div>
        <div className="pl-3">
          <b className="block dark:text-white">hưởng dev</b>
          <span className="text-gray-700 dark:text-gray-300 text-sm">
            Đang hoạt động
          </span>
        </div>
      </div>
      <div className="w-1/2 ml-auto">
        <ul className="ml-auto flex float-right">
          <li
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
                fill="#EE046B"
                d="M10.952 14.044c.074.044.147.086.22.125a.842.842 0 001.161-.367c.096-.195.167-.185.337-.42.204-.283.552-.689.91-.772.341-.078.686-.105.92-.11.435-.01 1.118.174 1.926.648a15.9 15.9 0 011.713 1.147c.224.175.37.43.393.711.042.494-.034 1.318-.754 2.137-1.135 1.291-2.859 1.772-4.942 1.088a17.47 17.47 0 01-6.855-4.212 17.485 17.485 0 01-4.213-6.855c-.683-2.083-.202-3.808 1.09-4.942.818-.72 1.642-.796 2.136-.754.282.023.536.17.711.392.25.32.663.89 1.146 1.714.475.808.681 1.491.65 1.926-.024.31-.026.647-.112.921-.11.35-.488.705-.77.91-.236.17-.226.24-.42.336a.841.841 0 00-.368 1.161c.04.072.081.146.125.22a14.012 14.012 0 004.996 4.996z"
              ></path>
              <path
                fill="#EE046B"
                d="M10.952 14.044c.074.044.147.086.22.125a.842.842 0 001.161-.367c.096-.195.167-.185.337-.42.204-.283.552-.689.91-.772.341-.078.686-.105.92-.11.435-.01 1.118.174 1.926.648.824.484 1.394.898 1.713 1.147.224.175.37.43.393.711.042.494-.034 1.318-.754 2.137-1.135 1.291-2.859 1.772-4.942 1.088a17.47 17.47 0 01-6.855-4.212 17.485 17.485 0 01-4.213-6.855c-.683-2.083-.202-3.808 1.09-4.942.818-.72 1.642-.796 2.136-.754.282.023.536.17.711.392.25.32.663.89 1.146 1.714.475.808.681 1.491.65 1.926-.024.31-.026.647-.112.921-.11.35-.488.705-.77.91-.236.17-.226.24-.42.336a.841.841 0 00-.368 1.161c.04.072.081.146.125.22a14.012 14.012 0 004.996 4.996z"
                stroke="#EE046B"
              ></path>
            </svg>
          </li>
          <li
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
                fill="#EE046B"
                d="M19.492 4.112a.972.972 0 00-1.01.063l-3.052 2.12a.998.998 0 00-.43.822v5.766a1 1 0 00.43.823l3.051 2.12a.978.978 0 001.011.063.936.936 0 00.508-.829V4.94a.936.936 0 00-.508-.828zM10.996 18A3.008 3.008 0 0014 14.996V5.004A3.008 3.008 0 0010.996 2H3.004A3.008 3.008 0 000 5.004v9.992A3.008 3.008 0 003.004 18h7.992z"
              ></path>
            </svg>
          </li>
          <li
            className="py-2.5 px-1 mx-1 rounded-full 
              dark:text-white cursor-pointer"
          >
            <svg
              fill="#EE046B"
              role="presentation"
              height="28px"
              name="icon"
              width="28px"
              viewBox="0 0 36 36"
            >
              <g transform="translate(18,18)scale(1.2)translate(-18,-18)">
                <path
                  fill="#EE046B"
                  d="M18,10 C16.6195,10 15.5,11.119 15.5,12.5 C15.5,13.881 16.6195,15 18,15 C19.381,15 20.5,13.881 20.5,12.5 C20.5,11.119 19.381,10 18,10 Z M16,25 C16,25.552 16.448,26 17,26 L19,26 C19.552,26 20,25.552 20,25 L20,18 C20,17.448 19.552,17 19,17 L17,17 C16.448,17 16,17.448 16,18 L16,25 Z M18,30 C11.3725,30 6,24.6275 6,18 C6,11.3725 11.3725,6 18,6 C24.6275,6 30,11.3725 30,18 C30,24.6275 24.6275,30 18,30 Z"
                  stroke="#EE046B"
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