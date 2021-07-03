import React from "react";
import { connect } from "react-redux";

ShowModal.propTypes = {};
const mapStateToProps = (state) => {
  return {
    modal: state.modal,
  };
};

function ShowModal(props) {
  const { modal } = props;
  return (
    <div
      className={`w-full bg-black top-0 left-0 z-50 bg-opacity-50 h-screen fixed 
      ${modal.StateModal === true ? "" : "hidden"}`}
    >
      {modal.DataModal}
    </div>
  );
}

export default connect(mapStateToProps)(ShowModal);
