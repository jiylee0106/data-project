import All from "./AnimalSVG/all";
import Mine from "./AnimalSVG/Mine";
import Mammalia from "./AnimalSVG/Mammalia";
import Bird from "./AnimalSVG/Bird";
import Turtle from "./AnimalSVG/Turtle";
import Salamander from "./AnimalSVG/Salamander";
import Fish from "./AnimalSVG/Fish";
import Insect from "./AnimalSVG/Insect";
import Invertebrate from "./AnimalSVG/Invertebrate";
import Plant from "./AnimalSVG/Plant";
import Algae from "./AnimalSVG/Algae";
import Mushroom from "./AnimalSVG/Mushroom";

const AnimalButton = ({ name, handleFilterClick }) => {
  return (
    <button
      className="m-4"
      onClick={() => {
        handleFilterClick(name);
      }}
    >
      <div className="flex items-center justify-center">
        <figure className="border w-20 h-20 p-3 overflow-hidden rounded-full flex items-center justify-center">
          {(name === "전체" && <All name="전체" />) ||
            (name === "내꺼!" && <Mine name="내꺼!" />) ||
            (name === "포유류" && <Mammalia name="포유류" />) ||
            (name === "조류" && <Bird name="조류" />) ||
            (name === "파충류" && <Turtle name="파충류" />) ||
            (name === "양서류" && <Salamander name="양서류" />) ||
            (name === "어류" && <Fish name="어류" />) ||
            (name === "곤충" && <Insect name="곤충" />) ||
            (name === "무척추동물" && <Invertebrate name="무척추동물" />) ||
            (name === "식물" && <Plant name="식물" />) ||
            (name === "해조류" && <Algae name="해조류" />) ||
            (name === "고등균류" && <Mushroom name="고등균류" />)}
        </figure>
      </div>
      <div className="text-center">{name} n종</div>
    </button>
  );
};

export default AnimalButton;
