import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Navigate } from "react-router";

const Register = () => {
  const { createNewUser, setUser } = useContext(AuthContext);
  const handleRegister = (formData) => {
    const name = formData.get("name");
    const photoUrl = formData.get("photoUrl");
    const email = formData.get("email");
    const password = formData.get("password");

    createNewUser(email, password)
      .then((res) => {
        const user = res.user;
        setUser(user);
        Navigate("/auth/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex justify-center">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Register your Account</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form action={handleRegister} className="fieldset">
              <label className="label">Name</label>
              <input
                className="input"
                type="text"
                name="name"
                id=""
                placeholder="Name"
              />
              <label className="label">Photo Url</label>
              <input
                className="input"
                type="text"
                name="photoUrl"
                placeholder="Photo Url"
              />
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

              <button className="btn btn-neutral mt-4">Register Now</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
