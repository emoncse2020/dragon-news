import { FaStar, FaEye, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router";
const NewsCard = ({ news }) => {
  const {
    author,
    title,
    details,
    image_url,
    published_date,
    total_view,
    rating,
  } = news;
  return (
    <div className="card bg-base-100 shadow-md mb-6 border">
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={author.img} alt={author.name} />
            </div>
          </div>
          <div>
            <p className="font-semibold text-sm">{author.name}</p>
            <p className="text-xs text-gray-500">
              {published_date?.slice(0, 10)}
            </p>
          </div>
        </div>
        <FaShareAlt className="text-gray-500 cursor-pointer" />
      </div>

      <div className="px-4 py-3">
        <h2 className="text-lg font-bold mb-2">{title}</h2>
        <figure className="mb-4">
          <img src={image_url} alt="news" className="w-full rounded" />
        </figure>
        <p className="text-sm text-gray-700">
          {details.length > 200 ? (
            <>
              {details.slice(0, 200)}...{" "}
              <Link
                to={`/news/${news._id}`}
                className="text-blue-500 cursor-pointer"
              >
                Read More
              </Link>
            </>
          ) : (
            details
          )}
        </p>
      </div>

      <div className="px-4 py-3 border-t flex justify-between items-center text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <div className="flex text-orange-400">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={i < Math.round(rating.number) ? "" : "text-gray-300"}
              />
            ))}
          </div>
          <span className="ml-2 text-sm text-black font-medium">
            {rating.number}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <FaEye /> <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
