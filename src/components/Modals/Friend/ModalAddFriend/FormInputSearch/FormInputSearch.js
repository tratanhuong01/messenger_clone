import React, { useState } from "react";

FormInputSearch.propTypes = {};

function FormInputSearch(props) {
  const { setSearch } = props;
  const [valueSearch, setValueSearch] = useState("");
  const onChange = (event) => {
    setValueSearch(event.target.value);
    setSearch(event.target.value);
  };
  return (
    <div className="m-2 w-full pl-2 pr-6">
      <label className="w-full text-sm text-gray-700 dark:text-gray-300">
        Nhập email hoặc số điện thoại
      </label>
      <input
        type="text"
        placeholder="Nhập email hoặc số điện thoại..."
        className="w-full py-2 px-3.5 rounded-full border-2 border-solid 
        border-gray-300 shadow-lg my-4 "
        name="valueSearch"
        onChange={onChange}
        value={valueSearch}
      />
      <label className="w-11/12 pl-2 text-red-500 font-semibold">
        Không tìm thấy tài khoản nào
      </label>
    </div>
  );
}

export default FormInputSearch;
