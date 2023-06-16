import { useEffect, useState, useContext } from "react";
import YouTube from "react-youtube";
import { putApi } from "../../../services/api";
import { GlobalContext } from "../../../store/Context";
import { useMediaQuery } from "react-responsive";

const NewsVideo = ({ videoid }) => {
  const context = useContext(GlobalContext);
  const logs = context.state.dailyEventsLog;
  const videoStatus = context.state.videoStatus;
  const pointStatus = context.state.point.status;
  const isLoggedIn = context.state.isLoggedIn;
  const [participateStatus, setParticipateStatus] = useState(0);

  const [videoWidth, setVideoWidth] = useState("");

  const isDesktop = useMediaQuery({ query: "(min-width: 1724px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 1397px) and (max-width: 1723px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width: 1396px)" });

  useEffect(() => {
    if (isDesktop) {
      setVideoWidth("640");
    } else if (isTablet) {
      setVideoWidth("500");
    } else if (isMobile) {
      setVideoWidth("320");
    }
  }, [isMobile, isTablet, isDesktop]);

  useEffect(() => {
    logs.forEach((item) => {
      if (item.method === "Watched_Video") {
        context.dispatch({ type: "VIDEO", status: true });
      }
    });
  }, [logs, pointStatus]);

  const handleComplete = async () => {
    if (isLoggedIn) {
      if (videoStatus) return;
      await putApi("point", {
        action_type: "Earned",
        method: "Watched_Video",
      });

      context.dispatch({
        type: "POINT",
        name: "status",
        value: !pointStatus,
      });

      setParticipateStatus(participateStatus + 1);
    }
  };

  const opts = {
    width: videoWidth,
    height: "360",
    playerVars: {
      controls: 1,
      disablekb: 1,
      autoplay: 0,
      rel: 0,
      modestbranding: 1,
    },
  };

  return (
    <div className="flex-col lg:flex-row md:h-full md:h-auto p-6 dark:bg-gray-800 dark:border-gray-700 flex items-center">
      <div className="md:h-full h-auto rounded-lg dark:bg-gray-800 dark:border-gray-700">
        <YouTube
          className="w-full"
          videoId={videoid}
          opts={opts}
          onEnd={handleComplete}
        />

        {isLoggedIn && (
          <div className="flex justify-end">
            <div
              className={`inline-flex items-center mt-3 px-3 py-2 pt-3 text-sm font-large text-center text-white rounded-lg focus:ring-4 focus:outline-none dark:focus:ring-blue-800 ${
                videoStatus
                  ? "bg-[#85B7CC] dark:bg-[#3B82A0]"
                  : "bg-[#CD9894] dark:bg-[#A36560]"
              }`}
            >
              {videoStatus ? "시청 완료" : "시청 전"}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsVideo;
