import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory, withRouter } from "react-router-dom";
import MainFriend from "../../containers/Friend/MainFriend";
import ShowModal from "../../containers/ShowModal/ShowModal";
import * as Config from "../../constants/Config";

function Friend(props) {
  //
  const states = useSelector((state) => {
    return {
      isLogin: state.isLogin,
    };
  });

  const { isLogin } = states;

  const history = useHistory();

  useEffect(() => {
    if (isLogin.isLogin) {
      document.getElementById("root").classList =
        isLogin.user.darkMode === 0 ? "whiteToBlack" : "dark blackToWhite";
    } else {
      history.push(Config.PAGE_LOGIN);
    }
  }, [isLogin, history]);

  return (
    <div className="w-full dark:bg-dark-main h-screen relative">
      <MainFriend />
      <ShowModal />
    </div>
  );
}

export default withRouter(Friend);
