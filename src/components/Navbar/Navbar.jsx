import React, { useState } from "react";
import { Link } from 'react-router-dom'

import { IoSearch } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import { BsFillSunFill } from "react-icons/bs";
import { FcAbout } from "react-icons/fc";

export default function Navbar() {
  const [theme, setTheme] = useState(false);
  return (
    <div>
        // TODO: without mobile responsive
      <section className="flex items-center justify-around md:w-[700px] lg:[1000px] xl:w-[1100px]">
        <img src="/../../images/logo.png" alt="logo" className="w-[60px] h-[60px] rounded-xl" />

        <div className="flex items-center justify-start gap-x-2 pr-3 w-[350px] h-11 bg-gray-200 rounded-full">
          <IoSearch className="w-5 h-5 " />
          <input type="text" placeholder="جستجو در writer ..." className="w-[300px] h-11 pb-2 text-sm font-semibold outline-0" />
        </div>

        <div className="flex items-center justify-center gap-x-3">
          <div onClick={() => setTheme((previous) => !previous)}>
            {theme ? <BsFillSunFill className="w-6 h-6" /> : <IoMoonOutline className="w-6 h-6" />}
          </div>
          <div className="flex items-center justify-center bg-gray-200 rounded-full w-8 h-8">
            <FcAbout className="w-6 h-6"/>
          </div>
          <div className="text-sm">
            <button>ورود</button>
            <button className="bg-blue-500 text-white rounded-full">ثبت نام</button>
          </div>
          
        </div>
      </section>
    </div>
  );
}
