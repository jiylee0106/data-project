import Quiz from "./Quiz";

const Participate = () => {
  return (
    <>
      <div className="m-20 p-20 bg-white flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 p-10">
          <Quiz />
        </div>
        <div className="w-full lg:w-1/2 p-10">
          <div className="md:h-full md:h-auto p-6 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img src="images/polarbear.png" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Participate;
