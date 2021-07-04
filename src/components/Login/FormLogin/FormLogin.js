import React from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { connect } from "react-redux";
import * as usersAction from "../../../actions/users/index";

FormLogin.propTypes = {};

const mapDispatchToProps = (dispatch, props) => {
  return {
    loginAccountRequest: (user) => {
      dispatch(usersAction.loginAccountRequest(user));
    },
  };
};

function FormLogin(props) {
  const { loginAccountRequest } = props;
  const validationSchema = Yup.object().shape({
    emailOrPhone: Yup.string().required(
      "Email hoặc số điện thoại không được để trống !!"
    ),
    password: Yup.string().required("Mật khẩu không được để trống !!"),
  });
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const onHandleSubmit = (user) => {
    loginAccountRequest(user);
  };
  return (
    <form className="w-full bg-white" onSubmit={handleSubmit(onHandleSubmit)}>
      <input
        type="text"
        name="emailOrPhone"
        placeholder="Email Hoặc Số Điện Thoại"
        className={`w-96per p-3 m-2.5 rounded-lg border-2 border-solid  
        ${
          errors.emailOrPhone
            ? "border-red-500 text-red-500"
            : "border-gray-200 "
        }`}
        {...register("emailOrPhone")}
      />
      <p className="py-2 text-left pl-3 font-semibold text-red-600">
        {errors.emailOrPhone ? errors.emailOrPhone.message : ""}
      </p>
      <input
        type="password"
        name="password"
        placeholder="Mật Khẩu"
        className={`w-96per p-3 m-2.5 rounded-lg border-2 border-solid  
        ${
          errors.password ? "border-red-500 text-red-500" : "border-gray-200 "
        }`}
        {...register("password")}
        autoComplete="on"
      />
      <p className="py-2 text-left pl-3 font-semibold text-red-600">
        {errors.password ? errors.password.message : ""}
      </p>
      <button
        className="mx-auto ml-2 w-93per p-3 my-2.5 border-none rounded-lg bg-1877F2 text-sm text-white font-semibold"
        type="submit"
      >
        Đăng Nhập
      </button>
      <p className="text-1877F2 bg-white p-4 bg-white cursor-pointer">
        Quên Tài khoản
      </p>
    </form>
  );
}

export default connect(null, mapDispatchToProps)(FormLogin);
