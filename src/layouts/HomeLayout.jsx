import Header from "../components/Header/Header";
import LatestNews from "../components/LatestNews/LatestNews";

const HomeLayout = () => {
  return (
    <div>
      <Header></Header>
      <section className="w-11/12 mx-auto">
        <LatestNews></LatestNews>
      </section>
    </div>
  );
};

export default HomeLayout;
