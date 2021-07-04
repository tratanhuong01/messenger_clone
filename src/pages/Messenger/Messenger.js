import React, { useEffect } from "react";
import { useHistory, withRouter } from "react-router-dom";
import * as Config from "../../constants/Config";
import MainMessenger from "../../containers/Messenger/MainMessenger";
import ShowModal from "../../containers/ShowModal/ShowModal";

Messenger.propTypes = {};

function Messenger(props) {
  let history = useHistory();
  useEffect(() => {
    if (localStorage && localStorage.getItem("user")) {
      history.push(Config.PAGE_MESSENGER);
    } else {
      history.push(Config.PAGE_LOGIN);
    }
  }, [history]);
  return (
    <div className="w-full dark:bg-dark-main h-screen relative">
      <MainMessenger />
      <ShowModal />
    </div>
  );
}

export default withRouter(Messenger);
