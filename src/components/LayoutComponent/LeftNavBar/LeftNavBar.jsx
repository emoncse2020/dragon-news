import { useEffect, useState } from "react";
import { NavLink } from "react-router";

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
          <NavLink
            to={`/category/${categroy.category_id}`}
            className="btn  btn-ghost"
            key={categroy.category_id}
          >
            {categroy.category_name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftNavBar;
