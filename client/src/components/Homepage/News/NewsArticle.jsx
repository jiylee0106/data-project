const NewsArticle = ({ videoInfo }) => {
  return (
    <div className="flex-col lg:flex-row md:h-full md:h-auto p-6 shadow dark:bg-gray-800 dark:border-gray-700 flex items-center">
      <div className="w-full">
        <h5 className="mb-2 pb-8 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          {videoInfo?.title}
        </h5>

        <p className="text-xl text-left b-3 pb-8 font-normal text-gray-700 dark:text-gray-400">
          {videoInfo?.description}
        </p>
      </div>
    </div>
  );
};

export default NewsArticle;
