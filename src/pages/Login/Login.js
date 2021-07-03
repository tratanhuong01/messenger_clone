import React from "react";
import MainLogin from "../../containers/Login/MainLogin/MainLogin";
import ShowModal from "../../containers/ShowModal/ShowModal";
import * as Config from "../../constants/Config";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

Login.propTypes = {};

const mapStateToProps = (state) => {
  return {
    isLogin: state.isLogin,
  };
};

function Login(props) {
  const { isLogin } = props;
  if (isLogin.isLogin) {
    return <Redirect to={Config.PAGE_MESSENGER} />;
  }
  return (
    <div className="w-full dark:bg-dark-main h-screen relative">
      <MainLogin />
      <ShowModal />
    </div>
  );
}

export default connect(mapStateToProps, null)(Login);
