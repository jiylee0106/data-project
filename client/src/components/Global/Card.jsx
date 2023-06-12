const speciesColors = {
  포유류: "bg-orange-500",
  조류: "bg-gray-500",
  파충류: "bg-red-500",
  양서류: "bg-green-500",
  어류: "bg-pink-500",
  곤충: "bg-teal-500",
  무척추동물: "bg-purple-500",
  식물: "bg-yellow-500",
  해조류: "bg-blue-500",
  고등균류: "bg-yellow-800",
};

const Card = ({ id, name, region, degree, species, imageLink, link }) => {
  const speciesColor = speciesColors[species] || "";

  const cardColor = speciesColor.replace("500", "200");

  return (
    <div
      className={`border border-transparent rounded-md p-4 my-4 ${
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
        <div className="text-center mt-3 font-bold">{name}</div>
        <div className="flex flex-row mt-2 gap-1">
          <div className="border border-transparent basis-2/3 p-2 rounded-md text-slate-400 text-sm text-center font-semibold bg-white">
            멸종위기 야생동물 {degree}급
          </div>
          <div
            className={`border border-transparent basis-1/3 p-2 rounded-md text-white text-sm text-center ${speciesColor} font-semibold`}
          >
            {species}
          </div>
        </div>
        <div className="text-slate-400 text-sm text-center invisible">
          {region}
        </div>
      </a>
    </div>
  );
};

export default Card;
