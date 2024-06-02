import React from "react";
import { FaBars } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-3 items-center justify-center">
        <img src="./assets/Logo.svg" alt="logo" />
        <button className="bg-gradient-to-r from-amber-500 to-red-400 px-2.5 py-1.5 rounded-xl text-white text-xs">
          Hoster is hiring
        </button>
      </div>
      <div className="hidden font-lato md:flex md:gap-8 md:items-center">
        <ul className="md:flex md:gap-5">
          <li>Plans</li>
          <li>Find Domain</li>
          <li>Why Hoster?</li>
        </ul>
        <div className="md:flex md:gap-5 md:items-center">
          <a href="#">Sign In</a>
          <a href="#" className="md:rounded-md px-3 py-2 bg-blue-400 font-semibold text-white hover:bg-blue-600 ">
            Join Waitlist
          </a>
        </div>
      </div>
      <div className="md:hidden">
        <FaBars />
      </div>
    </div>
  );
};

export default Header;
