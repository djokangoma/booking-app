


export default function Header() {
  return (
    <header className="flex justify-between w-full">
      <h1>logo</h1>
      <div className="flex gap-5 list-none">
        <li>home</li>
        <li>rooms</li>
        <li>pages</li>
        <li>contact</li>
      </div>
      <div className="flex gap-5">
      <button>Sign in</button>
      <button>Sign up</button>
      </div>
     </header>
  )
}
