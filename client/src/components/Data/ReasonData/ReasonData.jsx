import ScatterChart from "../Chart/ScatterChart";
import { nationalParkData } from "../../../data/national_park_data";
import { locateEndangerData } from "../../../data/locate_endanger_data";
import { ecologicalPathway } from "../../../data/ecological_pathway_data";
import MultiLineChart from "../Chart/MultiLineChart";
import { alienSpeciesData } from "../../../data/alien_species_data";

const ReasonData = () => {
  return (
    <div className="text-neutral-700">
      <p className="leading-8 border p-5 pt-6 mt-20 text-center rounded-xl leading-10 text-2xl font-semibold">
        {reasonText.result}
        <br />
        {reasonText.result2}
      </p>
      <div className="my-10 lg:flex lg:flex-row justify-center items-stretch">
        <div className="lg:basis-1/2 mx-5">
          <ScatterChart
            xData={nationalParkData}
            yData={locateEndangerData}
            description={{
              title: "멸종위기종과 지역별 국립공원 수의 상관관계",
              xLabel: "지역별 국립공원 수",
              yLabel: "지역별 멸종위기종 수",
            }}
          />
        </div>
        <div className="lg:basis-1/2 mx-5 mb-5 self-center">
          <h2 className="font-bold text-2xl mb-3">{reasonTitle.park}</h2>
          <p className="leading-7 text-lg">
            {reasonText.park}
            <br />
            {reasonText.park2}
          </p>
        </div>
      </div>
      <div className="my-10 lg:flex flex-row justify-center items-stretch">
        <div className="hidden lg:block lg:basis-1/2 mx-5 mb-5 self-center">
          <h2 className="font-bold text-2xl mb-3">{reasonTitle.path}</h2>
          <p className="leading-7 text-lg">
            {reasonText.path}
            <br />
            {reasonText.path2}
          </p>
        </div>
        <div className="lg:basis-1/2 mx-5">
          <ScatterChart
            xData={ecologicalPathway}
            yData={locateEndangerData}
            description={{
              title: "멸종위기종과 지역별 생태통로 수의 상관관계",
              xLabel: "지역별 생태통로 수",
              yLabel: "지역별 멸종위기종 수",
            }}
          />
        </div>
        <div className="lg:hidden mx-5 mt-5">
          <h2 className="font-bold text-2xl mb-3">{reasonTitle.path}</h2>
          <p className="leading-7 text-lg">
            {reasonText.path}
            <br />
            {reasonText.path2}
          </p>
        </div>
      </div>
      <div className="my-10 lg:flex flex-row justify-center items-stretch">
        <div className="lg:basis-1/2 mx-5">
          <MultiLineChart data={alienSpeciesData} />
        </div>
        <div className="lg:basis-1/2 mx-5 mt-3 self-center">
          <h2 className="font-bold text-2xl mb-3">{reasonTitle.alien}</h2>
          <p className="leading-8 text-lg">
            {reasonText.alien}
            <br />
            {reasonText.alien2}
          </p>
        </div>
      </div>
    </div>
  );
};

const reasonTitle = {
  park: "1. 멸종위기종과 국립공원의 상관관계",
  path: "2. 멸종위기종과 생태통로와의 상관관계",
  alien: "3. 외래종의 유입 추세",
};

const reasonText = {
  park: `전국의 멸종위기종 분포와 국립공원 수의 상관관계를
  나타낸 그래프입니다.
  `,
  park2: (
    <>
      가로축은 국립공원의 수 , 세로축은 멸종위기종의 수를 나타내며 그래프를 통해
      <br />
      국립공원의 수가 많은 지역일 수록 멸종위기종이 많다고 해석할 수 있습니다.
    </>
  ),
  path: (
    <>
      전국의 멸종위기종 분포와 생태통로의 수와의 상관관계를 나타낸 <br />{" "}
      그래프입니다.
    </>
  ),
  path2: (
    <>
      그래프를 통해 생태통로의 개수가 많은 지역일 수록 멸종위기종이 많다는 것을{" "}
      <br />
      확인 할 수 있습니다.
    </>
  ),
  alien: `외래종의 유입은 해마다 늘어나고 있는 추세입니다.`,
  alien2: (
    <>
      외래종이 유입됨에 따라 멸종위기 생물을 포함한 토착 지역종의 개체수가
      <br /> 줄어 들고 있습니다.
    </>
  ),
  result: `
서식지 파괴, 침입외래생물
        `,
  result2: (
    <>
      이 세상에 없어져도 그만인 생물은 없습니다. 모든 야생의 생물들은 생태계에서
      자신의 역할을 가지고 살아갑니다.
    </>
  ),
};

export default ReasonData;
