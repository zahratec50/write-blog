import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FcAbout } from "react-icons/fc";
import { FaBalanceScale } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { PiPhoneCallLight } from "react-icons/pi";
import { ImMap } from "react-icons/im";
import { LiaQuestionSolid } from "react-icons/lia";
import { TbReportAnalytics } from "react-icons/tb";

export function InfoMenu() {
  return (
    <DropdownMenu dir="rtl">
      <DropdownMenuTrigger asChild>
        <div className="flex items-center justify-center bg-gray-200 rounded-full w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 cursor-pointer">
          <FcAbout className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[250px] sm:w-[350px]">
        <div>
          <DropdownMenuItem className=" text-sm text-zinc-800 font-semibold mt-3">
            <div className="flex items-center justify-center gap-x-2">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                <FaBalanceScale className="w-6 h-6 text-zinc-400" />
              </div>

              <div className="flex flex-col pr-3 gap-x-1">
                قوانین
                <span className="text-[10px] text-zinc-400 pt-2">
                  شرایط و مقررات استفاده از writer
                </span>
              </div>
            </div>
          </DropdownMenuItem>

          <DropdownMenuItem className=" text-sm text-zinc-800 font-semibold mt-3">
            <div className="flex items-center justify-center gap-x-2">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                <MdSecurity className="text-zinc-400" />
              </div>
              <div className="flex flex-col pr-3 gap-x-1">
                حریم خصوصی
                <span className="text-[10px] text-zinc-400 pt-2">
                  حریم خصوصی کاربران
                </span>
              </div>
            </div>
          </DropdownMenuItem>

          <DropdownMenuItem className=" text-sm text-zinc-800 font-semibold mt-3">
            <div className="flex items-center justify-center gap-x-2">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                <PiPhoneCallLight className="text-zinc-400" />
              </div>
              <div className="flex flex-col pr-3 gap-x-1">
                تماس با ما
                <span className="text-[10px] text-zinc-400 pt-2">
                  پیام خود را به ما برسانید.
                </span>
              </div>
            </div>
          </DropdownMenuItem>

          <DropdownMenuItem className=" text-sm text-zinc-800 font-semibold mt-3">
            <div className="flex items-center justify-center gap-x-2">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                <ImMap className="text-zinc-400 " />
              </div>
              <div className="flex flex-col pr-3 gap-x-1">
                نقشه راه
                <span className="text-[10px] text-zinc-400 pt-2">
                  نقشه راه writer
                </span>
              </div>
            </div>
          </DropdownMenuItem>

          <DropdownMenuItem className="text-sm text-zinc-800 font-semibold mt-3">
            <div className="flex items-center justify-center gap-x-2">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                <LiaQuestionSolid className="text-zinc-400" />
              </div>
              <div className="flex flex-col pr-3 gap-x-1">
                writer چیه؟
                <span className="text-[10px] text-zinc-400 pt-2">
                  writer قرار است به شما کمک کند و همراهتان باشد.
                </span>
              </div>
            </div>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className=" text-sm text-blue-800 font-semibold mb-2 mt-3">
            <div className="flex items-center justify-center gap-x-2">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                <TbReportAnalytics className="w-6 h-6 text-blue-700" />
              </div>
              <div className="flex flex-col pr-3 gap-x-1">
                writer برای ناشرها
                <span className="text-[10px] text-blue-700 pt-2">
                  ما چه کمکی به ناشر ها می کنیم؟
                </span>
              </div>
            </div>
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
