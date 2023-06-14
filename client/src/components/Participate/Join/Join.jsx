import { useContext, useEffect, useState } from "react";
import JoinDescr from "./JoinDescr";
import JoinImage from "./JoinImage";
import { getApi } from "../../../services/api";
import { GlobalContext } from "../../../store/Context";

const Join = () => {
  const context = useContext(GlobalContext);
  const logs = context.state.dailyEventsLog;

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
    logs.forEach((item) => {
      if (item.method === "Participation") {
        context.dispatch({ type: "JOIN", status: true });
      }
    });
  }, [logs]);

  return (
    <div className="p-10 bg-white flex flex-col lg:flex-row">
      <div className="w-full p-6 lg:w-1/2 justify-items-center ">
        <JoinImage imgLink={joinData?.image_link} />
      </div>

      <div className="w-full p-6 lg:w-1/2">
        <JoinDescr
          participateStatus={participateStatus}
          setParticipateStatus={setParticipateStatus}
          title={joinData?.title}
          description={joinData?.description}
        />
      </div>
    </div>
  );
};

export default Join;
