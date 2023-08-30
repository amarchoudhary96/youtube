import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { AiFillHome, AiOutlineLike } from "react-icons/ai";
import { MdOutlineAppShortcut, MdOutlineVideoLibrary } from "react-icons/md";
import { MdOutlineSubscriptions } from "react-icons/md";
import { BsClockHistory } from "react-icons/bs";
import { GoStopwatch } from "react-icons/go";
import { MdOutlineCellTower } from "react-icons/md";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) {
    return null;
  }
  return (
    
      isMenuOpen && 
<div className="py-5 w-48 flex-col items-start fixed top-[10%] left-0 bg-white hidden sm:block">
          <div className="text-[18px]">
            <ul className=" flex flex-col  gap-3">
              <li>
                <Link
                  to="/"
                  className="flex items-center gap-3 text-[15px] pl-2 pr-12 py-2 rounded-lg hover:bg-gray-200 "
                >
                  <AiFillHome className="mr-2 text-[23px]" />
                  Home
                </Link>
              </li>
              <li className="flex items-center gap-3  text-[15px] pl-2 pr-9 py-2 rounded-lg  hover:bg-gray-200">
                <MdOutlineAppShortcut className="mr-2 text-[23px]" />
                Shorts
              </li>
              <li className="flex items-center gap-3  text-[15px]  pl-2 pr-9 py-2 rounded-lg hover:bg-gray-200">
                <MdOutlineSubscriptions className="mr-2 text-[23px]" />
                Vidios
              </li>

              <hr className="w-[200px]" />
              <li className="flex items-center gap-3  text-[15px] pl-2 pr-9 py-2 rounded-lg  hover:bg-gray-200">
                <MdOutlineVideoLibrary className="mr-2 text-[23px]" />
                Library
              </li>
              <li className="flex items-center gap-3  text-[15px] pl-2 pr-9 py-2 rounded-lg  hover:bg-gray-200">
                <BsClockHistory className="mr-2 text-[23px]" />
                History
              </li>
              <li className="flex items-center gap-3  text-[15px] pl-2 pr-9 py-2 rounded-lg  hover:bg-gray-200">
                <MdOutlineSubscriptions className="mr-2 text-[23px]" />
                Your Vidios
              </li>
              <li className="flex items-center gap-3  text-[15px] pl-2 pr-9 py-2 rounded-lg  hover:bg-gray-200">
                <GoStopwatch className="mr-2 text-[23px]" />
                Watched Later
              </li>
              <li className="flex items-center gap-3  text-[15px] pl-2 pr-9 py-2 rounded-lg  hover:bg-gray-200">
                <AiOutlineLike className="mr-2 text-[23px]" />
                Watched Later
              </li>
              <li className="flex items-center gap-3  text-[15px] pl-2 pr-9 py-2 rounded-lg  hover:bg-gray-200">
                <MdOutlineCellTower className="mr-2 text-[23px]" />
                Watched Later
              </li>
              <hr className="w-[200px]" />
            </ul>
          </div>
          <ul></ul>
          <h1 className="font-bold p-5">Watch Later</h1>
          <ul>
            <li>Movies</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
          </ul>
        </div> 
      // ) : (
      //   <div className="py-5 w-14  gap-6 fixed top-[15%] left-[1%] bg-white ">
      //     <ul className="flex flex-col items-center gap-8">
      //       <li  className="text-[10px] py-3 rounded-lg  hover:bg-gray-200 px-4">
      //         <Link
      //           to="/"
               
      //         >
      //           <AiFillHome className="mr-2  text-[23px]" />
      //           Home
      //         </Link>
      //       </li>
      //       <li className="   text-[10px]   py-3 rounded-lg  hover:bg-gray-200 px-4">
      //         <MdOutlineAppShortcut className="mr-2 text-[23px]" />
      //         Shorts
      //       </li>
      //       <li className="   text-[10px] py-3 rounded-lg hover:bg-gray-200 px-4">
      //         <MdOutlineSubscriptions className="mr-2 text-[23px]" />
      //         Vidios
      //       </li>
      //       <li className="text-[10px] flex flex-col items-center justify-center  py-3 rounded-lg  hover:bg-gray-200 px-4">
      //           <MdOutlineSubscriptions className="mr-2 text-[23px]" />
      //           Your Vidios
      //         </li>
      //     </ul>
      //   </div>
      // )}
    
  );
};

export default Sidebar;
