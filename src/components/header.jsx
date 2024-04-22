import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header className="flex justify-between w-full ">
      <h1>logo</h1>
      <div className="flex gap-5 list-none ">
      <Link to="/"> <li className="hover:text-[#b56953]">HOME</li></Link> 
        <li  className="hover:text-[#b56953]">ABOUT US</li>
        <li  className="hover:text-[#b56953]">HOTELS</li>
        <Link to="CONTACT"><li  className="hover:text-[#b56953]">  CONTACT</li></Link>
      </div>
      <div className="flex gap-5">
      <button className="hover:text-[#b56953]">SIGN IN</button>
      </div>
     </header>
  )
}
