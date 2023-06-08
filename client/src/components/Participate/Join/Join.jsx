import JoinDescr from "./JoinDescr";
import JoinImage from "./JoinImage";

const Join = () => {
  return (
    <div className="mx-20 my-10 p-10 bg-white flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 p-10 justify-items-center ">
        <JoinImage />
      </div>

      <div className="w-full h-full lg:w-1/2 p-10">
        <JoinDescr />
      </div>
    </div>
  );
};

export default Join;
