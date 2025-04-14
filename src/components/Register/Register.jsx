import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const onRegisterForm = () => {
    console.log("register");
  };
  return (
    <div className="flex items-center justify-center  bg-gray-100">
      <section>
        <div className="flex flex-col items-center justify-center gap-y-2 pt-3 mb-14">
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
          <p className="font-bold text-emerald-700">اینجا پر از داستان های قشنگه</p>
        </div>

        <form onSubmit={onRegisterForm}>
          <h3 className="text-balance md:text-2xl text-blue-500 font-bold mb-8">
            فرم ثبت نام
          </h3>
          <div className="grid grid-cols-2 gap-x-2 items-center justify-center">
            <div className="w-[250px] h-[30px] md:w-[500px] md:h-[40px] border-[1px] border-gray-400 rounded-2xl flex items-start justify-start pr-3 mb-2">
              <input
                type="text"
                placeholder="نام و نام خانوادگی "
                className="w-[125px] h-7 pb-2 md:w-[250px] md:h-10 outline-0"
              />
            </div>
            <div className="w-[250px] h-[30px] md:w-[500px] md:h-[40px] border-[1px] border-gray-400 rounded-2xl flex items-start justify-start pr-3 mb-2">
              <input
                type="email"
                placeholder="ایمیل"
                className="w-[125px] h-7 pb-2 md:w-[250px] md:h-10 outline-0"
              />
            </div>
            <div className="w-[250px] h-[30px] md:w-[500px] md:h-[40px] border-[1px] border-gray-400 rounded-2xl flex items-start justify-start pr-3 mb-2">
              <input
                type="number"
                placeholder="شماره موبایل"
                className="w-[125px] h-7 pb-2 md:w-[250px] md:h-10 outline-0"
              />
            </div>

            <div className="w-[250px] h-[30px] md:w-[500px] md:h-[40px] border-[1px] border-gray-400 rounded-2xl flex items-start justify-start pr-3 mb-2">
              <input
                type="file"
                className="w-[125px] h-7 md:w-[250px] md:h-10 outline-0"
              />
            </div>

            <div className="w-[250px] h-[30px] md:w-[500px] md:h-[40px] border-[1px] border-gray-400 rounded-2xl flex items-start justify-start pr-3 mb-2">
              <input
                type="password"
                placeholder="رمز عبور"
                className="w-[125px] h-7 pb-2 md:w-[250px] md:h-10 outline-0"
              />
            </div>
            <div className="w-[250px] h-[30px] md:w-[500px] md:h-[40px] border-[1px] border-gray-400 rounded-2xl flex items-start justify-start pr-3 mb-2">
              <input
                type="password"
                placeholder="تکرار رمز عبور"
                className="w-[125px] h-7 pb-2 md:w-[250px] md:h-10 outline-0"
              />
            </div>
          </div>
          <div className="flex justify-end text-white">
            <button
              type="submit"
              className="mt-5 bg-blue-700 flex items-center justify-center gap-x-2 text-[12px] md:text-[15px] font-semibold rounded-full"
            >
              ثبت نام
            </button>
          </div>
        </form>
        <div className="flex flex-col items-center mt-10">
          <Link to="/" className="text-red-800 hover:text-red-600 mb-2">
            قوانین writer
          </Link>

          <Link
            to="/"
            className="w-[250px] flex items-center justify-center text-sm text-zinc-800 mb-6 border-[1px] py-2 bg-zinc-400 hover:text-zinc-800 hover:bg-zinc-500 rounded-sm"
          >
            ورود با اکانت گوگل
          </Link>
        </div>
      </section>
    </div>
  );
}
