import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import LatestNews from "../components/LatestNews/LatestNews";
import LeftNavBar from "../components/LayoutComponent/LeftNavBar/LeftNavBar";
import RightNavBar from "../components/LayoutComponent/RightNavBar/RightNavBar";
import NavBar from "../components/NavBar/NavBar";

const HomeLayout = () => {
  return (
    <div className="font-poppins">
      <Header></Header>
      <section>
        <LatestNews></LatestNews>
      </section>
      <nav className="w-11/12 mx-auto py-5">
        <NavBar></NavBar>
      </nav>
      <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-3">
        <aside className="left col-span-3">
          <LeftNavBar></LeftNavBar>
        </aside>
        <section className="col-span-6">
          Main content
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3">
          <RightNavBar></RightNavBar>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
