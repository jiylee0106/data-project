import ScatterChart from "../Chart/ScatterChart";
import { nationalParkData } from "../../../data/national_park_data";
import { locateEndangerData } from "../../../data/locate_endanger_data";
import { ecologicalPathway } from "../../../data/ecological_pathway_data";
import MultiLineChart from "../Chart/MultiLineChart";
import { alienSpeciesData } from "../../../data/alien_species_data";

const ReasonData = () => {
  return (
    <div className="text-neutral-700">
      <p className="leading-10 text-left border p-5 pt-6 mt-20 rounded-xl text-2xl font-semibold">
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
  park: (
    <>
      국립공원 : 우리나라를 대표할 만한 자연생태계와 자연·문화 경관의 보전을
      위해
      <br />
      국가가 직접관리하는 보호지역
      <br />이 그래프는 전국의 멸종위기종 분포와 국립공원 수의 상관관계를 나타낸
      그래프입니다.
    </>
  ),
  park2: (
    <>
      이를 통해 국립공원의 수가 많은 지역일 수록 멸종위기종이 많다고 해석할 수
      있습니다.
      <br />
      국립공원은 멸종위기종이 서식하는 핵심지역인 만큼 이들 지역의 보호에
      국민들의 각별한 관심이 필요합니다.
    </>
  ),
  path: (
    <>
      생태통로 : 도로나 철도 건설로 인해 단절된 두 생태계를 연결하기 위해
      <br />
      고가나 지하에 설치한 통로
      <br />이 그래프는 전국의 멸종위기종 분포와 생태통로의 수와의 상관관계를
      나타낸 그래프입니다.
    </>
  ),
  path2: (
    <>
      그래프를 통해 생태통로의 개수가 많은 지역일 수록 멸종위기종이 많다는 것을
      확인할 수 있습니다. 환경부와 각 지자체는 단절된 서식지를 연결하기 위해 더
      많은 생태통로를 조성하는 등 앞으로도 지속적인 관측과 단절된 생태축 회복을
      위해 지속적으로 노력해야 합니다.
    </>
  ),
  alien: <>연도별 외래종의 유입을 나타낸 그래프입니다.</>,
  alien2: (
    <>
      학습용이나 관상용의 목적으로 들여온 종을 자연에 방생하게 되면 인위적으로
      많은 개체 수가 늘어납니다. 이는 생태계를 교란시킬 뿐만 아니라
      질병,바이러스 감염등의 우려가 있습니다.
      <br />
      따라서 도입종들에 대한 제도적 장치 도입, 철저한 규제와 관리가 필요합니다.
    </>
  ),
  result: (
    <>
      멸종으로 인한 생물종다양성 손실의 주요 원인
      <br />
      <br />
      - 오염: 오염은 해당 종이 생존하기 어려운 환경을 만듦으로써 생물 종에
      직접적인 영향을 끼침
      <br />
      - 서식지 감소와 훼손 : 주요 서식지를 완전히 없애거나, 단편화. 생물 종이
      서식하는 환경을 바꾸는 일
      <br />- 외래종의 유입 : 외래종이 도입되면 고유종과 공간 및 식량, 기타
      자원을 두고 경쟁하거나 고유종의 천적이 될 수 있음
    </>
  ),
};

export default ReasonData;
