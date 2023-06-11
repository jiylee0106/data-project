import ScatterChart from "../Chart/ScatterChart";
import { nationalParkData } from "../../../data/national_park_data";
import { locateEndangerData } from "../../../data/locate_endanger_data";
import { ecologicalPathway } from "../../../data/ecological_pathway_data";

const ReasonData = () => {
  return (
    <>
      <div className="my-10">
        <ScatterChart
          xData={nationalParkData}
          yData={locateEndangerData}
          description={{
            title: "멸종위기종과 지역별 국립공원 수의 상관관계",
            xLabel: "지역별 국립공원 수",
            yLabel: "지역별 멸종 위기종 수",
          }}
        />
      </div>
      <div className="my-10">
        <ScatterChart
          xData={ecologicalPathway}
          yData={locateEndangerData}
          description={{
            title: "멸종위기종과 지역별 생태통로 수의 상관관계",
            xLabel: "지역별 생태통로 수",
            yLabel: "지역별 멸종 위기종 수",
          }}
        />
      </div>
    </>
  );
};

export default ReasonData;
