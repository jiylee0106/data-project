import Campaign from "./Campaign/Campaign";
import Quiz from "./Quiz";

const Participate = () => {
  return (
    <div className="m-8 p-10 bg-white flex flex-col">
      <div className="w-full">
        <Campaign />
      </div>

      <div className="w-full flex-row">
        <Quiz />
      </div>
    </div>
  );
};

export default Participate;
