import { useEffect, useState } from "react";
import Card from "../Global/Card";
import * as Api from "../../services/api";

const list = [
  {
    id: 1,
    name: "수달",
    region: ["강원", "경남"],
    degree: 1,
    species: "포유류",
    imageLink:
      "https://media.discordapp.net/attachments/1114069039757676599/1114084929794482176/dab60569596261c385ba8e401315566e.jpg?width=661&height=662",
    link: "https://www.nie.re.kr/nie/pgm/edSpecies/view.do?menuNo=200121&speciesSn=7",
  },
  {
    id: 2,
    name: "여우",
    region: ["충북", "경남"],
    degree: 1,
    species: "포유류",
    imageLink:
      "https://i.namu.wiki/i/mIi4JlIMiy7JpSaeG2samFF8CiAAPSP_aDpvCTtalV9kK7tfzUt09KOUodp-Pw7rmLFEdcVsadcIN4lehvgTKg.webp",
    link: "https://www.nie.re.kr/nie/pgm/edSpecies/view.do?menuNo=200121&speciesSn=9",
  },
  {
    id: 3,
    name: "늑대",
    region: ["북한"],
    degree: 1,
    species: "포유류",
    imageLink: "https://img.sbs.co.kr/newimg/news/20200209/201400647_700.jpg",
    link: "https://www.nie.re.kr/nie/pgm/edSpecies/view.do?menuNo=200121&speciesSn=1",
  },
  {
    id: 4,
    name: "눈사람",
    region: ["서울"],
    degree: 2,
    species: "파충류",
    imageLink:
      "https://cdn.discordapp.com/attachments/1114069039757676599/1114075473459302410/FxcOYbmacAA10-p.jpg",
    link: "https://namu.wiki/w/%EB%88%88%EC%82%AC%EB%9E%8C",
  },
  {
    id: 5,
    name: "하늘다람쥐",
    region: ["강원"],
    degree: 2,
    species: "포유류",
    imageLink:
      "https://cdn.univ20.com/wp-content/uploads/2015/07/b3f4c1f2d3ab564d4901cdf151fe64cc.jpg",
    link: "https://www.nie.re.kr/nie/pgm/edSpecies/view.do?menuNo=200121&speciesSn=20",
  },
];

const DailySpecies = () => {
  const getRandomSpecies = (list, count) => {
    const speciesCount = list.length;
    const selectedIds = new Set();

    while (selectedIds.size < count) {
      const randomIndex = Math.floor(Math.random() * speciesCount);
      const randomId = list[randomIndex].id;
      selectedIds.add(randomId);
    }

    const selectedSpecies = list.filter((item) => selectedIds.has(item.id));
    return selectedSpecies;
  };

  const selectedSpecies = getRandomSpecies(list, 4);

  const [speciesLogs, setSpeciesLogs] = useState([]);
  const [speciesStatus, setSpeciesStatus] = useState({
    species1: false,
    species2: false,
    species3: false,
    species4: false,
  });
  const [participateStatus, setParticipateStatus] = useState(0);

  useEffect(() => {
    getSpeciesLogs();
  }, [participateStatus]);

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

  const getSpeciesLogs = async () => {
    try {
      const response = await Api.get("point/daily-events");
      setSpeciesLogs(response.data.logs);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSpecies = async (id) => {
    try {
      if (speciesStatus[`species${id}`]) return;
      await Api.put("point", {
        action_type: "Earned",
        method: `Watched_Daily_Species${id}`,
      });

      setParticipateStatus(participateStatus + 1);
    } catch (error) {
      console.log(error);
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
              name={item.name}
              region={item.region}
              degree={item.degree}
              species={item.species}
              imageLink={item.imageLink}
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
