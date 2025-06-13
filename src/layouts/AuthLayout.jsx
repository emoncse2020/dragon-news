import { Outlet } from "react-router";
import NavBar from "../components/NavBar/NavBar";

const AuthLayout = () => {
  return (
    <div className=" font-poppins bg-[#F3F3F3] h-full">
      <header className="py-3 w-11/12 mx-auto">
        <nav>
          <NavBar></NavBar>
        </nav>
      </header>
      <main className="min-h-dvh">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default AuthLayout;
