


export default function Header() {
  return (
    <header className="flex justify-between w-full">
      <h1>logo</h1>
      <div className="flex gap-5 list-none">
        <li>HOME</li>
        <li>ROOMS</li>
        <li>PAGES</li>
        <li>CONTACT</li>
      </div>
      <div className="flex gap-5">
      <button>SIGN IN</button>
      <button>SIGN UP</button>
      </div>
     </header>
  )
}
