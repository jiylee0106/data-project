import { useState, useEffect } from "react";
import * as Api from "../../services/api";

const PointsLog = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const response = await Api.get("point/logs");
        setLogs(response.data.logs);
      } catch (error) {
        console.log(error);
      }
    };

    fetchLogs();
  }, []);

  const getActionTypeSymbol = (actionType) => {
    return actionType === "Earned" ? "+" : "-";
  };

  const methodDescriptions = {
    Watched_Data: "한국의 멸종위기종 알아보기",
    Watched_Daily_Species1: "1번 오늘의 환상종 확인",
    Watched_Daily_Species2: "2번 오늘의 환상종 확인",
    Watched_Daily_Species3: "3번 오늘의 환상종 확인",
    Watched_Daily_Species4: "4번 오늘의 환상종 확인",
    Participation: "동참하기",
    Quiz: "퀴즈참여",
    Watched_Video: "영상시청",
    Joined_Campaign1: "캠페인참여",
    Joined_Campaign2: "캠페인참여",
    Joined_Campaign3: "캠페인참여",
    Draw_Degree1: "멸종위기 1급 뽑기",
    Draw_Degree2: "멸종위기 2급 뽑기",
  };

  return (
    <>
      {logs.map((log, index) => (
        <div
          className="md:h-auto p-6 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          key={index}
        >
          <p>
            {methodDescriptions[log.method]} 활동으로{" "}
            {getActionTypeSymbol(log.action_type)}
            {log.points}점 획득
          </p>
        </div>
      ))}
    </>
  );
};

export default PointsLog;
