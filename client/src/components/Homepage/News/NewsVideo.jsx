import YouTube from "react-youtube";

const NewsVideo = () => {
  const handleVideoEnd = () => {
    console.log("영상이 종료되었습니다.");
  };

  const videoId = "u9V5MBqhLRc"; // 재생할 영상의 유튜브 ID를 지정합니다.

  const opts = {
    width: "640",
    height: "360",
    playerVars: {
      autoplay: 1,
      rel: 0,
      modestbranding: 1,
    },
  };

  return (
    <div className="md:h-full md:h-auto border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <YouTube videoId={videoId} opts={opts} onEnd={handleVideoEnd} />
    </div>
  );
};

export default NewsVideo;
