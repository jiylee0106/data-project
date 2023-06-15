import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { putApi } from "../../../services/api";
import { GlobalContext } from "../../../store/Context";

const JoinCheck = ({ participateStatus, setParticipateStatus }) => {
  const context = useContext(GlobalContext);
  const status = context.state.joinStatus;
  const pointStatus = context.state.point.status;
  const isLoggedIn = context.state.isLoggedIn;

  const navigate = useNavigate();

  const handleParticipate = async () => {
    try {
      await putApi("point", {
        action_type: "Earned",
        method: "Participation",
      });
      context.dispatch({ type: "POINT", name: "status", value: !pointStatus });

      setParticipateStatus(participateStatus + 1); // method 값을 배열에 추가
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="flex justify-end items-end">
      {isLoggedIn ? (
        <button
          className="inline-flex items-center px-3 py-2 pt-3 text-sm font-medium text-center text-white bg-[#85B7CC] rounded-lg hover:bg-[#3B82A0] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-[#85B7CC] dark:focus:ring-[#3B82A0]"
          onClick={handleParticipate}
          disabled={status}
        >
          {status ? "참여 완료" : "동참하기"}
        </button>
      ) : (
        <button
          className="inline-flex items-center px-3 py-2 pt-3 text-sm font-medium text-center text-white bg-[#85B7CC] rounded-lg hover:bg-[#3B82A0] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-[#85B7CC] dark:focus:ring-[#3B82A0]"
          onClick={() => navigate("/login")}
        >
          동참하기
        </button>
      )}
    </div>
  );
};

export default JoinCheck;
