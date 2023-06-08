import JoinDescr from "./JoinDescr";
import JoinImage from "./JoinImage";

const Join = () => {
  return (
    <div className="p-10 bg-white flex flex-col lg:flex-row">
      <div className="w-full p-6 lg:w-1/2 justify-items-center ">
        <JoinImage />
      </div>

      <div className="w-full p-6 lg:w-1/2">
        <JoinDescr />
      </div>
    </div>
  );
};

export default Join;
