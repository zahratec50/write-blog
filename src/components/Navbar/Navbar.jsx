import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'

import { IoSearch } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import { BsFillSunFill } from "react-icons/bs";
import { FcAbout } from "react-icons/fc";

import { InfoMenu } from "../infoMenu/InfoMenu";

export default function Navbar() {
  const [theme, setTheme] = useState(false);
  const navigate = useNavigate()
  
  
  return (
    <div className="flex items-center justify-center">
        
      <section className="flex items-center justify-between w-[300px] sm:w-[590px] md:w-[700px] lg:w-[1000px] xl:w-[1100px] pt-2">
        <img src="/../../images/logo.png" alt="logo" className="w-[35px] h-[35px] sm:w-[60px] sm:h-[60px] sm:rounded-xl" />

        <div className="flex items-center justify-start gap-x-2 pr-3 w-[150px] h-8 sm:w-[250px] lg:w-[350px] sm:h-11 bg-gray-200 rounded-full">
          <IoSearch className="w-5 h-5 " />
          <input type="text" placeholder="جستجو در writer ..." className="w-[250px] h-5 pb-2 text-[8px] sm:text-sm font-semibold outline-0" />
        </div>

        <div className="flex items-center justify-center gap-x-1 lg:gap-x-3 w-[140px] sm:w-[175.23px] lg:w-[300px]">
          <div className="cursor-pointer" onClick={() => setTheme((previous) => !previous)}>
            {theme ? <BsFillSunFill className="w-3 h-3 sm:w-6 sm:h-6" /> : <IoMoonOutline className="w-3 h-3 sm:w-6 sm:h-6" />}
          </div>
          <div className="flex items-center justify-center bg-gray-200 rounded-full w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 cursor-pointer">
            <InfoMenu/>
          </div>
          <div className="text-[8px] sm:text-[12px] lg:text-sm">
            <button onClick={() => navigate('/login')}>ورود</button>
            <button onClick={() => navigate('/register')} className="bg-blue-500 hover:bg-blue-600 text-white rounded-full">ثبت نام</button>
          </div>
          
        </div>
      </section>

      
    </div>
  );
}
