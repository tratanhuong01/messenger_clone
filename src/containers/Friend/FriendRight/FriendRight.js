import React, { useEffect } from "react";
import { connect } from "react-redux";
import LoadingRight from "../../../components/UI/LoadingRight/LoadingRight";
import * as contentRightAction from "../../../actions/contentRight/index";

FriendRight.propTypes = {};

const mapStateToProps = (state) => {
  return {
    contentRight: state.contentRight,
    isLogin: state.isLogin,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    loadListInviteFriendRequest: (id) => {
      dispatch(contentRightAction.loadListInviteFriendRequest(id));
    },
  };
};

function FriendRight(props) {
  const { contentRight, isLogin, loadListInviteFriendRequest } = props;
  useEffect(() => {
    loadListInviteFriendRequest(isLogin.user.id);
  }, [loadListInviteFriendRequest, isLogin]);
  return (
    <div className="w-full md:w-7/12 xl:w-3/4 h-full">
      {contentRight.loading ? <LoadingRight /> : contentRight.content}
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendRight);
