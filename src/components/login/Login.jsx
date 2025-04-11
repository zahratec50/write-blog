import React from "react";

import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Login() {
  const onLoginForm = () => {
    console.log("is login");
  };
  return (
    //! without phone custom
    <div className="flex justify-center w-[1280px] min-h-screen bg-gray-100">
      <section>
        <div className="flex flex-col items-center justify-center gap-y-2 pt-3 mb-20">
          <img
            src="../../images/logo.png"
            alt="logo"
            className="w-[100px] h-[130px]"
          />
          <h2 className="text-4xl font-bold">
            اینجا جایی ست برای تمام نویسندگان
          </h2>
          <h3 className="text-zinc-700 text-xl font-semibold">
            با ساخت حساب کاربری خود به دنیای نویسندگی وارد شو.
          </h3>
        </div>

        <form onSubmit={onLoginForm}>
          <h3 className="text-2xl text-blue-500 font-bold mb-8">
            ورود به حساب کاربری
          </h3>
          <div className="w-[527.6px] h-[50px] border-[1px] border-zinc-400 rounded-2xl flex items-start justify-start pr-3 mb-2">
            <input
              type="text"
              placeholder="نام کاربری یا ایمیل "
              className="w-[250px] h-10"
            />
          </div>
          <div className="w-[527.6px] h-[50px] border-[1px] border-zinc-400 rounded-2xl flex items-start justify-start pr-3">
            <input
              type="password"
              placeholder="رمز عبور"
              className="w-[250px] h-10"
            />
          </div>
          <div className="flex justify-end text-white">
            <button
              type="submit"
              className="mt-5 bg-blue-700 flex items-center justify-center gap-x-2 text-[8px] rounded-full"
            >
              ورود به حساب کار بری
              <IoIosArrowBack />
            </button>
          </div>
        </form>
        <div className="flex flex-col">
          <Link to="/" className="text-red-800 hover:text-red-600 mb-2">
            قوانین writer
          </Link>

          <Link to="/" className="text-sm text-zinc-800 mb-6 border-[1px] py-2 bg-zinc-400 hover:text-zinc-800 hover:bg-zinc-500 rounded-sm">
            ورود با اکانت گوگل
          </Link>

          <Link to="/register" className="text-sm text-zinc-500 hover:text-zinc-700">
            عضو نیستید؟ ثبت نام کنید
          </Link>
        </div>
      </section>
    </div>
  );
}
