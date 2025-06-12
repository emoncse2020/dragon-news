import moment from "moment";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header className="flex flex-col justify-center items-center py-2 gap-2">
      <div className="logo">
        <img className="w-[300px]" src={logo} alt="" />
      </div>
      <h2 className="text-base-400">Journalism without Fear or Favour</h2>
      <p>{moment().format("dddd MMMM Do YYYY ")}</p>
    </header>
  );
};

export default Header;
