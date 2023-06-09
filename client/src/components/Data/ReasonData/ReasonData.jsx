import ScatterChart from "../Chart/ScatterChart";
import { nationalParkData } from "../../../data/national_park_data";
import { locateEndangerData } from "../../../data/locate_endanger_data";
import { endangerYearData } from "../../../data/endanger_year_data";
import { ecologicalPathway } from "../../../data/ecological_pathway_data";
import LineChart from "../Chart/LineChart";

const ReasonData = () => {
  return (
    <>
      <div className="my-10">
        <ScatterChart
          xData={nationalParkData}
          yData={locateEndangerData}
          description={{
            title: "멸종위기종과 국립공원 수의 상관관계",
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
            title: "zz",
            xLabel: "awrer",
            yLabel: "awer",
          }}
        />
      </div>
      <div className="my-10">
        <LineChart yearData={endangerYearData} />
      </div>
    </>
  );
};

export default ReasonData;
