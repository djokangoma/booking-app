import { NavLink, Link } from "react-router-dom";
import { FaHotel } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import { useState } from "react";

export default function Header() {
  const [active, setActive] = useState("navBar");
  const showNav = () => {
    setActive("navBar activeNavBar");
  };

  const removeNav = () => {
    setActive("navBar ");
  };
  return (
    <header className="flex justify-around  items-center h-12 w-full ">
      <div className="logo">
        <h2 className="flex ">
          <Link to="/">
            <FaHotel className="text-[#f07857]  size-8 " />
          </Link>
        </h2>
      </div>
      <div className={active}>
        <div className="navlist flex gap-5 list-none  ">
          <NavLink to="/">
            {" "}
            <li className="hover:text-[#f07857]">HOME</li>
          </NavLink>
          <NavLink to="/about">
            <li className="hover:text-[#f07857]">ABOUT US</li>
          </NavLink>
          <NavLink to="/contact">
            <li className="hover:text-[#f07857]"> CONTACT</li>
          </NavLink>
          <div className=" hover:text-[#f07857]">
            <Link to="/login">
              {" "}
              <button className=" bg-none text-[#f07857] border border-custom-orange px-2 py-1 rounded-md hover:bg-custom-orange hover:text-white">
                LOGIN
              </button>
            </Link>
          </div>
        </div>
        <div onClick={removeNav}>
          <IoIosCloseCircle className="closeBar  size-8 text-[#f07857] cursor-pointer " />
        </div>
      </div>

      {/* <div className=" hover:text-[#f07857]">
          <Link to="/login">
            {" "}
            <button className="bg-[#f07857] text-white p-1 border-none rounded-md ">
              LOGIN
            </button>{" "}
          </Link>
        </div> */}

      <div onClick={showNav} className="toggleNavbar">
        <TbGridDots className="activeNavBar size-8 text-[#f07857] cursor-pointer" />
      </div>
    </header>
  );
}
