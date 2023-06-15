import Campaign from "./Campaign/Campaign";
import Quiz from "./Quiz/Quiz";
import Join from "./Join/Join";

const Participate = () => {
  return (
    <div className="md:m-20 bg-white flex flex-col">
      <div className="border-4 border-[#57443A] rounded-lg w-full">
        <Campaign />
      </div>

      <div className="border-4 border-[#57443A] rounded-lg w-full flex-row mt-5">
        <Quiz />
      </div>
      <div className="border-4 border-[#57443A] rounded-lg w-full flex-row mt-5">
        <Join />
      </div>
    </div>
  );
};

export default Participate;
