import { useEffect, useState } from "react";
import CampaignFrame from "./CampaignFrame";
import { getApi } from "../../../services/api";

const campaignData = [
  { id: 1, title: "Campaign1", description: "Campaign1설명" },
  { id: 2, title: "Campaign2", description: "Campaign2설명" },
  { id: 3, title: "Campaign3", description: "Campaign3설명" },
];

const Campaign = () => {
  const [campaignLogs, setCampaignLogs] = useState([]);
  const [campaignStatus, setCampaignStatus] = useState({
    campaign1: false,
    campaign2: false,
    campaign3: false,
  });

  const [participateStatus, setParticipateStatus] = useState(0);

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

  const getCampaignLogs = async () => {
    try {
      const response = await getApi("point/campaign");
      console.log(response);

      setCampaignLogs(response.data.logs);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-10 bg-white flex flex-col lg:flex-row">
      {campaignData.map((item, index) => (
        <div key={item.id} className="w-full p-6 lg:w-1/3">
          <CampaignFrame
            participateStatus={participateStatus}
            setParticipateStatus={setParticipateStatus}
            status={campaignStatus[`campaign${index + 1}`]}
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
