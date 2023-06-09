import { useEffect, useState } from "react";
import JoinDescr from "./JoinDescr";
import JoinImage from "./JoinImage";
import * as Api from "../../../services/api";

const joinData = { title: "Join1", description: "join설명" };

const Join = () => {
  const [joinLogs, setJoinLogs] = useState([]);
  const [joinStatus, setJoinStatus] = useState(false);

  const [participateStatus, setParticipateStatus] = useState(0);

  useEffect(() => {
    getJoinLogs();
  }, [participateStatus]);

  useEffect(() => {
    joinLogs.forEach((item) => {
      if (item.method === "Participation") {
        setJoinStatus(true);
      }
    });
  }, [joinLogs]);

  const getJoinLogs = async () => {
    try {
      const response = await Api.get("point/daily-events");

      setJoinLogs(response.data.logs);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-10 bg-white flex flex-col lg:flex-row">
      <div className="w-full p-6 lg:w-1/2 justify-items-center ">
        <JoinImage />
      </div>

      <div className="w-full p-6 lg:w-1/2">
        <JoinDescr
          participateStatus={participateStatus}
          setParticipateStatus={setParticipateStatus}
          status={joinStatus}
          title={joinData.title}
          description={joinData.description}
        />
      </div>
    </div>
  );
};

export default Join;
