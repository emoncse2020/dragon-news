import { useEffect, useState } from "react";

const LeftNavBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories").then(
      (res) =>
        res.json().then((data) => {
          setCategories(data.data.news_category);
        })
    );
  }, []);
  return (
    <div>
      <h2 className="font-semibold">All Category {categories.length}</h2>

      <div className="flex flex-col gap-2 mt-3">
        {categories.map((categroy) => (
          <button className="btn  btn-ghost" key={categroy.category_id}>
            {categroy.category_name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LeftNavBar;
