import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory, withRouter } from "react-router-dom";
import * as Config from "../../constants/Config";
import MainMessenger from "../../containers/Messenger/MainMessenger";
import ShowModal from "../../containers/ShowModal/ShowModal";

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

  useEffect(() => {
    if (isLogin.isLogin) {
      document.getElementById("root").classList =
        isLogin.user.darkMode === 0 ? "" : "dark";
      history.push(
        Config.PAGE_MESSENGER +
          (typeof match.params.slug === "undefined"
            ? ""
            : "/" + match.params.slug)
      );
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
