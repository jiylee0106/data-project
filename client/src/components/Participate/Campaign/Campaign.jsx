import Campaign1 from "./Campaign1";
import Campaign2 from "./Campaign2";
import Campaign3 from "./Campaign3";

const Campaign = () => {
  return (
    <div className="mx-20 my-10 p-10 bg-white flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/3 p-10">
        <Campaign1 />
      </div>

      <div className="w-full lg:w-1/3 p-10">
        <Campaign2 />
      </div>

      <div className="w-full lg:w-1/3 p-10">
        <Campaign3 />
      </div>
    </div>
  );
};

export default Campaign;
