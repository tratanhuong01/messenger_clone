import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory, withRouter } from "react-router-dom";
import MainFriend from "../../containers/Friend/MainFriend";
import ShowModal from "../../containers/ShowModal/ShowModal";
import * as Config from "../../constants/Config";

Friend.propTypes = {};

const mapStateToProps = (state) => {
  return {
    isLogin: state.isLogin,
  };
};

function Friend(props) {
  const history = useHistory();
  const { isLogin } = props;
  useEffect(() => {
    if (isLogin.isLogin) {
      history.push(Config.PAGE_FRIEND);
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

export default connect(mapStateToProps, null)(withRouter(Friend));
