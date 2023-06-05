import Card from "../Card";

const list = [
  {
    id: 1,
    name: "수달",
    species: "족제비과",
    imageLink:
      "https://media.discordapp.net/attachments/1114069039757676599/1114084929794482176/dab60569596261c385ba8e401315566e.jpg?width=661&height=662",
    link: "https://www.nie.re.kr/nie/pgm/edSpecies/view.do?menuNo=200121&speciesSn=7",
  },
  {
    id: 2,
    name: "여우",
    species: "개과",
    imageLink:
      "https://i.namu.wiki/i/mIi4JlIMiy7JpSaeG2samFF8CiAAPSP_aDpvCTtalV9kK7tfzUt09KOUodp-Pw7rmLFEdcVsadcIN4lehvgTKg.webp",
    link: "https://www.nie.re.kr/nie/pgm/edSpecies/view.do?menuNo=200121&speciesSn=9",
  },
  {
    id: 3,
    name: "늑대",
    species: "개과",
    imageLink: "https://img.sbs.co.kr/newimg/news/20200209/201400647_700.jpg",
    link: "https://www.nie.re.kr/nie/pgm/edSpecies/view.do?menuNo=200121&speciesSn=1",
  },
  {
    id: 4,
    name: "눈사람",
    species: "H2O",
    imageLink:
      "https://cdn.discordapp.com/attachments/1114069039757676599/1114075473459302410/FxcOYbmacAA10-p.jpg",
    link: "https://namu.wiki/w/%EB%88%88%EC%82%AC%EB%9E%8C",
  },
  {
    id: 5,
    name: "하늘다람쥐",
    species: "청설모과",
    imageLink:
      "https://cdn.univ20.com/wp-content/uploads/2015/07/b3f4c1f2d3ab564d4901cdf151fe64cc.jpg",
    link: "https://www.nie.re.kr/nie/pgm/edSpecies/view.do?menuNo=200121&speciesSn=20",
  },
];

const DailySpecies = () => {
  return (
    <>
      <div className="mx-[10%] mt-20 text-2xl font-semibold">
        🐰 오늘의 환상종은 무엇일까요?
      </div>
      <div className="mx-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-lg font-medium">
        {list.map((item) => (
          <Card
            key={item.id}
            name={item.name}
            species={item.species}
            imageLink={item.imageLink}
            link={item.link}
          />
        ))}
      </div>
    </>
  );
};

export default DailySpecies;
