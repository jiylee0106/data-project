import PointsLog from "./PointsLog";
import UserCard from "./UserCard";

const Points = () => {
  return (
    <>
      <div className="lg:mx-40 lg:my-20 lg:p-20 m-8 p-10 bg-white flex flex-col ">
        <div className="border-4 border-[#57443A] rounded-lg">
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
