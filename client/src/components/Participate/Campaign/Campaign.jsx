import { useEffect, useState, useCallback } from "react";
import CampaignFrame from "./CampaignFrame";
import { getApi } from "../../../services/api";

const Campaign = () => {
  const [campaignLogs, setCampaignLogs] = useState([]);
  const [campaignStatus, setCampaignStatus] = useState({
    campaign1: false,
    campaign2: false,
    campaign3: false,
  });

  const [participateStatus, setParticipateStatus] = useState(0);

  const [campaignData, setCampaignData] = useState([]);

  useEffect(() => {
    getCampaignData();
  }, []);

  const getCampaignData = async () => {
    try {
      const response = await getApi("content/campaign");
      console.log(response);
      setCampaignData(response.data);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  useEffect(() => {
    getCampaignLogs();
  }, [participateStatus]);

  useEffect(() => {
    campaignLogs.forEach((item) => {
      if (item.method === "Joined_Campaign1") {
        setCampaignStatus((prevStatus) => ({
          ...prevStatus,
          campaign1: true,
        }));
      } else if (item.method === "Joined_Campaign2") {
        setCampaignStatus((prevStatus) => ({
          ...prevStatus,
          campaign2: true,
        }));
      } else if (item.method === "Joined_Campaign3") {
        setCampaignStatus((prevStatus) => ({
          ...prevStatus,
          campaign3: true,
        }));
      }
    });
  }, [campaignLogs]);

  const getCampaignLogs = useCallback(async () => {
    if (localStorage.getItem("accessToken")) {
      try {
        const response = await getApi("point/campaign");
        console.log(response);

        setCampaignLogs(response.data.logs);
      } catch (error) {
        alert(error.response.data.message);
      }
    }
  }, []);

  return (
    <div className="p-10 bg-white flex flex-col lg:flex-row">
      {campaignData.map((item, index) => (
        <div key={index} className="w-full p-6 lg:w-1/3">
          <CampaignFrame
            participateStatus={participateStatus}
            setParticipateStatus={setParticipateStatus}
            status={campaignStatus[`campaign${index + 1}`]}
            imgLink={item.image_link}
            title={item.title}
            description={item.description}
            id={item.id}
          />
        </div>
      ))}
    </div>
  );
};

export default Campaign;
