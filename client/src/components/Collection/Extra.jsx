import { useState, useContext } from "react";
import { putApi } from "../../services/api";
import { globalContext } from "../../store/context";

const Extra = () => {
  const context = useContext(globalContext);
  const pointStatus = context.state.point.status;
  const points = context.state.point.count;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDraw1 = async () => {
    if (points >= 15) {
      try {
        await putApi("point", {
          action_type: "Spent",
          method: "Draw_Degree1",
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

  const handleDraw2 = async () => {
    if (points >= 5) {
      try {
        await putApi("point", {
          action_type: "Spent",
          method: "Draw_Degree2",
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
    <div className="">
      <button
        className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
        onClick={handleButtonClick}
      >
        뽑기
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          <div className="bg-white p-8 rounded-lg z-10 relative bg-[#EEE3CB]">
            <button
              className="absolute top-2 right-2 bg-transparent border-none text-gray-500 hover:text-gray-900 focus:outline-none"
              onClick={closeModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="text-bold">뽑기</div>
            <div>멸종위기종 카드를 뽑아보자!</div>
            <div>보유 포인트: {points}</div>
            <figure className="w-[13rem] mx-auto mt-3">
              <img src="images/MarioBox.png" alt="" />
            </figure>
            <div className="flex justify-between mt-4">
              <button
                className={`${points < 15 ? "bg-gray-300" : "bg-red-300"} ${
                  points >= 15 ? "hover:bg-red-500" : ""
                } 
          text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-500`}
                onClick={handleDraw1}
                disabled={points < 15}
              >
                1등급 뽑기
              </button>

              <button
                className={`${points < 5 ? "bg-gray-300" : "bg-blue-300"} ${
                  points >= 5 ? "hover:bg-blue-500" : ""
                } 
          text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
                onClick={handleDraw2}
                disabled={points < 5}
              >
                2등급 뽑기
              </button>
            </div>
            {points < 5 && 5 < points < 15 && (
              <p className="text-red-500 text-sm mt-2">
                포인트가 부족하여 뽑기를 진행할 수 없습니다.
              </p>
            )}
            <div style={{ height: "8px" }}></div> {/* 간격을 위한 빈 요소 */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Extra;
