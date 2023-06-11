import { useEffect, useState } from "react";
import YouTube from "react-youtube";
import * as Api from "../../../services/api";

const NewsVideo = () => {
  const [videoLogs, setVideoLogs] = useState([]);
  const [videoStatus, setVideoStatus] = useState(false);
  const [participateStatus, setParticipateStatus] = useState(0);

  useEffect(() => {
    getVideoLogs();
  }, [participateStatus]);

  useEffect(() => {
    videoLogs.forEach((item) => {
      if (item.method === "Watched_Video") {
        setVideoStatus(true);
      }
    });
  }, [videoLogs]);

  const getVideoLogs = async () => {
    try {
      const response = await Api.get("point/daily-events");
      setVideoLogs(response.data.logs);
    } catch (error) {
      console.log(error);
    }
  };

  const handleComplete = async () => {
    try {
      await Api.put("point", {
        action_type: "Earned",
        method: "Watched_Video",
      });

      setParticipateStatus(participateStatus + 1);
    } catch (error) {
      console.log(error);
    }
  };

  const videoId = "u9V5MBqhLRc"; // 재생할 영상의 유튜브 ID를 지정합니다.

  const opts = {
    width: "640",
    height: "360",
    playerVars: {
      controls: 0,
      disablekb: 1,
      autoplay: 0,
      rel: 0,
      modestbranding: 1,
    },
  };

  return (
    <div>
      <div className="md:h-full md:h-auto border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <YouTube videoId={videoId} opts={opts} onEnd={handleComplete} />

        <div
          className={`inline-flex items-center mt-3 px-3 py-2 text-sm font-large text-center text-white rounded-lg focus:ring-4 focus:outline-none dark:focus:ring-blue-800 ${
            videoStatus
              ? "bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700"
              : "bg-red-700 dark:bg-red-600 dark:hover:bg-red-700"
          }`}
        >
          {videoStatus ? "시청 완료" : "시청 전"}
        </div>
      </div>
    </div>
  );
};

export default NewsVideo;
