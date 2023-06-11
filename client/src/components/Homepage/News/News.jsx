import NewsArticle from "./NewsArticle";
import NewsVideo from "./NewsVideo";

const News = () => {
  return (
    <>
      <div className="lg:m-20 lg:p-16 m-8 p-10 bg-white flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2">
          <NewsArticle />
        </div>
        <div className="w-full lg:w-1/2">
          <NewsVideo />
        </div>
      </div>
    </>
  );
};
export default News;
