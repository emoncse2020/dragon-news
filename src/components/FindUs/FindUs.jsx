import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-semibold mb-2">Find Us</h2>
      <div className="join join-vertical *:bg-base-100 w-full">
        <button className="btn join-item justify-start">
          <FaFacebook />
          FaceBook
        </button>
        <button className="btn join-item justify-start">
          <FaXTwitter />
          Twitter
        </button>
        <button className="btn join-item justify-start">
          <FaInstagram />
          InstaGram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
