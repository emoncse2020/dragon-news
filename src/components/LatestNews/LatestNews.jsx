import Marquee from "react-fast-marquee";
import { Link } from "react-router";

const LatestNews = () => {
  return (
    <div className="flex gap-2 items-center bg-base-200 p-2">
      <p className="bg-[#D72050] text-base-100 px-3 rounded">Latest</p>
      <Marquee pauseOnHover={true} speed={100} className="space-x-10">
        <Link to={"/news"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Link>
        <Link to={"/news"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Link>
        <Link to={"/news"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
