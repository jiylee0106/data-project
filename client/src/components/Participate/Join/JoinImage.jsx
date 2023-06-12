const JoinImage = ({ imgLink }) => {
  return (
    <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img src={imgLink} />
    </div>
  );
};

export default JoinImage;
