import PropTypes from "prop-types";

const Card = ({ name, species, imageLink, link }) => {
  return (
    <>
      <div className="border rounded-md p-6 m-8">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={imageLink} style={{ width: "200px", height: "auto" }} />
          <div className="mt-5 text-center">{name}</div>
          <div className="text-slate-400 text-sm text-center">{species}</div>
        </a>
      </div>
    </>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  imageLink: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Card;
