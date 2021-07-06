import React from "react";
import ItemFriendInvite from "../../../../components/Friend/FriendRight/ListFriendInvite/ItemFriendInvite/ItemFriendInvite";
import FriendLeftList from "../../../../components/Friend/FriendLeft/FriendLeftList/FriendLeftList";
import { connect } from "react-redux";

ListFriendInvite.propTypes = {};

const mapStateToProps = (state) => {
  return {
    contentRight: state.contentRight,
  };
};

function ListFriendInvite(props) {
  const { contentRight } = props;
  const showItemFriendInvite = contentRight.list.map((item, index) => {
    return <ItemFriendInvite item={item} key={index} />;
  });
  return (
    <>
      <div className="w-full flex cursor-pointer hover:bg-gray-200">
        <FriendLeftList
          label="Danh sách lời mời"
          icon="bx bx-user-plus"
          bgColor="bg-green-500"
        />
      </div>
      <div className="w-full bg-gray-100 dark:bg-dark-main p-6 h-full">
        <p className="font-semibold mb-4 ml-8 w-full dark:text-gray-300">
          Lời mời kết bạn ({contentRight.list.length}){" "}
        </p>
        <div
          className="flex flex-wrap justify-center overflow-y-auto"
          style={{ maxHeight: "540px" }}
        >
          {showItemFriendInvite}
        </div>
      </div>
    </>
  );
}

export default connect(mapStateToProps, null)(ListFriendInvite);
