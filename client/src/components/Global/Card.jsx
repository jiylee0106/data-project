const speciesColors = {
  포유류: "orange-500",
  조류: "indigo-500",
  파충류: "red-500",
  양서류: "green-500",
  어류: "pink-500",
  곤충: "sky-500",
  무척추동물: "purple-500",
  식물: "yellow-500",
  해조류: "lime-500",
  고등균류: "yellow-800",
};

const Card = ({ id, name, degree, species, imageLink, link }) => {
  const speciesColor = speciesColors[species] || "";

  const cardColor = speciesColor.replace("500", "200");

  return (
    <div
      className={`border border-[0.3rem] border-solid border-${speciesColor} rounded-2xl p-4 my-4 bg-${
        species === "고등균류" ? "bg-yellow-500" : cardColor
      }`}
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="flex items-center justify-center">
          <figure className="max-w-lg w-[21rem] h-[16rem] overflow-hidden">
            <img
              className="w-full h-full object-cover object-center rounded-lg"
              src={imageLink}
              alt="image description"
              onError={(e) => {
                e.target.src = `endangered/${id}.jpeg`;
              }}
            />
          </figure>
        </div>
        <div className="text-center text-2xl mt-3 font-bold">{name}</div>
        <div className="flex flex-col mt-2 gap-1 whitespace-nowrap">
          <div
            className={`border border-transparent flex-grow p-2 pt-2.5 rounded-md text-white text-lg text-center font-semibold ${
              degree === 1
                ? "bg-neutral-700"
                : degree === 2
                ? "bg-neutral-400"
                : ""
            }`}
          >
            멸종위기 야생동물 {degree}급
          </div>
          <div
            className={`border border-transparent p-2 pt-2.5  rounded-md text-white text-lg text-center bg-${speciesColor} font-semibold`}
          >
            {species}
          </div>
        </div>
      </a>
    </div>
  );
};

export default Card;
