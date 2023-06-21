import { useEffect, useState, useContext } from "react";
import { getRandomNumbers } from "./QuizGetNumbers";
import data from "./species.json";
import { putApi } from "../../../services/api";
import { GlobalContext } from "../../../store/Context";
import QuizProblem from "./QuizProblem";
import QuizImage from "./QuizImage";

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
  const context = useContext(GlobalContext);
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
    <div className="border-4 border-neutral-400 rounded-lg bg-white flex flex-col lg:flex-row items-stretch md:p-10">
      <div className="w-full p-6 lg:w-1/2 self-center">
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

export default Quiz;
