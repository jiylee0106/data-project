import PointsLog from "./PointsLog";
import UserCard from "./UserCard";

const Points = () => {
  return (
    <>
      <div className="lg:my-20 lg:px-20 my-8 bg-white flex flex-col ">
        <div className="bg-[#d6ceb8] border-4 border-neutral-400 rounded-lg">
          <div className="w-full ">
            <UserCard />
          </div>
          <div className="mr-3 w-full ">
            <PointsLog />
          </div>
        </div>
      </div>
    </>
  );
};

export default Points;
