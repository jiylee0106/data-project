import { useState, memo } from "react";
import DataTab from "./DataTab";
import RegionDataRaw from "./RegionData/RegionData";
import ReasonDataRaw from "./ReasonData/ReasonData";

const RegionData = memo(RegionDataRaw);
const ReasonData = memo(ReasonDataRaw);

const Data = () => {
  const [tab, setTab] = useState(0);
  return (
    <div className="my-32">
      <DataTab tab={tab} setTab={setTab} />
      {tab === 0 ? <RegionData /> : <ReasonData />}
    </div>
  );
};

export default Data;
