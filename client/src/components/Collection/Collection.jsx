import { useEffect, useState } from "react";
import Card from "../Global/Card";
import AnimalButton from "../Global/AnimalButton/AnimalButton";
import { dataSet } from "../../data/data";
import { getApi } from "../../services/api";
import Extra from "./Extra";
const buttons = [
  {
    id: 1,
    name: "전체",
  },
  {
    id: 2,
    name: "내꺼",
  },
  {
    id: 3,
    name: "포유류",
  },
  {
    id: 4,
    name: "조류",
  },
  {
    id: 5,
    name: "파충류",
  },
  {
    id: 6,
    name: "양서류",
  },
  {
    id: 7,
    name: "어류",
  },
  {
    id: 8,
    name: "곤충",
  },
  {
    id: 9,
    name: "무척추동물",
  },
  {
    id: 10,
    name: "식물",
  },
  {
    id: 11,
    name: "해조류",
  },
  {
    id: 12,
    name: "고등균류",
  },
];

const Collection = () => {
  const [filter, setFilter] = useState("전체");

  const [filteredList, setFilteredList] = useState(dataSet);

  const [speciesCount, setSpeciesCount] = useState({});

  const [collectionData, setCollectionData] = useState([]);

  const [collectionLength, setCollectionLength] = useState(0);

  useEffect(() => {
    getCollectionData();
  }, []);

  const getCollectionData = async () => {
    try {
      const response = await getApi("collection");

      setCollectionData(response.data.collection);
      setCollectionLength(response.data.collection.length);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const handleFilterClick = (name) => {
    setFilter(name);
  };

  useEffect(() => {
    const counts = {};
    dataSet.forEach((item) => {
      counts[item.species] = (counts[item.species] || 0) + 1;
    });

    setSpeciesCount(counts);
  }, []);

  useEffect(() => {
    if (filter === "전체") {
      setFilteredList(dataSet);
    } else if (filter === "내꺼") {
      setFilteredList(
        dataSet.filter((item) =>
          collectionData.some((collectionItem) => collectionItem === item.id)
        )
      );
    } else {
      setFilteredList(dataSet.filter((item) => filter === item.species));
    }
  }, [filter, collectionData]);

  return (
    <>
      <div className="flex justify-between text-2xl font-semibold mx-10">
        🥳My Collection🥳
        <div>
          <Extra />
        </div>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-8 lg:grid-cols-9 2xl:grid-cols-12 justify-center mt-5">
        {buttons.map((item) => {
          let count =
            item.name === "전체"
              ? dataSet.length
              : speciesCount[item.name] || 0;

          return (
            <AnimalButton
              key={item.id}
              name={item.name}
              speciesCount={item.name == "내꺼" ? collectionLength : count}
              handleFilterClick={handleFilterClick}
            />
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredList.map((item) => {
          return (
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
          );
        })}
      </div>
    </>
  );
};

export default Collection;
