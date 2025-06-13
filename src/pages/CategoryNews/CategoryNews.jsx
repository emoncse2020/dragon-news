import { useLoaderData } from "react-router";
import NewsCard from "../../components/NewsCard/NewsCard";

const CategoryNews = () => {
  const { data } = useLoaderData();
  console.log(useLoaderData());

  return (
    <div>
      <h2 className="font-semibold mb-3">Dragon News Home</h2>
      <p className="text-gray-400 text-sm capitalize">
        {data.length} News found on this page
      </p>
      <div>
        {data.map((news) => (
          <NewsCard key={news._id} news={news}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
