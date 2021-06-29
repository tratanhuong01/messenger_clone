import React from "react";
import MainLogin from "../../containers/Login/MainLogin/MainLogin";
import ShowModal from "../../containers/ShowModal/ShowModal";

Login.propTypes = {};

function Login(props) {
  return (
    <div className="w-full dark:bg-dark-main h-screen relative">
      <MainLogin />
      <ShowModal />
    </div>
  );
}

export default Login;
