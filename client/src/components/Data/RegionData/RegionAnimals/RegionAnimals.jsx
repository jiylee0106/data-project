import { useState } from "react";
import AnimalButton from "../../../Global/AnimalButton/AnimalButton";
import RegionAnimalsList from "./RegionAnimalsList";

const RegionAnimals = ({ region }) => {
  const [species, setSpecies] = useState("전체");
  const handleFilterClick = (name) => {
    setSpecies(name);
  };
  return (
    <>
      <div className="flex flex-row justify-center mt-10">
        {animalCategory.map((item) => (
          <AnimalButton
            key={item.id}
            name={item.name}
            handleFilterClick={handleFilterClick}
          />
        ))}
      </div>
      <div className="grid grid-cols-4 gap-4">
        <RegionAnimalsList region={region} species={species} />
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
