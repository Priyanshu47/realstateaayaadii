import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo/aayadi.png";

export const Header = () => {
  return (
    <div className="text-white bg-[#a8824f] flex items-center justify-between px-8">
      <div className="logo">
        <img src={Logo} className="h-16 w-16" alt="" />
      </div>
      <div className="space-x-7">
        <Link to="/">Home</Link>
        <Link to="/property">Properties</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};
