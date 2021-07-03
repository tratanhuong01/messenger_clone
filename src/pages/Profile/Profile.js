import React from "react";
import MainProfile from "../../containers/Profile/MainProfile";
import ShowModal from "../../containers/ShowModal/ShowModal";

Profile.propTypes = {};

function Profile(props) {
  return (
    <div className="w-full dark:bg-dark-main h-screen relative">
      <MainProfile />
      <ShowModal />
    </div>
  );
}

export default Profile;
