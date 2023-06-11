import { useEffect, useState } from "react";
import { dataSet } from "../../../data/data";
import HorizontalChart from "../Chart/HorizontalChart";
import Map from "./Map/Map";

const initialRegion = "전국";
const initialData = {
  포유류: 0,
  양서류: 0,
  조류: 0,
  무척추동물: 0,
  곤충류: 0,
  해조류: 0,
  파충류: 0,
  고등균류: 0,
  어류: 0,
  육상식물: 0,
};

const RegionData = () => {
  const [region, setRegion] = useState(initialRegion);
  const [data, setData] = useState(initialData);

  useEffect(() => {
    const speciesCount = {
      포유류: 0,
      양서류: 0,
      조류: 0,
      무척추동물: 0,
      곤충: 0,
      해조류: 0,
      파충류: 0,
      고등균류: 0,
      어류: 0,
      식물: 0,
    };

    dataSet.forEach((item) => {
      if (region === "전국" || item.region.includes(region)) {
        speciesCount[
          item.species.charAt(0).toUpperCase() + item.species.slice(1)
        ]++;
      }
    });

    setData(speciesCount);
  }, [region]);

  return (
    <div className="lg:flex lg:flex-row lg:px-40">
      <div>
        <h1 className="text-center font-bold text-neutral-500">
          보고싶은 지역을 클릭해보세요
        </h1>
        <Map setRegion={setRegion} />
      </div>
      <HorizontalChart region={region} speciesData={data} />
    </div>
  );
};

export default RegionData;
