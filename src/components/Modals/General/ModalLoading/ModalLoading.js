import React from "react";
import { closeModal } from "../../../../actions/modals";

ModalLoading.propTypes = {};

function ModalLoading(props) {
  return (
    <div
      class="animate__rubberBand  shadow-sm border border-solid border-gray-500 py-3 pl-1.5 pr-1.5 pt-0
        bg-white w-full fixed z-50 top-1/2 left-1/2 dark:bg-dark-second rounded-lg 
        sm:w-10/12 md:w-2/3 lg:w-2/3 xl:w-1/3"
    >
      <div class="w-full text-center">
        <div class="w-4/12 mx-auto py-1.5 my-6 rounded-lg bg-gray-300 linear-background dark:linear-background"></div>
        <closeModal />
        <hr />
      </div>
      <div
        class="w-full dark:bg-dark-second wrapper-content-right 
        overflow-y-auto relative h-80 max-h-80"
      >
        <div class="w-full absolute top-0">
          <div
            class="w-8/12 mx-auto bg-gray-300 py-1.5 my-6 rounded-lg linear-background 
              dark:linear-background"
          ></div>
          <div
            class="w-5/12 mx-auto bg-gray-300 py-1.5 my-6 rounded-lg linear-background 
              dark:linear-background"
          ></div>
        </div>
        <div class="w-full absolute bottom-0">
          <div
            class="w-5/12 mx-auto bg-gray-300 py-1.5 my-6 rounded-lg linear-background 
              dark:linear-background"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default ModalLoading;
