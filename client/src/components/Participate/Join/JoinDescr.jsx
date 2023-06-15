import JoinCheck from "./JoinCheck";

const JoinDescr = ({
  participateStatus,
  setParticipateStatus,
  title,
  description,
}) => {
  return (
    <>
      <div className="lg:w-full h-full p-6 bg-white shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <h5 className="mb-8 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="mb-3 text-xl font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <JoinCheck
          participateStatus={participateStatus}
          setParticipateStatus={setParticipateStatus}
        />
      </div>
    </>
  );
};

export default JoinDescr;
