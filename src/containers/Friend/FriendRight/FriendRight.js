import React, { useEffect } from "react";
import LoadingRight from "../../../components/UI/LoadingRight/LoadingRight";
import * as contentRightAction from "../../../actions/contentRight/index";
import { useDispatch, useSelector } from "react-redux";

function FriendRight(props) {
  //
  const states = useSelector((state) => {
    return {
      contentRight: state.contentRight,
      isLogin: state.isLogin,
    };
  });

  const { contentRight, isLogin } = states;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contentRightAction.loadListInviteFriendRequest(isLogin.user.id));
  }, [dispatch, isLogin]);

  return (
    <div className="w-full md:w-7/12 xl:w-3/4 h-full">
      {contentRight.loading ? <LoadingRight /> : contentRight.content}
    </div>
  );
}

export default FriendRight;
