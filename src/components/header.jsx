import { NavLink, Link } from "react-router-dom";
import { FaHotel } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";


export default function Header() {
  return (
    <header className="flex justify-around  items-center h-12 w-full ">
      <div>
        <h2 className="flex">
          {" "}
          <Link to="/">
            {" "}
            <FaHotel className="text-[#f07857]  size-8 " />
          </Link>
        </h2>
      </div>

      <div className="navBar flex gap-5 list-none  ">
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
      </div>

      <div className=" hover:text-[#f07857]">
        <Link to="/login">
          {" "}
          <button className="bg-[#f07857] text-white p-1 border-none rounded-md ">
            LOGIN
          </button>{" "}
        </Link>
      </div>
      <div>
        <IoIosCloseCircle />
        <TbGridDots />
      </div>
    </header>
  );
}
