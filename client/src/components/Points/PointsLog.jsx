import { useState, useEffect } from "react";
import { getApi } from "../../services/api";
import moment from "moment";
import Datepicker from "react-tailwindcss-datepicker";
import Heart from "./Heart";

const PointsLog = () => {
  const [logs, setLogs] = useState([]);
  const [value, setValue] = useState({
    startDate: moment().subtract(7, "days").toDate(),
    endDate: new Date(),
  });

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const response = await getApi("point/logs");
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
  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  const filteredLogs = logs.filter((log) => {
    const eventDate = moment(log.event_date);
    return (
      eventDate.isSameOrAfter(value.startDate, "day") &&
      eventDate.isSameOrBefore(value.endDate, "day")
    );
  });

  console.log("filteredLogs:", filteredLogs);

  return (
    <>
      <div>
        <Datepicker
          primaryColor={"teal"}
          value={value}
          onChange={handleValueChange}
        />
      </div>
      {filteredLogs.reverse().map((log, index) => (
        <div
          className="h-auto p-6 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          key={index}
        >
          <p>
            {moment(log.event_date).format("YYYY년 MM월 DD일 HH시 mm분 ss초")}{" "}
          </p>
          <p className="flex flex-row items-center">
            {methodDescriptions[log.method]} 활동으로{" "}
            {getActionTypeSymbol(log.action_type)}
            {log.points}
            <Heart /> {/* Include the Heart component */}
          </p>
        </div>
      ))}
    </>
  );
};

export default PointsLog;
