const NewsVideo = () => {
  // 기본 페이지로 돌아가기

  return (
    <div className="p-6 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <iframe
        className="w-full aspect-[16/9]"
        src="https://www.youtube.com/embed/u9V5MBqhLRc"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default NewsVideo;
