import React, { useState } from "react";
import CloseModal from "../../../UI/CloseModal/CloseModal";
import { useForm } from "react-hook-form";
import * as Config from "../../../../constants/Config";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import * as usersAction from "../../../../actions/users/index";
import LoadingSubmitModal from "../../General/LoadingSubmitModal";

function ModalRegister(props) {
  //
  const states = useSelector((state) => {
    return {
      loading: state.loading,
    };
  });

  const { loading } = states;

  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Họ không được để trống !!"),
    lastName: Yup.string().required("Tên không được để trống !!"),
    emailOrPhone: Yup.string().required(
      "Email hoặc số điện thoại không được để trống !!"
    ),
    emailAgain: Yup.string().oneOf(
      [Yup.ref("emailOrPhone"), null],
      "Email phải giống với email trên !!"
    ),
    birthday: Yup.date()
      .nullable("Phải chọn ngày sinh đúng định dạng !!")
      .required("Phải chọn ngày sinh đúng định dạng !!"),
    password: Yup.string()
      .min(6, "Mật khẩu phải tối đa 6 kí tự !!")
      .required("Mật khẩu không được để trống !!"),
    sex: Yup.string()
      .required("Phải chọn giới tính !!")
      .nullable("Phải chọn giới tính !!"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const [stateEmailAgain, setStateEmailAgain] = useState(false);

  const checkIsEmail = (event) => {
    if (Config.REGEX_EMAIL.test(event.target.value)) setStateEmailAgain(true);
  };

  const onHandleSubmit = (user) => {
    dispatch(usersAction.registerAccountRequest(user));
  };

  return (
    <div
      style={{ height: "600px" }}
      className={` wrapper-scrollbar w-11/12 fixed top-1/2 left-1/2 transform 
      -translate-x-1/2 -translate-y-1/2 opacity-100 bg-white z-50 border-2 border-solid 
      border-gray-300 pl-6 sm:w-11/12 sm:mt-12 lg:w-4/5 xl:w-1/3 xl:mt-4 
      ${
        loading.loadingSubmit === true ? "overflow-hidden" : "overflow-x-auto"
      }`}
    >
      <div className="w-full h-full relative z-50">
        <CloseModal />
        {loading.loadingSubmit === true ? <LoadingSubmitModal /> : ""}
        <h1 className="py-2.5 text-3xl font-semibold">Đăng Kí</h1>

        <p className="pb-2.5">Nhanh Chóng Dễ Dàng</p>
        <hr />
        <br />
        <form onSubmit={handleSubmit(onHandleSubmit)}>
          <div className="w-full flex">
            <input
              type="text"
              name="firstName"
              className={`input_register w-47per p-2 rounded-lg border-2 border-solid  ${
                errors.firstName
                  ? " border-red-500 text-red-500"
                  : " border-gray-300 "
              } `}
              placeholder="Họ"
              {...register("firstName")}
            />
            &nbsp;
            <input
              type="text"
              name="lastName"
              className={`input_register w-47per p-2 rounded-lg border-2 border-solid  ${
                errors.lastName
                  ? " border-red-500 text-red-500"
                  : " border-gray-300 "
              } `}
              placeholder="Tên"
              {...register("lastName")}
            />
          </div>
          <div className="w-full flex">
            <ul className="w-1/2 mb-2.5 mt-2.5 ">
              <li className="w-full text-red-500 font-semibold value_error">
                {errors.firstName ? errors.firstName.message : ""}
              </li>
            </ul>
            <ul className="w-1/2 mb-2.5 mt-2.5 ">
              <li className="w-full text-red-500 font-semibold value_error">
                {errors.lastName ? errors.lastName.message : ""}
              </li>
            </ul>
          </div>
          <div className="w-full">
            <input
              type="text"
              name="emailOrPhone"
              className={`input_register w-96per p-2 rounded-lg border-2 border-solid  ${
                errors.emailOrPhone
                  ? " border-red-500 text-red-500"
                  : " border-gray-300 "
              } `}
              placeholder="Số Di Động Hoặc Email"
              {...register("emailOrPhone")}
              onChange={checkIsEmail}
            />
          </div>
          <ul className="w-full mb-4 mt-4">
            <li className="w-full text-red-500 font-semibold value_error">
              {errors.emailOrPhone ? errors.emailOrPhone.message : ""}
            </li>
          </ul>
          {stateEmailAgain === true ? (
            <div className="w-full email_again_one mb-4">
              <input
                type="text"
                name="emailAgain"
                className={`input_register w-96per p-2 rounded-lg border-2 border-solid  ${
                  errors.emailAgain
                    ? " border-red-500 text-red-500"
                    : " border-gray-300 "
                } `}
                placeholder="Nhập Lại Email"
                {...register("emailAgain")}
              />
              <ul className="w-full">
                <li className="w-full text-red-500 font-semibold value_error mt-4 mb-4">
                  {errors.emailAgain ? errors.emailAgain.message : ""}
                </li>
              </ul>
            </div>
          ) : (
            ""
          )}
          <div className="w-full">
            <input
              type="password"
              name="password"
              className={`input_register w-96per p-2 rounded-lg border-2 border-solid  ${
                errors.password
                  ? " border-red-500 text-red-500"
                  : " border-gray-300 "
              } `}
              placeholder="Mật Khẩu Mới"
              {...register("password")}
              autoComplete="on"
            />
          </div>
          <ul className="w-full mb-4 mt-4">
            <li className="w-full text-red-500 font-semibold value_error ">
              {errors.password ? errors.password.message : ""}
            </li>
          </ul>
          <div className="form_4">
            <p className="pb-4">
              <b className="text-sm">Ngày Sinh</b>
            </p>
            <input
              type="date"
              name="birthday"
              className="w-96per border-2 border-solid border-gray-200 p-2 font-semibold"
              {...register("birthday")}
            />
          </div>
          <ul className="w-full mb-4 mt-4">
            <li className="w-full text-red-500 font-semibold value_error ">
              {errors.birthday ? errors.birthday.message : ""}
            </li>
          </ul>
          <div className="w-full mb-2.5 mt-2.5">
            <p className="block">
              <b className="text-sm">Giới Tính</b>
            </p>
            <div className="w-full flex mb-2.5">
              <div
                className="mt-2.5 w-30per mr-4 p-2 border-gray-300 
                  border-solid border-1"
              >
                <label className="mr-16">
                  <b>Nam</b>
                </label>
                <input
                  type="radio"
                  name="sex"
                  value="Nam"
                  {...register("sex")}
                />
              </div>
              <div
                className="mt-2.5 w-30per mr-4 p-2 border-gray-300 
                  border-solid border-1"
              >
                <label className="mr-16">
                  <b>Nữ</b>
                </label>
                <input
                  type="radio"
                  name="sex"
                  value="Nữ"
                  {...register("sex")}
                />
              </div>
              <div
                className="mt-2.5 w-30per mr-4 p-2 border-gray-300 
                  border-solid border-1"
              >
                <label className="mr-16">
                  <b>Khác</b>
                </label>
                <input
                  type="radio"
                  name="sex"
                  value="Khác"
                  {...register("sex")}
                />
              </div>
            </div>
          </div>
          <div className="form_5">
            <p style={{ fontSize: "14px", color: "#737373" }}>
              Bằng cách nhấp vào Đăng ký, bạn đồng ý với
              <span style={{ color: "#385989" }}>
                {" "}
                Điều khoản, Chính sách dữ liệu
              </span>{" "}
              và <span style={{ color: "#385989" }}>Chính sách cookie</span> của
              chúng tôi. Bạn có thể nhận được thông báo của chúng tôi qua SMS và
              hủy nhận bất kỳ lúc nào.
            </p>
          </div>
          <ul className="w-full mb-4 mt-4">
            <li className="w-full text-red-500 font-semibold value_error ">
              {errors.sex ? errors.sex.message : ""}
            </li>
          </ul>
          <div className="form_5 text-center p-4">
            <button
              type="submit"
              className="text-xl w-1/2 p-2.5 border rounded-lg 
              text-white cursor-pointer bg-green-500"
              style={{ backgroundColor: "#00a400" }}
            >
              Đăng Kí
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalRegister;
