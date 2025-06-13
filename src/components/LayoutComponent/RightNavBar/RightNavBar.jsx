import FindUs from "../../FindUs/FindUs";
import SocialLogin from "../../SocialLogIn/SocialLogin";

const RightNavBar = () => {
  return (
    <div className="space-y-3">
      <SocialLogin></SocialLogin>
      <FindUs></FindUs>
    </div>
  );
};

export default RightNavBar;
