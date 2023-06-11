import { useEffect, useState } from "react";
import { getApi } from "../../../services/api";

const NewsArticle = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    try {
      const response = await getApi("content/news");
      setNews(response.data[0]);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  return (
    <div className="md:h-full md:h-auto p-6 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-2 pb-8 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
        {news.title}
      </h5>

      <p className="mb-3 pb-8 font-normal text-gray-700 dark:text-gray-400">
        {news.description}
      </p>
      <a
        href={news.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Read more
        <svg
          aria-hidden="true"
          className="w-4 h-4 ml-2 -mr-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </div>
  );
};

export default NewsArticle;
