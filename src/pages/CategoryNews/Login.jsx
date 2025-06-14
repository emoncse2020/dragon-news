import { useContext, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
  const navigate = useNavigate();
  const { logInUser, setUser } = useContext(AuthContext);
  const [error, setError] = useState({});
  const location = useLocation();

  const handleLogIn = (formData) => {
    const email = formData.get("email");
    const password = formData.get("password");
    logInUser(email, password)
      .then((res) => {
        const user = res.user;
        setUser(user);
        navigate(location?.state ? location.state : "/");
        //
      })
      .catch((err) => {
        setError({ ...error, Login: err.code });
      });
  };
  return (
    <div className="flex justify-center items-center mt-10">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h2 className="text-5xl font-semibold">Login Your Account</h2>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form action={handleLogIn} className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                placeholder="Email"
                name="email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                className="input"
                placeholder="Password"
                name="password"
              />
              {error.login && <label className="label">{error.login}</label>}
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4 rounded-none">
                Login
              </button>
            </form>
            <p className="text-center label">
              Don't have an Account{" "}
              <Link to={"/auth/register"}>Register Now</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
