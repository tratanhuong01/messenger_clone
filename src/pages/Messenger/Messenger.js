import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory, withRouter } from "react-router-dom";
import * as Config from "../../constants/Config";
import MainMessenger from "../../containers/Messenger/MainMessenger";
import ShowModal from "../../containers/ShowModal/ShowModal";

Messenger.propTypes = {};

const mapStateToProps = (state) => {
  return {
    isLogin: state.isLogin,
  };
};

function Messenger(props) {
  const history = useHistory();
  const { isLogin, match } = props;
  useEffect(() => {
    if (isLogin.isLogin) {
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
    <div className="w-full dark:bg-dark-main h-screen relative">
      <MainMessenger match={match} />
      <ShowModal />
    </div>
  );
}

export default connect(mapStateToProps, null)(withRouter(Messenger));
