import * as Api from "../../../services/api";

const CampaignCheck = ({
  participateStatus,
  setParticipateStatus,
  id,
  status,
}) => {
  const handleParticipate = async () => {
    try {
      await Api.put("point", {
        action_type: "Earned",
        method: `Joined_Campaign${id}`,
      });

      setParticipateStatus(participateStatus + 1); // method 값을 배열에 추가
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={handleParticipate}
        disabled={status}
      >
        {status ? "참여 완료" : "캠페인 참여하기"}
      </button>
    </div>
  );
};

export default CampaignCheck;
