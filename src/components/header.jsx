import { NavLink } from "react-router-dom"

export default function Header() {
  return (
    <header className="flex justify-between w-full ">
      <h1>logo</h1>
      <div className="flex gap-5 list-none ">
      <NavLink to="/"> <li className="hover:text-[#b56953]">HOME</li></NavLink> 
        <li  className="hover:text-[#b56953]">ABOUT US</li>
        <li  className="hover:text-[#b56953]">HOTELS</li>
        <NavLink to="CONTACT"><li  className="hover:text-[#b56953]">  CONTACT</li></NavLink>
      </div>
      <div className="flex gap-5">
     <NavLink to="SIGN-IN"> <button className="hover:text-[#b56953]"> LOGIN</button></NavLink>
      </div>
     </header>
  )
}
