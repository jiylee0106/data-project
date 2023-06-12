import Campaign from "./Campaign/Campaign";
import Quiz from "./Quiz/Quiz";
import Join from "./Join/Join";

const Participate = () => {
  return (
    <div className="md:m-20 bg-white flex flex-col">
      <div className="w-full">
        <Campaign />
      </div>

      <div className="w-full flex-row">
        <Quiz />
      </div>
      <div className="w-full flex-row">
        <Join />
      </div>
    </div>
  );
};

export default Participate;
