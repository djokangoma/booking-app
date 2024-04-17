import HeaderNnav from "./header-nav";
import Logo from "./logo";


export default function Header() {
  return (
     <div>
      <Logo/>
      <HeaderNnav/>
      <button>Sign in</button>
      <button>Sign up</button>
     </div>
  )
}
