import React from "react";

import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Login() {
  const onLoginForm = () => {
    console.log("is login");
  };
  return (
    <div className="flex justify-center w-[414px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1536px] min-h-screen bg-gray-100">
      <section>
        <div className="flex flex-col items-center justify-center gap-y-2 pt-3 mb-20">
          <img
            src="../../images/logo.png"
            alt="logo"
            className="w-[100px] h-[130px]"
          />
          <h2 className="text-xl md:text-4xl font-bold">
            اینجا جایی ست برای تمام نویسندگان
          </h2>
          <h3 className="text-zinc-700 text-sm md:text-xl font-semibold">
            با ساخت حساب کاربری خود به دنیای نویسندگی وارد شو.
          </h3>
        </div>

        <form onSubmit={onLoginForm}>
          <h3 className="text-balance md:text-2xl text-blue-500 font-bold mb-8">
            ورود به حساب کاربری
          </h3>
          <div className="flex flex-col items-center justify-center">
            <div className="w-[250px] h-[25px] md:w-[527.6px] md:h-[50px] border-[1px] border-zinc-400 rounded-2xl flex items-start justify-start pr-3 mb-2">
              <input
                type="text"
                placeholder="نام کاربری یا ایمیل "
                className="w-[125px] h-5 md:w-[250px] md:h-10 outline-0"
              />
            </div>
            <div className="w-[250px] h-[25px] md:w-[527.6px] md:h-[50px] border-[1px] border-zinc-400 rounded-2xl flex items-start justify-start pr-3">
              <input
                type="password"
                placeholder="رمز عبور"
                className="w-[125px] h-5 md:w-[250px] md:h-10 outline-0"
              />
            </div>
          </div>

          <div className="flex justify-end text-white">
            <button
              type="submit"
              className="mt-5 bg-blue-700 flex items-center justify-center gap-x-2 text-[10px] md:text-[15px] font-semibold rounded-full"
            >
              ورود به حساب کاربری
              <IoIosArrowBack />
            </button>
          </div>
        </form>
        <div className="flex flex-col items-center mt-10">
          <Link to="/" className="text-red-800 hover:text-red-600 mb-2">
            قوانین writer
          </Link>

          <Link
            to="/"
            className="w-full text-sm text-zinc-800 mb-6 border-[1px] py-2 bg-zinc-400 hover:text-zinc-800 hover:bg-zinc-500 rounded-sm"
          >
            ورود با اکانت گوگل
          </Link>

          <Link
            to="/register"
            className="text-sm text-zinc-500 hover:text-zinc-700 w-[200px]"
          >
            عضو نیستید؟ ثبت نام کنید
          </Link>
        </div>
      </section>
    </div>
  );
}
