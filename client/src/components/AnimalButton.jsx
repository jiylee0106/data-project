const AnimalButton = ({ name, image }) => {
  return (
    <div className="border rounded-full">
      <div className="flex items-center justify-center">
        <figure className="max-w-lg h-70 overflow-hidden">
          <img
            className="h-full w-full object-contain object-center rounded-lg"
            src={image}
            alt="Species image"
          />
        </figure>
      </div>
      <div className="mt-5 text-center">{name} ?종</div>
    </div>
  );
};

export default AnimalButton;
