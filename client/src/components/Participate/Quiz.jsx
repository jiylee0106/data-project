import QuizProblem from "./QuizProblem";
import QuizImage from "./QuizImage";

const Quiz = () => {
  return (
    <div className="mx-20 my-10 p-10 bg-white flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 p-10">
        <QuizProblem />
      </div>

      <div className="w-full lg:w-1/2 p-10 justify-items-center ">
        <QuizImage />
      </div>
    </div>
  );
};

export default Quiz;
