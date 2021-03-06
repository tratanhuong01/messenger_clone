import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, withRouter } from "react-router-dom";
import * as Config from "../../constants/Config";
import MainMessenger from "../../containers/Messenger/MainMessenger";
import ShowModal from "../../containers/ShowModal/ShowModal";
import * as socketAction from "../../actions/socket/index";

function Messenger(props) {
  //
  const states = useSelector((state) => {
    return {
      isLogin: state.isLogin,
    };
  });

  const { isLogin } = states;

  const history = useHistory();

  const { match } = props;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(socketAction.loadIdUserSocket());
  }, [dispatch]);

  useEffect(() => {
    if (isLogin.isLogin) {
      document.getElementById("root").classList =
        isLogin.user.darkMode === 0 ? "" : "dark";
    } else {
      history.push(Config.PAGE_LOGIN);
    }
  }, [isLogin, history]);

  return (
    isLogin.isLogin && (
      <div className="w-full dark:bg-dark-main h-screen relative">
        <MainMessenger match={match} />
        <ShowModal />
      </div>
    )
  );
}

export default withRouter(Messenger);
