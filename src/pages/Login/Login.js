import React from "react";
import MainLogin from "../../containers/Login/MainLogin/MainLogin";
import ShowModal from "../../containers/ShowModal/ShowModal";
import * as Config from "../../constants/Config";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

function Login(props) {
  //
  const states = useSelector((state) => {
    return {
      isLogin: state.isLogin,
    };
  });

  const { isLogin } = states;

  if (isLogin.isLogin) return <Redirect to={Config.PAGE_MESSENGER} />;

  return (
    <div className="w-full h-screen relative">
      <MainLogin />
      <ShowModal />
    </div>
  );
}

export default Login;
