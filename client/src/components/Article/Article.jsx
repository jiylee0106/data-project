import ArticleResult from "./ArticleResult";
import data from "./newsResult.json";

const Article = () => {
  const items = data.items;

  return (
    <div className="font-bold mb-8 lg:m-44 m-20 p-20 text-xl block p-6 bg-white rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <div>
        <h2 className="text-3xl" href="/">
          Search Topics
        </h2>
      </div>
      <div>
        <ArticleResult items={items} />
      </div>
    </div>
  );
};

export default Article;
