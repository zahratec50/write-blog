import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

import { FcGoogle } from "react-icons/fc";

import { db } from "../firebase/firebase";
import { push, ref } from "firebase/database";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phon: "",
    password: "",
    repeatPassword: "",
    img: "",
  });

  const changeValueInputRegister = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onRegisterForm = (event) => {
    event.preventDefault();

    const usersRef = ref(db, "users");
    push(usersRef, formData).then(() => {
      Swal.fire({
        title: "ثبت نام با موفقیت انجام شد!",
        icon: "success",
      });
      setFormData({
        name: "",
        email: "",
        phon: "",
        password: "",
        repeatPassword: "",
        img: "",
      });
    }).catch(()=> {
      Swal.fire({
        title: "خطا در ثبت نام! دوباره تلاش کنید",
        icon: "error",
      });
    })
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
          <h3 className="text-green-700 text-sm md:text-xl font-semibold">
            در رویا غرق شو
          </h3>
        </div>

        <form onSubmit={onRegisterForm}>
          <h3 className="text-balance md:text-2xl text-blue-500 font-bold mb-8">
            فرم ثبت نام
          </h3>
          <div className="grid grid-cols-2 gap-x-4 items-center justify-center">
            <div className="flex flex-col gap-y-2">
              <label htmlFor="name" className="font-bold">
                نام و نام خانوادگی
              </label>
              <div className="w-[250px] h-[30px] md:w-[500px] md:h-[40px] shadow-zinc-200 bg-white shadow-xl border-x-[1px] border-zinc-400 rounded-sm flex items-start justify-start pr-3 mb-2">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-[200px] h-7 md:w-[400px] md:h-9 outline-0 px-2"
                  value={formData.name}
                  onChange={changeValueInputRegister}
                />
              </div>
            </div>

            <div className="flex flex-col gap-y-2">
              <label htmlFor="email" className="font-bold">
                ایمیل
              </label>
              <div className="w-[250px] h-[30px] md:w-[500px] md:h-[40px] shadow-zinc-200 bg-white shadow-xl border-x-[1px] border-zinc-400 rounded-sm flex items-start justify-start pr-3 mb-2">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-[250px] h-7 md:w-[500px] md:h-10 outline-0 px-2"
                  value={formData.email}
                  onChange={changeValueInputRegister}
                />
              </div>
            </div>

            <div className="flex flex-col gap-y-2">
              <label htmlFor="phon" className="font-bold">
                موبایل
              </label>
              <div className="w-[250px] h-[30px] md:w-[500px] md:h-[40px] shadow-zinc-200 bg-white shadow-xl border-x-[1px] border-zinc-400 rounded-sm flex items-start justify-start pr-3 mb-2">
                <input
                  type="tel"
                  id="phon"
                  name="phon"
                  className="w-[250px] h-7 md:w-[500px] md:h-10 outline-0 px-2"
                  value={formData.phon}
                  onChange={changeValueInputRegister}
                />
              </div>
            </div>

            <div className="flex flex-col gap-y-2">
              <label htmlFor="img" className="font-bold">
                عکس
              </label>
              <div className="w-[250px] h-[30px] md:w-[500px] md:h-[40px] shadow-zinc-200 bg-white shadow-xl border-x-[1px] border-zinc-400 rounded-sm flex items-start justify-start pr-3 mb-2">
                <input
                  type="file"
                  id="img"
                  name="img"
                  className="w-[250px] h-7 md:w-[500px] md:h-10 outline-0 px-2"
                  value={formData.img}
                  onChange={changeValueInputRegister}
                />
              </div>
            </div>

            <div className="flex flex-col gap-y-2">
              <label htmlFor="password" className="font-bold">
                رمز عبور
              </label>
              <div className="w-[250px] h-[30px] md:w-[500px] md:h-[40px] shadow-zinc-200 bg-white shadow-xl border-x-[1px] border-zinc-400 rounded-sm flex items-start justify-start pr-3 mb-2">
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-[250px] h-7  md:w-[500px] md:h-10 outline-0 px-2"
                  value={formData.password}
                  onChange={changeValueInputRegister}
                />
              </div>
            </div>

            <div className="flex flex-col gap-y-2">
              <label htmlFor="repeatPassword" className="font-bold">
                تکرار رمز عبور
              </label>
              <div className="w-[250px] h-[30px] md:w-[500px] md:h-[40px] shadow-zinc-200 bg-white shadow-xl border-x-[1px] border-zinc-400 rounded-sm flex items-start justify-start pr-3 mb-2">
                <input
                  type="password"
                  id="repeatPassword"
                  name="repeatPassword"
                  className="w-[250px] h-7 md:w-[500px] md:h-10 outline-0 px-2"
                  value={formData.repeatPassword}
                  onChange={changeValueInputRegister}
                />
              </div>
            </div>
          </div>
          <p className="flex items-center justify-end gap-x-2">
            <Link to="/" className="text-gray-600 hover:text-gray-800 mb-2">
              با قوانین writer موافقم
            </Link>
            <input type="checkbox" className="w-4 h-4" />
          </p>
          <div className="flex flex-col items-center justify-self-end text-white">
            <button
              type="submit"
              className="mt-5 bg-blue-700 flex items-center justify-center gap-x-2 text-[12px] md:text-[15px] font-semibold rounded-full"
            >
              ثبت نام
            </button>
          </div>
          <div className="flex flex-col items-center">
            <Link
              to="/"
              className="w-[250px] flex items-center justify-around text-sm text-zinc-600 font-semibold border-[1px] py-2 bg-zinc-200 hover:text-zinc-800 hover:bg-zinc-300 rounded-sm"
            >
              ورود با اکانت گوگل
              <FcGoogle className="w-6 h-6 " />
            </Link>
          </div>
        </form>
      </section>
    </div>
  );
}
