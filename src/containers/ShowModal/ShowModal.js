import React, { Component } from "react";
import ModalRegister from "../../components/Modals/Login/ModalRegister/ModalRegister";
class ShowModal extends Component {
  render() {
    return (
      <div className="w-full bg-black top-0 left-0 z-50 bg-opacity-50 h-screen fixed">
        <ModalRegister />
      </div>
    );
  }
}

export default ShowModal;
