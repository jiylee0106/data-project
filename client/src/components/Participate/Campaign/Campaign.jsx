import { useEffect, useState, useCallback, useContext } from "react";
import CampaignFrame from "./CampaignFrame";
import { getApi } from "../../../services/api";
import { globalContext } from "../../../store/context";

const Campaign = () => {
  const context = useContext(globalContext);

  const pointStatus = context.state.point.status;
  const [campaignLogs, setCampaignLogs] = useState([]);

  const [participateStatus, setParticipateStatus] = useState(0);

  const [campaignData, setCampaignData] = useState([]);

  useEffect(() => {
    getCampaignData();
  }, []);

  const getCampaignData = async () => {
    try {
      const response = await getApi("content/campaign");
      setCampaignData(response.data);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  useEffect(() => {
    getCampaignLogs();
  }, [participateStatus]);

  useEffect(() => {
    context.dispatch({ type: "POINT", name: "status", value: !pointStatus });
    campaignLogs.forEach((item) => {
      if (item.method === "Joined_Campaign1") {
        context.dispatch({ type: "CAMPAIGN", name: "campaign1", status: true });
      } else if (item.method === "Joined_Campaign2") {
        context.dispatch({ type: "CAMPAIGN", name: "campaign2", status: true });
      } else if (item.method === "Joined_Campaign3") {
        context.dispatch({ type: "CAMPAIGN", name: "campaign3", status: true });
      }
    });
  }, [campaignLogs]);

  const getCampaignLogs = useCallback(async () => {
    if (localStorage.getItem("accessToken")) {
      try {
        const response = await getApi("point/campaign");

        setCampaignLogs(response.data.logs);
      } catch (error) {
        alert(error.response.data.message);
      }
    }
  }, []);

  return (
    <div className="p-10 bg-white flex flex-col lg:flex-row">
      {campaignData?.map((item, index) => (
        <div key={index} className="w-full p-6 lg:w-1/3">
          <CampaignFrame
            participateStatus={participateStatus}
            setParticipateStatus={setParticipateStatus}
            imgLink={item.image_link}
            title={item.title}
            description={item.description}
            id={index + 1}
          />
        </div>
      ))}
    </div>
  );
};

export default Campaign;
