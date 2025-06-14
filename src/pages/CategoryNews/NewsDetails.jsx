import { Link, useLoaderData } from "react-router";
import Header from "../../components/Header/Header";

const NewsDetails = () => {
  const { data } = useLoaderData();
  const news = data[0];
  const { image_url, title, details, author, rating } = news;

  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12 gap-5">
        <section className="col-span-9">
          <h2 className="font-semibold mb-3">Dragon News</h2>
          <div className="card bg-base-100 ">
            <figure>
              <img src={image_url} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {title}
                <div className="badge badge-secondary">{rating.number}</div>
              </h2>
              <p>{details}</p>
              <div className="card-actions justify-end items-center">
                <div className="badge ">{author.name}</div>
                <img
                  className="w-10 h-10 rounded-full"
                  src={author.img}
                  alt=""
                />
                <div className="badge ">{author.published_date}</div>
              </div>
            </div>
            <Link to={`/category/${news?.category_id}`}>Back to category</Link>
          </div>
        </section>
        <section className="col-span-3"></section>
      </main>
    </div>
  );
};

export default NewsDetails;
