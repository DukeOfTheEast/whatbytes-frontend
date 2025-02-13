import Image from "next/image";
import React from "react";
import Billy from "@/Images/0xBilly.png";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-5 border-b-2 fixed top-0 left-0 right-0 h-16 bg-white z-50">
      <h1 className="text-2xl font-extrabold">WhatBytes</h1>
      <div className="flex items-center justify-center gap-1 border-2 p-2 rounded-lg">
        <Image
          src={Billy}
          alt="profile"
          width={300}
          height={300}
          className="w-6 h-6 rounded-full"
        />
        <p>Ukachukwu Ebuka</p>
      </div>
    </div>
  );
};

export default Header;
