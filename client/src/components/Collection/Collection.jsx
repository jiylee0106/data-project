import { useEffect, useState, useContext } from "react";
import Card from "../Global/Card";
import AnimalButton from "../Global/AnimalButton/AnimalButton";
import { dataSet } from "../../data/data";
import { getApi } from "../../services/api";
import Draw from "./Draw";
import { GlobalContext } from "../../store/Context";

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

const ITEMS_PER_PAGE = 8;
const PAGE_RANGE = 5;

const Collection = () => {
  const [filter, setFilter] = useState("전체");

  const [filteredList, setFilteredList] = useState(dataSet);

  const [speciesCount, setSpeciesCount] = useState({});

  const [collectionData, setCollectionData] = useState([]);

  const [collectionLength, setCollectionLength] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [startPage, setStartPage] = useState(1);
  const context = useContext(GlobalContext);

  const pointStatus = context.state.point.status;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNextClick = () => {
    if (currentPage < Math.ceil(filteredList.length / ITEMS_PER_PAGE)) {
      setCurrentPage(currentPage + 1);
    }

    if (currentPage % PAGE_RANGE === 0) {
      setStartPage(startPage + PAGE_RANGE);
    }
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }

    if (currentPage % PAGE_RANGE === 1 && startPage !== 1) {
      setStartPage(startPage - PAGE_RANGE);
    }
  };

  const animalsToShow = filteredList.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const pageCount = Math.ceil(filteredList.length / ITEMS_PER_PAGE);

  useEffect(() => {
    getCollectionData();
  }, [pointStatus]);

  const getCollectionData = async () => {
    try {
      const response = await getApi("collection");

      setCollectionData(response.data.collection);
      console.log(collectionData);
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
      <div className="main-font flex justify-between text-3xl text-[#AB8868] font-semibold mx-10">
        <div className="mt-2.5">🥳마이 컬렉션🥳</div>
        <div>
          <Draw collectionData={collectionData} />
        </div>
      </div>

      <div className="text-lg grid grid-cols-3 sm:grid-cols-4 md:grid-cols-8 lg:grid-cols-9 2xl:grid-cols-12 justify-center mt-5">
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
              setCurrentPage={setCurrentPage}
              setStartPage={setStartPage}
            />
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {animalsToShow.map((item) => {
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
      <nav className="flex justify-center mt-5">
        <ul className="flex">
          <li>
            <button
              onClick={handlePrevClick}
              disabled={startPage === 1}
              className={`block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 ${
                startPage === 1 && "cursor-not-allowed opacity-50"
              }`}
            >
              <span className="sr-only">Previous</span>
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </li>
          {Array.from(
            { length: Math.min(PAGE_RANGE, pageCount - startPage + 1) },
            (_, i) => i + startPage
          ).map((pageNumber) => (
            <li key={pageNumber}>
              <button
                onClick={() => handlePageChange(pageNumber)}
                className={`px-3 py-2 leading-tight border hover:bg-gray-100 hover:text-gray-700 
                    ${
                      pageNumber === currentPage
                        ? "text-blue-400 bg-neutral-300"
                        : "text-gray-500 bg-white"
                    }
                    dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
              >
                {pageNumber}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={handleNextClick}
              disabled={startPage + PAGE_RANGE - 1 >= pageCount}
              className={`block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 ${
                startPage + PAGE_RANGE - 1 >= pageCount &&
                "cursor-not-allowed opacity-50"
              }`}
            >
              <span className="sr-only">Next</span>
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Collection;
