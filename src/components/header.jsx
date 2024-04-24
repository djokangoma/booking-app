import { NavLink,Link } from "react-router-dom"

export default function Header() {
  return (
    <header className="flex justify-around  items-center h-12 w-full ">
      <div>
        <h1>logo</h1>
      </div>
      
      <div className="flex gap-5 list-none  ">
      <NavLink to="/"> <li className="hover:text-[#b56953]">HOME</li></NavLink> 
      <NavLink to="/about"><li  className="hover:text-[#b56953]">ABOUT US</li></NavLink>  
       <NavLink to="/hotels"> <li  className="hover:text-[#b56953]">HOTELS</li></NavLink> 
        <NavLink to="/contact"><li  className="hover:text-[#b56953]">  CONTACT</li></NavLink>
      </div>

      <div className="">
       <Link to="/login"> LOGIN </Link>
      </div>
     </header>
  )
}
