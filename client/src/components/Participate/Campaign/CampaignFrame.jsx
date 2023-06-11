import CampaignCheck from "./CampaignCheck";
const CampaignFrame = ({
  isLoggedIn,
  participateStatus,
  setParticipateStatus,
  status,
  title,
  description,
  id,
}) => {
  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg" src="images/polarbear.png" alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
          <CampaignCheck
            isLoggedIn={isLoggedIn}
            participateStatus={participateStatus}
            setParticipateStatus={setParticipateStatus}
            id={id}
            status={status}
          />
        </div>
      </div>
    </>
  );
};

export default CampaignFrame;
