import Card from "../Card";

const list = [
  {
    id: 1,
    name: "수달",
    species: "족제비과",
    imageLink: "https://media.discordapp.net/attachments/1114069039757676599/1114084929794482176/dab60569596261c385ba8e401315566e.jpg?width=661&height=662",
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
    imageLink:
      "https://img.sbs.co.kr/newimg/news/20200209/201400647_700.jpg",
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
      <div className="mx-[10%] mt-20 text-2xl font-semibold">🐰 오늘의 환상종은 무엇일까요?</div>
      <div className="mx-[10%] flex flex-wrap text-lg font-medium justify-between">
        {list.map((item) => (
            <Card
              key={item.id}
              name={item.name}
              species={item.species}
              imageLink={item.imageLink}
              link={item.link}
            />
        ))}
        {/* <div className="m-8 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              aria-hidden="true"
              className="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div> */}
      </div>
    </>
  );
};

export default DailySpecies;
