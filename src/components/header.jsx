import { NavLink, Link } from "react-router-dom";
import { FaHotel } from "react-icons/fa";

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

      <div className="flex gap-5 list-none  ">
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
        <Link to="/login"> LOGIN </Link>
      </div>
    </header>
  );
}
