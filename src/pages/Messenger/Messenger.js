import React, { useEffect, useState } from "react";
import MessengerLeft from "../../containers/Messenger/MessengerLeft/MessengerLeft";
import MessengerRight from "../../containers/Messenger/MessengerRight/MessengerRight";
import Header from "../../components/Header/Header";
import { useHistory, withRouter } from "react-router-dom";
import * as Config from "../../constants/Config";

Messenger.propTypes = {};
function getHeightContent() {
  let heightHeader = document.getElementById("header").offsetHeight;
  let heightWindow = window.outerHeight;
  return heightWindow - heightHeader;
}
function Messenger(props) {
  let history = useHistory();
  const [heightContent, setHeightContent] = useState(0);

  useEffect(() => {
    if (localStorage && localStorage.getItem("user")) {
      history.push(Config.PAGE_MESSENGER);
      setHeightContent(getHeightContent());
    } else {
      history.push(Config.PAGE_LOGIN);
    }
  }, []);
  return (
    <div className="w-full dark:bg-dark-main bg-white h-screen relative overflow-hidden">
      {localStorage && localStorage.getItem("user") ? (
        <>
          <Header id="header" />
          <div
            className="w-full flex pt-16 z-10 bg-white dark:bg-dark-main lg:w-full 
            lg:mx-auto xl:w-full"
            style={{
              maxHeight: `${heightContent}px`,
              height: `${heightContent}px`,
            }}
          >
            <MessengerLeft heightContent={heightContent} />
            <MessengerRight />
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default withRouter(Messenger);
