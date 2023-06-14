import { useState, useContext, useEffect } from "react";
import { putApi } from "../../services/api";
import { GlobalContext } from "../../store/Context";
import Heart from "../Points/Heart";
import Card from "../Global/Card";
import { dataSet } from "../../data/data";

import Modal from "../Modal/Modal";

const cardColors = {
  포유류: "orange-200",
  조류: "indigo-200",
  파충류: "red-200",
  양서류: "green-200",
  어류: "pink-200",
  곤충: "sky-200",
  무척추동물: "purple-200",
  식물: "yellow-200",
  해조류: "lime-200",
  고등균류: "yellow-500",
};

const Draw = ({ collectionData }) => {
  const context = useContext(GlobalContext);
  const pointStatus = context.state.point.status;
  const points = context.state.point.count;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isResultModalOpen, setIsResultModalOpen] = useState(false);
  const [isSpeciesModalOpen, setIsSpeciesModalOpen] = useState(false);

  const [newAnimal, setNewAnimal] = useState({});

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
        setIsSpeciesModalOpen(true);
      } catch (error) {
        // 오류 처리
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
        setIsSpeciesModalOpen(true);
      } catch (error) {
        console.log("포인트가 부족합니다.");
      }
    }
  };
  useEffect(() => {
    if (isSpeciesModalOpen) {
      setTimeout(() => {
        setIsResultModalOpen(true);
        setIsSpeciesModalOpen(false);
      }, 1500);
    }
  }, [isSpeciesModalOpen]);

  useEffect(() => {
    const result = dataSet.filter(
      (item) => item.id === collectionData[collectionData.length - 1]
    );
    setNewAnimal(result);
    console.log(newAnimal);
  }, [collectionData]);

  return (
    <div className="">
      <button
        className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
        onClick={handleButtonClick}
      >
        <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-white text-lg dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          뽑기
        </span>
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
            <div>카드를 뽑아주세요!</div>
            <div className="flex flex-row-reverse">
              <div
                className="border flex basis-1/3 justify-between items-center mt-2 px-3 shadow-inner"
                style={{
                  boxShadow: "inset 2px 2px 1px 1px rgba(0, 0, 0, 0.5)",
                }}
              >
                <Heart className="w-[100rem] h-[100rem]" />
                {points}
              </div>
            </div>
            <figure className="w-[13rem] mx-auto mt-3">
              <img src="images/MarioBox.png" alt="" />
            </figure>
            <div className="flex justify-between mt-4 gap-2">
              <button
                className={`basis-1/2 ${
                  points < 15 ? "bg-gray-300" : "bg-red-500"
                } ${points >= 15 ? "hover:bg-red-300" : ""} 
          text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-500`}
                onClick={handleDraw1}
                disabled={points < 15}
              >
                1등급
              </button>

              <button
                className={`basis-1/2 ${
                  points < 5 ? "bg-gray-300" : "bg-blue-500"
                } ${points >= 5 ? "hover:bg-blue-300" : ""} 
          text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
                onClick={handleDraw2}
                disabled={points < 5}
              >
                2등급
              </button>
            </div>
            {points < 5 && (
              <p className="text-red-500 text-sm mt-2">
                좋아요 부족: 1등급(15점) 2등급(5점)
              </p>
            )}

            {5 <= points && points < 15 && (
              <p className="text-red-500 text-sm mt-2">
                좋아요 부족: 1등급 (15점)
              </p>
            )}
          </div>
        </div>
      )}
      {isSpeciesModalOpen && (
        <Modal buttonText="보러가기" isConfirm={true}>
          <div>{newAnimal[0].species}</div>
        </Modal>
      )}
      {isResultModalOpen && (
        <Modal
          buttonText="확인"
          isConfirm={false}
          color={cardColors[newAnimal[0].species]}
          closeModal={() => {
            setIsResultModalOpen(false);
          }}
          handleAction={() => {
            setIsResultModalOpen(false);
          }}
        >
          <Card
            id={newAnimal[0].id}
            name={newAnimal[0].name}
            region={newAnimal[0].region}
            degree={newAnimal[0].degree}
            species={newAnimal[0].species}
            imageLink={`endangered/${newAnimal[0].id}.jpg`}
            link={newAnimal[0].link}
          />
        </Modal>
      )}
    </div>
  );
};

export default Draw;
