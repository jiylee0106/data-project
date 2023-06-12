import { useEffect, useState } from "react";
import { dataSet } from "../../../../data/data";
import Card from "../../../Global/Card";

const RegionAnimalsList = ({ region, species }) => {
  const [animalData, setAnimalData] = useState([]);
  useEffect(() => {
    const filteredData = dataSet.filter((item) => {
      const isInRegion = region === "전국" || item.region.includes(region);
      const isOfSelectedSpecies =
        species === "전체" ||
        item.species.toLowerCase() === species.toLowerCase();
      return isInRegion && isOfSelectedSpecies;
    });
    setAnimalData(filteredData);
  }, [region, species]);

  return (
    <>
      {animalData?.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          name={item.name}
          region={item.region}
          degree={item.degree}
          species={item.species}
          imageLink={`endangered/${item.id}.jpg`}
          link={item.link}
        />
      ))}
    </>
  );
};

export default RegionAnimalsList;
