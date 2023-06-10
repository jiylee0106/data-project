import ArticleResult from "./ArticleResult";
import data from "./newsResult.json";

const Article = () => {
  const items = data.items;

  return (
    <div className="font-bold mb-8 m-10 md:p-20 block p-6 bg-white rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <div>
        <h2 className="text-3xl mb-5" href="/">
          멸종위기종 소식
        </h2>
      </div>
      <div>
        <ArticleResult items={items} />
      </div>
    </div>
  );
};

export default Article;
