import Campaign1 from "./Campaign1";
import Campaign2 from "./Campaign2";
import Campaign3 from "./Campaign3";

const Campaign = () => {
  return (
    <div className="p-10 bg-white flex flex-col lg:flex-row">
      <div className="w-full p-6 lg:w-1/3">
        <Campaign1 />
      </div>

      <div className="w-full p-6 lg:w-1/3">
        <Campaign2 />
      </div>

      <div className="w-full p-6 lg:w-1/3">
        <Campaign3 />
      </div>
    </div>
  );
};

export default Campaign;
