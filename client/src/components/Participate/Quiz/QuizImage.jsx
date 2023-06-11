const QuizImage = ({ imgNum }) => {
  return (
    <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img src={`images/endangered/${imgNum}.jpg`} />
    </div>
  );
};

export default QuizImage;
