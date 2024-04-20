import React from "react";
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center justify-center gap-2">
        <img src="/public/assets/logo.svg" alt="logo" className="w-20 h-20 lg:w-35 lg:h-35" />
        <button className="bg-gradient-to-r from-orange-400 to-red-400 text-xs text-white px-2.5 py-1.5 rounded-2xl">Spotify is hiring</button>
      </div>
      <ul className="hidden lg:flex justify-between items-center font-Lato text-gray-500 gap-6">
        <li><a href="#">Premium</a></li>
        <li><a href="#">Community</a></li>
        <li><a href="#">Why Spotify?</a></li>
      </ul>
      <div className="hidden lg:flex justify-between items-center font-Lato text-gray-500 gap-6">
        <a className="text-white" href="#">Sign In</a>
        <button className="rounded-md px-4 py-3 bg-green-400 hover:bg-green-600 text-black">Join Waitlist</button>
      </div>
      <div className="flex items-center justify-center lg:hidden">
        <FaBars className="text-white w-6 h-6" />
      </div>
    </div>
  );
};

export default Header;
