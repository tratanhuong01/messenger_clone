import React from "react";

SendIconControl.propTypes = {};

function SendIconControl(props) {
  const { item } = props;
  return (
    <div className="w-12 pt-1 zoom flex jusitfy-center">
      <span className="cursor-pointer zoom text-xl flex items-center mb-2">
        {item[0].iconChat}
      </span>
    </div>
  );
}

export default SendIconControl;
