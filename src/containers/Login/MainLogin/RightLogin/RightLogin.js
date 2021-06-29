import React from "react";
import CreateAccountButton from "../../../../components/Login/CreateAccountButton/CreateAccountButton";
import FormLogin from "../../../../components/Login/FormLogin/FormLogin";
import EndFormLogin from "../../../../components/Login/EndFormLogin/EndFormLogin";
RightLogin.propTypes = {};

function RightLogin(props) {
  return (
    <div
      className="w-full mx-auto rounded-lg mr-8 sm:w-11/12 sm:mx-auto lg:w-1/3
      lg:mr-8 items-center flex flex-wrap xl:mt-12"
    >
      <div className="w-full text-center p-2 bg-white rounded-lg">
        <div className="w-full">
          <FormLogin />
        </div>
        <CreateAccountButton />
      </div>
      <EndFormLogin />
    </div>
  );
}

export default RightLogin;
