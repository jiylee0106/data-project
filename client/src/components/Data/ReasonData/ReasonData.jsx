import ScatterChart from "../Chart/ScatterChart";
import { nationalParkData } from "../../../data/national_park_data";
import { locateEndangerData } from "../../../data/locate_endanger_data";

const ReasonData = () => {
  return (
    <>
      <ScatterChart
        xData={nationalParkData}
        yData={locateEndangerData}
        description={{
          title: "멸종위기종과 국립공원 수의 상관관계",
          xLabel: "지역별 국립공원 수",
          yLabel: "지역별 멸종 위기종 수",
        }}
      />
    </>
  );
};

export default ReasonData;
