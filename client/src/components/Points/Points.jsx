import PointsLog from "./PointsLog";
import UserCard from "./UserCard";

const Points = () => {
  return (
    <>
      <div className="lg:mx-40 lg:my-20 lg:p-20 m-8 p-10 bg-white flex flex-col lg:flex-row ">
        <div className="w-full lg:w-3/4 order-2 lg:order-1">
          <PointsLog />
        </div>
        <div className="w-full h-auto lg:w-1/4 order-1 lg:order-2">
          <UserCard />
        </div>
      </div>
    </>
  );
};

export default Points;
