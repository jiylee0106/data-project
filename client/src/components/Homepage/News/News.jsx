import NewsArticle from "./NewsArticle";
import NewsVideo from "./NewsVideo";

const News = () => {
  return (
    <>
      <div className="m-8 p-10 bg-white flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/4">
          <NewsArticle />
        </div>
        <div className="w-full lg:w-3/4">
          <NewsVideo />
        </div>
      </div>
    </>
  );
};
export default News;
