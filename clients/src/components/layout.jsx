import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import { Toaster } from "react-hot-toast";


export default function Layout() {
  return (
    <div>
      <Header/>
      <Toaster position="top-center" reverseOrder={false} />
      <Outlet />
      <Footer />
    </div>
  );
}
