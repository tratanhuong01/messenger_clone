import React from "react";
import FooterLogin from "./FooterLogin/FooterLogin";
import LeftLogin from "./LeftLogin/LeftLogin";
import RightLogin from "./RightLogin/RightLogin";

MainLogin.propTypes = {};

function MainLogin(props) {
  return (
    <div className="w-full mx-auto sm:w-full md:w-full lg:w-full xl:w-3/4 2xl:w-3/4">
      <LeftLogin />
      <RightLogin />
      <FooterLogin />
    </div>
  );
}

export default MainLogin;
