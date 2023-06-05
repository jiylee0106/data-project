const Card = ({ name, species, imageLink, link }) => {
  return (
    <div className="border rounded-md p-6 my-8">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="flex items-center justify-center">
          <figure className="max-w-lg h-70">
            <img
              className="h-full w-full object-cover object-center rounded-lg"
              src={imageLink}
              alt="image description"
            />
          </figure>
        </div>
        <div className="mt-5 text-center">{name}</div>
        <div className="text-slate-400 text-sm text-center">{species}</div>
      </a>
    </div>
  );
};

export default Card;
