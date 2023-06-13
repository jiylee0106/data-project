import { useEffect, useState } from "react";
import { dataSet } from "../../../../data/data";
import Card from "../../../Global/Card";

const ITEMS_PER_PAGE = 4;
const PAGE_RANGE = 5;

const RegionAnimalsList = ({ region, species }) => {
  const [animalData, setAnimalData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [startPage, setStartPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNextClick = () => {
    if (currentPage < Math.ceil(animalData.length / ITEMS_PER_PAGE)) {
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

  const animalsToShow = animalData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const pageCount = Math.ceil(animalData.length / ITEMS_PER_PAGE);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
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
                        ? "text-blue-600 bg-neutral-300"
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

export default RegionAnimalsList;
