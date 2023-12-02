import React from "react";
import { Link } from "react-router-dom";
import { BsWhatsapp } from "react-icons/bs";

export const PreHeader = () => {
  return (
    // <div className="pre_head">
    //   <i className="fa fa-envelope-o" aria-hidden="true"></i>
    //   <Link to="">abcdxyz@gmail.com</Link>
    //   <i className="fa fa-whatsapp text-[15px]" aria-hidden="true"></i>
    //   <Link to="">8787656333</Link>
    // </div>
    <div className="bg-[#bf9b30] pl-5 p-1 text-sm flex items-center text-white">
      <div>
        <i className="fa fa-envelope-o text-red-600" aria-hidden="true"></i>
        <Link to="" className="mx-2">
          aayaadi@outlook.com
        </Link>
      </div>
      <div className="flex justify-center items-center sm:ml-2 lg:ml-7">
        <BsWhatsapp className="text-green-600" />
        <Link to="" className="ml-2">
          +91-83829-11071
        </Link>
      </div>
    </div>
  );
};
