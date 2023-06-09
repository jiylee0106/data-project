import QuizProblem from "./QuizProblem";
import QuizImage from "./QuizImage";

const Quiz = () => {
  return (
    <div className="p-10 bg-white flex flex-col lg:flex-row">
      <div className="w-full p-6 lg:w-1/2 ">
        <QuizProblem />
      </div>

      <div className="w-full p-6 lg:w-1/2 justify-items-center ">
        <QuizImage />
      </div>
    </div>
  );
};

export default Quiz;
