import React from "react";
import ItemMemberTag from "../ItemMemberTag/ItemMemberTag";

MainItemMemberTag.propTypes = {};

function MainItemMemberTag(props) {
  return (
    <div className="w-auto flex flex-wrap max-h-32">
      <ItemMemberTag />
      <ItemMemberTag />
      <ItemMemberTag />
      <div className="py-2 px-4" contentEditable></div>
    </div>
  );
}

export default MainItemMemberTag;
