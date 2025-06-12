import { NavLink } from "react-router";
import userIcon from "../../assets/user.png";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className=""></div>
      <div className="nav space-x-5">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/career"}>Career</NavLink>
        <NavLink to={"/about"}>About</NavLink>
      </div>
      <div className="login flex space-x-5 items-center">
        <img src={userIcon} alt="" />
        <button className="btn btn-neutral rounded-none">Login</button>
      </div>
    </div>
  );
};

export default NavBar;
