import { useEffect, useState, useContext } from "react";
import CampaignFrame from "./CampaignFrame";
import { getApi } from "../../../services/api";
import { globalContext } from "../../../store/context";

const Campaign = () => {
  const context = useContext(globalContext);
  const { campaignLog, isLoggedIn } = context.state;
  const pointStatus = context.state.point.status;
  const [campaignData, setCampaignData] = useState([]);

  useEffect(() => {
    getCampaignLogs();
  }, [isLoggedIn, pointStatus]);

  useEffect(() => {
    getCampaignData();
  }, [isLoggedIn]);

  const getCampaignData = async () => {
    try {
      const response = await getApi("content/campaign");
      setCampaignData(response.data);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const getCampaignLogs = async () => {
    if (isLoggedIn) {
      try {
        const response = await getApi("point/campaign");
        context.dispatch({ type: "CAMPAIGNLOGS", value: response.data.logs });
      } catch (error) {
        console.log(error.response.data.message);
      }
    }
  };

  useEffect(() => {
    campaignLog.forEach((item) => {
      if (item.method === "Joined_Campaign1") {
        context.dispatch({ type: "CAMPAIGN", name: "campaign1", status: true });
      } else if (item.method === "Joined_Campaign2") {
        context.dispatch({ type: "CAMPAIGN", name: "campaign2", status: true });
      } else if (item.method === "Joined_Campaign3") {
        context.dispatch({ type: "CAMPAIGN", name: "campaign3", status: true });
      }
    });
  }, [isLoggedIn, campaignLog]);

  return (
    <div className="p-10 bg-white flex flex-col lg:flex-row">
      {campaignData?.map((item, index) => (
        <div key={index} className="w-full p-6 lg:w-1/3">
          <CampaignFrame
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
