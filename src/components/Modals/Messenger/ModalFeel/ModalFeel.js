import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CloseModal from "../../../UI/CloseModal/CloseModal";
import ItemCategoryModalFeel from "./ItemCategoryModalFeel/ItemCategoryModalFeel";
import ItemModalFeel from "./ItemModalFeel/ItemModalFeel";

function ModalFeel(props) {
  //
  const { data } = props;

  const [current, setCurrent] = useState("All");

  const [dataFeel, setDataFeel] = useState(data);

  const [dataCurrent, setDataCurrent] = useState(dataFeel.listFeel);

  const states = useSelector((state) => {
    return {
      messages: state.messages,
    };
  });

  const { messages } = states;

  useEffect(() => {
    let index = messages.data.findIndex(
      (item) => item.idMessage === dataFeel.message.idMessage
    );
    if (index !== -1)
      setDataFeel({
        listFeel: messages.data[index].feelList,
        message: messages.data[index],
      });
  }, [messages.data, dataFeel]);

  let listFeelDistinct = [];

  dataFeel.listFeel.forEach((element) => {
    let index = listFeelDistinct.findIndex(
      (data) => data.typeFeel === element.typeFeel
    );
    if (index === -1) listFeelDistinct.push(element);
  });

  const showCategoryFeels = listFeelDistinct.map((dataItem, index) => {
    let count = 0;
    dataFeel.listFeel.forEach((element) => {
      if (element.typeFeel === dataItem.typeFeel) count++;
    });
    return (
      <ItemCategoryModalFeel
        current={current}
        type={dataItem.typeFeel}
        value={`${dataItem.iconFeel} ${count}`}
        key={index}
        setCurrent={setCurrent}
        setDataCurrent={setDataCurrent}
        dataFeel={dataFeel}
      />
    );
  });
  const showListFeels = dataCurrent.map((item, index) => {
    return (
      <ItemModalFeel
        item={item}
        key={index}
        message={dataFeel.message}
        dataFeel={dataFeel}
        setDataCurrent={setDataCurrent}
      />
    );
  });

  return (
    <div
      className="w-11/12 fixed top-50per left-50per dark:bg-dark-second transform-translate-50per pb-2 pt-2 
      opacity-100 bg-white z-50 border-2 border-solid border-gray-300 sm:w-4/5 sm:mt-12 lg:w-3/5 xl:w-5/12 
      xl:mt-4 dark:border-dark-main shadow-1 rounded-lg"
    >
      <div className="w-full bg-white dark:bg-dark-second pl-2 pr-4 fixed top-2 block z-10">
        <CloseModal />
        <ul className="w-full flex mb-2">
          <ItemCategoryModalFeel
            type={"All"}
            value="Tất cả"
            current={current}
            dataFeel={dataFeel}
            setCurrent={setCurrent}
            setDataCurrent={setDataCurrent}
          />
          {showCategoryFeels}
        </ul>
      </div>
      <div
        className="w-full dark:bg-dark-second px-2 pt-16 wrapper-content-right overflow-y-auto"
        style={{ maxHeight: "420px", height: "420px" }}
      >
        {showListFeels}
      </div>
    </div>
  );
}

export default ModalFeel;
