import ScatterChart from "../Chart/ScatterChart";
import { nationalParkData } from "../../../data/national_park_data";
import { locateEndangerData } from "../../../data/locate_endanger_data";
import { ecologicalPathway } from "../../../data/ecological_pathway_data";
import MultiLineChart from "../Chart/MultiLineChart";
import { alienSpeciesData } from "../../../data/alien_species_data";

const ReasonData = () => {
  return (
    <>
      <div className="my-10 lg:flex flex-row justify-center">
        <div className="lg:basis-1/3 mx-5">
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
        <div className="lg:basis-1/3 mx-5">
          멸종위기종과 지역별 국립공원 수의 상관관계멸종위기종과 지역별 국립공원
          수의 상관관계멸종위기종과 지역별 국립공원 수의 상관관계멸종위기종과
          지역별 국립공원 수의 상관관계멸종위기종과 지역별 국립공원 수의
          상관관계멸종위기종과 지역별 국립공원 수의 상관관계멸종위기종과 지역별
          국립공원 수의 상관관계멸종위기종과 지역별 국립공원 수의
          상관관계멸종위기종과 지역별 국립공원 수의 상관관계멸종위기종과 지역별
          국립공원 수의 상관관계멸종위기종과 지역별 국립공원 수의
          상관관계멸종위기종과 지역별 국립공원 수의 상관관계멸종위기종과 지역별
        </div>
      </div>
      <div className="my-10 lg:flex flex-row justify-center">
        <div className="hidden lg:block lg:basis-1/3 mx-5">
          멸종위기종과 지역별 국립공원 수의 상관관계멸종위기종과 지역별 국립공원
          수의 상관관계멸종위기종과 지역별 국립공원 수의 상관관계멸종위기종과
          지역별 국립공원 수의 상관관계멸종위기종과 지역별 국립공원 수의
          상관관계멸종위기종과 지역별 국립공원 수의 상관관계멸종위기종과 지역별
          국립공원 수의 상관관계멸종위기종과 지역별 국립공원 수의
          상관관계멸종위기종과 지역별 국립공원 수의 상관관계멸종위기종과 지역별
          국립공원 수의 상관관계멸종위기종과 지역별 국립공원 수의
          상관관계멸종위기종과 지역별 국립공원 수의 상관관계멸종위기종과 지역별
        </div>
        <div className="lg:basis-1/3 mx-5">
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
        <div className="lg:hidden mx-5">
          멸종위기종과 지역별 국립공원 수의 상관관계멸종위기종과 지역별 국립공원
          수의 상관관계멸종위기종과 지역별 국립공원 수의 상관관계멸종위기종과
          지역별 국립공원 수의 상관관계멸종위기종과 지역별 국립공원 수의
          상관관계멸종위기종과 지역별 국립공원 수의 상관관계멸종위기종과 지역별
          국립공원 수의 상관관계멸종위기종과 지역별 국립공원 수의
          상관관계멸종위기종과 지역별 국립공원 수의 상관관계멸종위기종과 지역별
          국립공원 수의 상관관계멸종위기종과 지역별 국립공원 수의
          상관관계멸종위기종과 지역별 국립공원 수의 상관관계멸종위기종과 지역별
        </div>
      </div>
      <div className="my-10 lg:flex flex-row justify-center">
        <div className="lg:basis-1/3 mx-5">
          <MultiLineChart data={alienSpeciesData} />
        </div>
        <div className="lg:basis-1/3 mx-5">
          멸종위기종과 지역별 국립공원 수의 상관관계멸종위기종과 지역별 국립공원
          수의 상관관계멸종위기종과 지역별 국립공원 수의 상관관계멸종위기종과
          지역별 국립공원 수의 상관관계멸종위기종과 지역별 국립공원 수의
          상관관계멸종위기종과 지역별 국립공원 수의 상관관계멸종위기종과 지역별
          국립공원 수의 상관관계멸종위기종과 지역별 국립공원 수의
          상관관계멸종위기종과 지역별 국립공원 수의 상관관계멸종위기종과 지역별
          국립공원 수의 상관관계멸종위기종과 지역별 국립공원 수의
          상관관계멸종위기종과 지역별 국립공원 수의 상관관계멸종위기종과 지역별
        </div>
      </div>
    </>
  );
};

export default ReasonData;
