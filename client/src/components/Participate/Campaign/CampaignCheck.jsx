import { useNavigate } from "react-router-dom";
import { putApi } from "../../../services/api";
import { GlobalContext } from "../../../store/Context";
import { useContext } from "react";

const CampaignCheck = ({ id }) => {
  const context = useContext(GlobalContext);
  const campaignStatus = context.state.campaignStatus;
  const pointStatus = context.state.point.status;
  const isLoggedIn = context.state.isLoggedIn;

  const navigate = useNavigate();

  const handleParticipate = async () => {
    if (isLoggedIn) {
      try {
        await putApi("point", {
          action_type: "Earned",
          method: `Joined_Campaign${id}`,
        });

        context.dispatch({
          type: "POINT",
          name: "status",
          value: !pointStatus,
        });
      } catch (error) {
        alert(error.response.data.message);
      }
    }
  };

  return (
    <div className="flex justify-end items-end">
      {isLoggedIn ? (
        <button
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#85B7CC] rounded-lg hover:bg-[#3B82A0] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-[#85B7CC] dark:focus:ring-[#3B82A0]"
          onClick={handleParticipate}
          disabled={campaignStatus[`campaign${id}`]}
        >
          {campaignStatus[`campaign${id}`] ? "참여 완료" : "캠페인 참여하기"}
        </button>
      ) : (
        <button
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#85B7CC] rounded-lg hover:bg-[#3B82A0] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-[#85B7CC] dark:focus:ring-[#3B82A0]"
          onClick={() => navigate("/login")}
        >
          캠페인 참여하기
        </button>
      )}
    </div>
  );
};

export default CampaignCheck;
