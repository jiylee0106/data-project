import NewsArticle from "./NewsArticle";
import NewsVideo from "./NewsVideo";

import { useEffect, useState } from "react";
import { getApi } from "../../../services/api";
import { useLocation } from "react-router-dom";

const News = () => {
  const [videoInfo, setVideoInfo] = useState({});
  const location = useLocation();

  useEffect(() => {
    const getVideoInfo = async () => {
      const response = await getApi("content/video");
      setVideoInfo(response.data);
    };
    getVideoInfo();
  }, [location.pathname]);

  return (
    <>
      <div className="border rounded-lg mt-20 bg-white flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2">
          <NewsArticle videoInfo={videoInfo} />
        </div>
        <div className="w-full lg:w-1/2">
          <NewsVideo videoid={videoInfo?.video_id} />
        </div>
      </div>
    </>
  );
};
export default News;
