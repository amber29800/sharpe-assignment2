import React from "react";

const Header = () => {
  return (
    <nav className="flex w-full h-20 bg-[#0b101f] items-center text-[12px]">
      <div className="flex items-center bg-gray-800 h-7 rounded-xl ml-16">
        <div className="w-20 h-full flex items-center justify-center text-black text-[12px] bg-white rounded-xl">Open</div>
        <div className="w-20 flex items-center justify-center text-white text-[12px] ">Close</div>
        <div className="w-20 flex items-center justify-center text-white text-[12px]">Boost</div>
      </div>
    </nav>
  );
};

export default Header;
