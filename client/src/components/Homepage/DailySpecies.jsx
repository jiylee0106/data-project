import { useEffect, useState } from "react";
import { dataSet } from "../../data/data";
import Card from "../Global/Card";
import { getApi, putApi } from "../../services/api";

const DailySpecies = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedSpecies, setSelectedSpecies] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }

    const today = new Date().toLocaleDateString();
    const storedDate = localStorage.getItem("Date");
    const storedSpecies = localStorage.getItem("DailySpecies");

    if (storedDate !== today || !storedDate) {
      const newSelectedSpecies = getRandomSpecies(dataSet, 4);
      setSelectedSpecies(newSelectedSpecies);
      localStorage.setItem("DailySpecies", JSON.stringify(newSelectedSpecies));
      localStorage.setItem("Date", today);
    } else if (storedSpecies) {
      setSelectedSpecies(JSON.parse(storedSpecies));
    }
  }, []);

  const getRandomSpecies = (dataSet, count) => {
    const speciesCount = dataSet.length;
    const selectedIds = new Set();

    while (selectedIds.size < count) {
      const randomIndex = Math.floor(Math.random() * speciesCount);
      const randomId = dataSet[randomIndex].id;
      selectedIds.add(randomId);
    }

    const selectedSpecies = dataSet.filter((item) => selectedIds.has(item.id));
    return selectedSpecies;
  };

  const [speciesLogs, setSpeciesLogs] = useState([]);
  const [speciesStatus, setSpeciesStatus] = useState({
    species1: false,
    species2: false,
    species3: false,
    species4: false,
  });
  const [participateStatus, setParticipateStatus] = useState(0);

  useEffect(() => {
    const getSpeciesLogs = async () => {
      if (isLoggedIn) {
        try {
          const response = await getApi("point/daily-events");
          setSpeciesLogs(response.data.logs);
        } catch (error) {
          console.log(error.response.data.message);
        }
      }
    };
    getSpeciesLogs();
  }, [participateStatus, isLoggedIn]);

  useEffect(() => {
    speciesLogs.forEach((item) => {
      if (item.method === "Watched_Daily_Species1") {
        setSpeciesStatus((prevStatus) => ({
          ...prevStatus,
          species1: true,
        }));
      } else if (item.method === "Watched_Daily_Species2") {
        setSpeciesStatus((prevStatus) => ({
          ...prevStatus,
          species2: true,
        }));
      } else if (item.method === "Watched_Daily_Species3") {
        setSpeciesStatus((prevStatus) => ({
          ...prevStatus,
          species3: true,
        }));
      } else if (item.method === "Watched_Daily_Species4") {
        setSpeciesStatus((prevStatus) => ({
          ...prevStatus,
          species4: true,
        }));
      }
    });
  }, [speciesLogs]);

  const handleSpecies = async (id) => {
    if (isLoggedIn) {
      try {
        if (speciesStatus[`species${id}`]) return;
        await putApi("point", {
          action_type: "Earned",
          method: `Watched_Daily_Species${id}`,
        });

        setParticipateStatus(participateStatus + 1);
      } catch (error) {
        alert(error.response.data.message);
      }
    }
  };

  return (
    <>
      <div className="mx-[10%] mt-20 text-2xl font-semibold">
        🐰 오늘의 환상종을 알아볼까요?
      </div>
      <div className="mx-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-lg font-medium">
        {selectedSpecies.map((item, index) => (
          <div key={item.id} onClick={() => handleSpecies(index + 1)}>
            <Card
              id={item.id}
              name={item.name}
              region={item.region}
              degree={item.degree}
              species={item.species}
              imageLink={`endangered/${item.id}.jpg`}
              link={item.link}
            />
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center mt-3 px-3 py-2 text-sm font-large text-center text-white rounded-lg focus:ring-4 focus:outline-none dark:focus:ring-blue-800 ${
                speciesStatus[`species${index + 1}`]
                  ? "bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700"
                  : "bg-red-700 dark:bg-red-600 dark:hover:bg-red-700"
              }`}
            >
              {speciesStatus[`species${index + 1}`] ? "완료" : "알아보기"}
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default DailySpecies;
