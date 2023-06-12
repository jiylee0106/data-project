import { useCallback } from "react";
import MapSvg from "./MapSvg";

const Map = ({ setRegion }) => {
  const handleClick = useCallback(
    (e) => {
      const paths = document.getElementsByTagName("path");

      for (let path of paths) {
        path.classList.remove("fill-rose-500");
      }

      if (e.target.id === "parent") {
        setRegion("전국");
        return;
      }

      e.target.classList.add("fill-rose-500");
      setRegion(e.target.id);
    },
    [setRegion]
  );

  return (
    <div className="flex justify-center">
      <MapSvg handleClick={handleClick} />
    </div>
  );
};

export default Map;
