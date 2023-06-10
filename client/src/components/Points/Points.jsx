import PointsLog from "./PointsLog";
import UserCard from "./UserCard";

const Points = () => {
  return (
    <>
      <div className="mx-40 my-20 p-10 bg-white flex flex-col lg:flex-row">
        <div className="w-full lg:w-3/4">
          <PointsLog />
        </div>
        <div className="w-full lg:w-1/4 lg:self-start">
          <UserCard />
        </div>
      </div>
    </>
  );
};

export default Points;
