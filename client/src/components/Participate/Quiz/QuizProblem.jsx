import { useState } from "react";
import Modal from "../../Modal/Modal";

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
      <h2 className="mb-4 font-semibold text-2xl text-gray-900 dark:text-white">
        퀴즈 참여하기
      </h2>
      <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
        이 멸종위기 야생생물의 이름은?
      </h3>

      <ul className="w-full  font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
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
                className="w-full py-3 ml-2 text-lg font-medium text-gray-900 dark:text-gray-300"
              >
                {option}
              </label>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex justify-end mt-3">
        {/* <button
          className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
          disabled={selectedOption === ""}
          onClick={handleQuiz}
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            정답 확인하기
          </span>
        </button> */}
        <button
          className="relative inline-flex items-center px-3 py-2 pt-3 text-sm font-medium text-center text-white bg-[#85B7CC] rounded-lg hover:bg-[#3B82A0] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-[#85B7CC] dark:focus:ring-[#3B82A0]"
          onClick={handleQuiz}
        >
          정답 확인하기
        </button>
      </div>

      {isModalOpen && (
        <Modal
          buttonText="확인"
          color="white"
          closeModal={() => setIsModalOpen(false)}
          handleAction={() => setIsModalOpen(false)}
        >
          <h3 className="mb-5 text-lg font-normal text-black-500 dark:text-gray-400">
            정답은 {options[0]} 입니다.
          </h3>
        </Modal>
      )}
    </div>
  );
};
export default QuizProblem;
