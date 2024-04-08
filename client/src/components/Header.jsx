import { Link } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <div className="w-full flex py-6 justify-around bg-sky-200">
      <div className="w-70% pr-14 ">YashCars</div>
      <div className="flex gap-10 pl-14">
        <Link>FAQs</Link>
        <Link>login or signup</Link>
      </div>
    </div>
  );
};

export default Header;
