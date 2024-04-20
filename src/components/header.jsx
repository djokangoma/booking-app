


export default function Header() {
  return (
    <header className="flex justify-between w-full ">
      <h1>logo</h1>
      <div className="flex gap-5 list-none ">
        <li className="hover:text-[#b56953]">HOME</li>
        <li  className="hover:text-[#b56953]">ROOMS</li>
        <li  className="hover:text-[#b56953]">PAGES</li>
        <li  className="hover:text-[#b56953]">CONTACT</li>
      </div>
      <div className="flex gap-5">
      <button>SIGN IN</button>
      <button>SIGN UP</button>
      </div>
     </header>
  )
}
