const QuizImage = ({ imgNum }) => {
  const jpgImagePath = `endangered/${imgNum}.jpg`;
  const jpegImagePath = `endangered/${imgNum}.jpeg`;

  return (
    <div className="w-full p-6 bg-white dark:bg-gray-800 dark:border-gray-700">
      <img
        className="rounded-xl"
        src={jpgImagePath}
        alt="Animal"
        onError={(e) => {
          e.target.src = jpegImagePath;
        }}
      />
    </div>
  );
};

export default QuizImage;
