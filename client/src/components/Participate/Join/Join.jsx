import { useEffect, useState } from "react";
import JoinDescr from "./JoinDescr";
import JoinImage from "./JoinImage";
import { getApi } from "../../../services/api";

const Join = () => {
  const [joinLogs, setJoinLogs] = useState([]);
  const [joinStatus, setJoinStatus] = useState(false);

  const [participateStatus, setParticipateStatus] = useState(0);

  const [joinData, setJoinData] = useState({});

  useEffect(() => {
    getJoin();
  }, []);

  const getJoin = async () => {
    try {
      const response = await getApi("content/participation");
      setJoinData(response.data);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

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
    if (localStorage.getItem("accessToken")) {
      try {
        const response = await getApi("point/daily-events");
        setJoinLogs(response.data.logs);
      } catch (error) {
        alert(error.response.data.message);
      }
    }
  };

  return (
    <div className="p-10 bg-white flex flex-col lg:flex-row">
      <div className="w-full p-6 lg:w-1/2 justify-items-center ">
        <JoinImage imgLink={joinData.image_link} />
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
