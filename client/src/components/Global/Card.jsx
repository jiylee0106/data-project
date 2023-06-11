const Card = ({ id, name, region, degree, species, imageLink, link }) => {
  return (
    <div className="border rounded-md p-6 my-8">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="flex items-center justify-center">
          <figure className="max-w-lg h-70 overflow-hidden">
            <img
              className="h-full w-full object-contain object-center rounded-lg"
              src={imageLink}
              alt="image description"
              onError={(e) => {
                e.target.src = `endangered/${id}.jpeg`;
              }}
            />
          </figure>
        </div>
        <div className="mt-5 text-slate-400 text-sm text-center">
          멸종위기 야생동물 {degree}급
        </div>
        <div className="text-center">{name}</div>
        <div className="text-slate-400 text-sm text-center">{species}</div>
        <div className="text-slate-400 text-sm text-center invisible">
          {region}
        </div>
      </a>
    </div>
  );
};

export default Card;
