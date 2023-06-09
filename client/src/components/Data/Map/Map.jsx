import MapSvg from "./MapSvg";

const Map = ({ setRegion }) => {
  return (
    <div className="flex justify-center">
      <MapSvg setRegion={setRegion} />
    </div>
  );
};

export default Map;
