import { useEffect, useState } from "react";
import Card from "../Global/Card";
import AnimalButton from "../Global/AnimalButton/AnimalButton";

const buttons = [
  {
    id: 1,
    name: "전체",
  },
  {
    id: 2,
    name: "내꺼!",
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

const Collection = () => {
  const [filter, setFilter] = useState("전체");

  const [filteredList, setFilteredList] = useState(list);

  const handleFilterClick = (name) => {
    setFilter(name);
  };

  useEffect(() => {
    if (filter === "전체") {
      setFilteredList(list);
    } else {
      setFilteredList(
        list.filter((item) => {
          return filter === item.species;
        })
      );
    }
  }, [filter]);

  return (
    <>
      <div className="mx-[10%] mt-20 text-2xl font-semibold">
        🥳My Collection🥳
      </div>

      <div className="mx-10 mt-4 flex flex-wrap">
        {buttons.map((item) => (
          <AnimalButton
            key={item.id}
            name={item.name}
            handleFilterClick={handleFilterClick}
          />
        ))}
      </div>

      <div className="mx-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-lg font-medium">
        {filteredList.map((item) => {
          return (
            <Card
              key={item.id}
              name={item.name}
              region={item.region}
              degree={item.degree}
              species={item.species}
              imageLink={item.imageLink}
              link={item.link}
            />
          );
        })}
      </div>
    </>
  );
};

export default Collection;
