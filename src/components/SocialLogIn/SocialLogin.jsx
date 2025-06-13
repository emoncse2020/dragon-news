import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-semibold mb-2">Login With</h2>
      <div className="*:w-full space-y-2">
        <button className="btn">
          <FcGoogle /> Login With Google
        </button>
        <button className="btn">
          <FaGithub /> Login with GitHub
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
