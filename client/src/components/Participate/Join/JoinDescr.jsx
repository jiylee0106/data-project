import JoinCheck from "./JoinCheck";

const JoinDescr = ({
  participateStatus,
  setParticipateStatus,
  status,
  title,
  description,
}) => {
  return (
    <>
      <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <JoinCheck
          participateStatus={participateStatus}
          setParticipateStatus={setParticipateStatus}
          status={status}
        />
      </div>
    </>
  );
};

export default JoinDescr;
