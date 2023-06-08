const AnimalButton = ({ name, image }) => {
  return (
    <div className="rounded-full m-4">
      <div className="flex items-center justify-center">
        <figure className="border max-w-lg h-70 p-3 overflow-hidden rounded-full">
          <img className="h-10 w-10 object-contain object-center" src={image} />
        </figure>
      </div>
      <div className="text-center">{name} n종</div>
    </div>
  );
};

export default AnimalButton;
