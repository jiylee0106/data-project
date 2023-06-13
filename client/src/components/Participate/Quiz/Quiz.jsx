import { useEffect, useState, useContext } from "react";
import { getRandomNumbers } from "./QuizGetNumbers";
import data from "./species.json";
import Modal from "../../Modal/Modal";
import { putApi } from "../../../services/api";
import { globalContext } from "../../../store/context";

const species = data.reduce((acc, item) => {
  acc[item.id] = item.name;
  return acc;
}, {});

const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const Quiz = () => {
  const context = useContext(globalContext);
  const logs = context.state.dailyEventsLog;
  const quizStatus = context.state.quizStatus;
  const pointStatus = context.state.point.status;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [randomNumbers, setRandomNumbers] = useState(getRandomNumbers(4, 213));

  useEffect(() => {
    setRandomNumbers(getRandomNumbers(4, 213));
  }, []);

  const handleQuiz = async () => {
    setIsModalOpen(true);
    if (localStorage.getItem("accessToken") && !quizStatus) {
      await putApi("point", {
        action_type: "Earned",
        method: "Quiz",
      });
      context.dispatch({ type: "POINT", name: "status", value: !pointStatus });
    }
  };
  useEffect(() => {
    logs.forEach((item) => {
      if (item.method === "Quiz") {
        context.dispatch({ type: "QUIZ", status: true });
      }
    });
  }, [logs, pointStatus]);

  const [options, setOptions] = useState(
    randomNumbers.map((number) => species[number])
  );
  useEffect(() => {
    setOptions(randomNumbers.map((number) => species[number]));
  }, [randomNumbers]);

  const [randomOptions, setRandomOptions] = useState(shuffleArray(options));
  useEffect(() => {
    setRandomOptions(shuffleArray(options));
  }, [options]);

  const [imgNum, setImgNum] = useState(1);
  useEffect(() => {
    setImgNum(randomNumbers[0]);
  }, [randomNumbers]);

  return (
    <div className="p-10 bg-white flex flex-col lg:flex-row">
      <div className="w-full p-6 lg:w-1/2">
        <QuizProblem
          options={options}
          randomOptions={randomOptions}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          handleQuiz={handleQuiz}
        />
      </div>

      <div className="w-full p-6 lg:w-1/2 justify-items-center">
        <QuizImage imgNum={imgNum} />
      </div>
    </div>
  );
};

const QuizProblem = ({
  options,
  randomOptions,
  isModalOpen,
  setIsModalOpen,
  handleQuiz,
}) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <h2 className="mb-4 font-semibold text-gray-900 dark:text-white">
        퀴즈 참여하기
      </h2>
      <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
        이 멸종위기 야생생물의 이름은?
      </h3>

      <ul className="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {randomOptions.map((option, index) => (
          <li
            key={index}
            className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600"
          >
            <div className="flex items-center pl-3">
              <input
                id={`list-radio-${index}`}
                type="radio"
                value={option}
                name="list-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                checked={selectedOption === option}
                onChange={handleOptionChange}
              />
              <label
                htmlFor={`list-radio-${index}`}
                className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                {option}
              </label>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex justify-end">
        <button
          className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
          disabled={selectedOption === ""}
          onClick={handleQuiz}
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            정답 확인하기
          </span>
        </button>
      </div>

      {isModalOpen && (
        <Modal
          buttonText="확인"
          closeModal={() => setIsModalOpen(false)}
          handleAction={() => setIsModalOpen(false)}
        >
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            정답은 {options[0]} 입니다.
          </h3>
        </Modal>
      )}
    </div>
  );
};

const QuizImage = ({ imgNum }) => {
  const jpgImagePath = `endangered/${imgNum}.jpg`;
  const jpegImagePath = `endangered/${imgNum}.jpeg`;

  return (
    <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img
        src={jpgImagePath}
        alt="Animal"
        onError={(e) => {
          e.target.src = jpegImagePath;
        }}
      />
    </div>
  );
};

export default Quiz;
