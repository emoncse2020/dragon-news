import { Link, NavLink } from "react-router";
import userIcon from "../../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const NavBar = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex justify-between items-center">
      <div className="">{user?.name}</div>
      <div className="nav space-x-5">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/career"}>Career</NavLink>
        <NavLink to={"/about"}>About</NavLink>
      </div>
      <div className="login flex space-x-5 items-center">
        <img src={userIcon} alt="" />
        <Link to={"/auth/login"} className="btn btn-neutral rounded-none">
          Login
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
