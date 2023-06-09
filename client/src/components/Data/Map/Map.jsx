import MapSvg from "./MapSvg";

const Map = ({ setRegion }) => {
  return (
    <div className="w-[40%]">
      <MapSvg setRegion={setRegion} />
    </div>
  );
};

export default Map;
