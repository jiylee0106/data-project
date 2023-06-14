import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { putApi } from "../../../services/api";
import { GlobalContext } from "../../../store/Context";

const JoinCheck = ({ participateStatus, setParticipateStatus }) => {
  const context = useContext(GlobalContext);
  const status = context.state.joinStatus;
  const pointStatus = context.state.point.status;

  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

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
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={handleParticipate}
          disabled={status}
        >
          {status ? "참여 완료" : "동참하기"}
        </button>
      ) : (
        <button
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => navigate("/login")}
        >
          동참하기
        </button>
      )}
    </div>
  );
};

export default JoinCheck;
