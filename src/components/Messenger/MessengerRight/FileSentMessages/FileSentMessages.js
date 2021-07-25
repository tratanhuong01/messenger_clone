import React, { useState } from "react";

function FileSentMessages(props) {
  //
  const [show, setShow] = useState(false);

  return (
    <>
      <li
        onClick={() => setShow(!show)}
        className="w-full font-semibold py-2.5 px-4 cursor-pointer 
                        hover:bg-gray-300 dark:hover:bg-dark-third rounded-lg dark:text-white relative"
      >
        Tệp được chia sẽ{" "}
        <i className="fas fa-chevron-down float-right absolute right-5 top-3.5"></i>
      </li>
      {show && (
        <li className="w-full py-1 flex flex-wrap">
          <div className="w-full dark:text-white py-1.5 mx-4 font-semibold">
            <i className="far fa-file"></i>&nbsp;&nbsp; file_one.txt
          </div>
          <div className="w-full dark:text-white py-1.5 mx-4 font-semibold">
            <i className="far fa-file"></i>&nbsp;&nbsp; file_one.txt
          </div>
        </li>
      )}
    </>
  );
}

export default FileSentMessages;
