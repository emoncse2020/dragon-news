import { Link } from "react-router";

const Login = () => {
  return (
    <div className="flex justify-center items-center mt-10">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h2 className="text-5xl font-semibold">Login Your Account</h2>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4 rounded-none">
                Login
              </button>
            </fieldset>
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
