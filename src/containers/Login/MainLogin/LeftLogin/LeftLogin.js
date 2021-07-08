import React from "react";
import AccountNotIsset from "../../../../components/Login/AccountNotIsset/AccountNotIsset";
import AccountIsset from "../../../../components/Login/AccountIsset/AccountIsset";

function LeftLogin(props) {
  return (
    <div className="w-full flex flex-col py-2 mx-auto sm:flex-col sm:pt-4 lg:flex-row lg:pt-20">
      <div
        className="w-full xl:absolute xl:top-1/2 transform xl:-translate-y-1/2 xl:py-0
        p-8 pr-4 sm:w-11/12 sm:mx-auto lg:w-1/2"
      >
        {localStorage && localStorage.getItem("accounts") ? (
          <AccountIsset />
        ) : (
          <AccountNotIsset />
        )}
      </div>
    </div>
  );
}

export default LeftLogin;
