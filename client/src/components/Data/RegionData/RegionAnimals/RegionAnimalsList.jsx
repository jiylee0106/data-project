import { useEffect, useState } from "react";
import { dataSet } from "../../../../data/data";
import Card from "../../../Global/Card";

const ITEMS_PER_PAGE = 4;

const RegionAnimalsList = ({ region, species }) => {
  const [animalData, setAnimalData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

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

  const pageCount = Math.ceil(animalData.length / ITEMS_PER_PAGE);
  const animalsToShow = animalData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      {animalsToShow?.map((item) => (
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
      <div>
        {Array.from({ length: pageCount }, (_, i) => i + 1).map(
          (pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          )
        )}
      </div>
    </>
  );
};

export default RegionAnimalsList;
