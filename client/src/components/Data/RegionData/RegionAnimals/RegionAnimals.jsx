import { useState } from "react";
import AnimalButton from "../../../Global/AnimalButton/AnimalButton";
import RegionAnimalsList from "./RegionAnimalsList";

const RegionAnimals = ({
  region,
  speciesCount,
  currentPage,
  setCurrentPage,
  startPage,
  setStartPage,
}) => {
  const [species, setSpecies] = useState("전체");
  const handleFilterClick = (name) => {
    setSpecies(name);
  };

  return (
    <>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 2xl:grid-cols-11 justify-center mt-10">
        {animalCategory.map((item) => {
          let count =
            item.name === "전체"
              ? Object.values(speciesCount).reduce((a, b) => a + b, 0)
              : speciesCount[item.name] || 0;

          return (
            <AnimalButton
              key={item.id}
              name={item.name}
              speciesCount={count}
              handleFilterClick={handleFilterClick}
              setCurrentPage={setCurrentPage}
              setStartPage={setStartPage}
            />
          );
        })}
      </div>
      <div className="">
        <RegionAnimalsList
          region={region}
          species={species}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          startPage={startPage}
          setStartPage={setStartPage}
        />
      </div>
    </>
  );
};

const animalCategory = [
  {
    id: 1,
    name: "전체",
  },
  {
    id: 2,
    name: "포유류",
  },
  {
    id: 3,
    name: "조류",
  },
  {
    id: 4,
    name: "파충류",
  },
  {
    id: 5,
    name: "양서류",
  },
  {
    id: 6,
    name: "어류",
  },
  {
    id: 7,
    name: "곤충",
  },
  {
    id: 8,
    name: "무척추동물",
  },
  {
    id: 9,
    name: "식물",
  },
  {
    id: 10,
    name: "해조류",
  },
  {
    id: 11,
    name: "고등균류",
  },
];

export default RegionAnimals;
