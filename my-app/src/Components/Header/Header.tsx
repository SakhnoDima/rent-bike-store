import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="h-[42px] px-[16px] py-[4px] bg-bg-prime">
      <Link to={"/"}>
        <p className="font-header text-gray-color text-2xl font-normal ">
          ADMIN.BIKE-BOOKING.COM
        </p>
      </Link>
    </header>
  );
};

export default Header;
