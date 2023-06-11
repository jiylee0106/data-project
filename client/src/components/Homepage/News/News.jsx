import NewsArticle from "./NewsArticle";
import NewsVideo from "./NewsVideo";

import { useEffect, useState } from "react";
import { getApi } from "../../../services/api";

const News = () => {
  const [videoInfo, setVideoInfo] = useState("");

  useEffect(() => {
    getVideoInfo();
  }, []);

  const getVideoInfo = async () => {
    try {
      const response = await getApi("content/video");
      setVideoInfo(response.data);
      console.log(videoInfo);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
  return (
    <>
      <div className="lg:m-20 lg:p-161 m-8 p-10 bg-white flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2">
          <NewsArticle videoInfo={videoInfo} />
        </div>
        <div className="w-full lg:w-1/2">
          <NewsVideo videoid={videoInfo.video_id} />
        </div>
      </div>
    </>
  );
};
export default News;
