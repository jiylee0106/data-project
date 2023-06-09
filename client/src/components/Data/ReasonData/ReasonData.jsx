import ScatterChart from "../Chart/ScatterChart";
import { nationalParkData } from "../../../data/national_park_data";
import { locateEndangerData } from "../../../data/locate_endanger_data";

const ReasonData = () => {
  return (
    <>
      <ScatterChart xData={nationalParkData} yData={locateEndangerData} />
    </>
  );
};

export default ReasonData;
