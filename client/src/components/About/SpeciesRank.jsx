const SpeciesRank = () => {
  return (
    <div className="py-4">
      <h2 className="text-3xl font-bold mb-4">멸종위기 생물이란?</h2>

      <div className="flex items-center mb-4">
        <img
          src="https://cdn.discordapp.com/attachments/1114069039757676599/1114075473459302410/FxcOYbmacAA10-p.jpg"
          alt="멸종 위기 1급 이미지"
          className="w-1/4 mr-4"
        />
        <p className="text-lg">멸종 위기 1급에 대한 설명입니다.</p>
      </div>

      <div className="flex items-center">
        <img
          src="https://cdn.discordapp.com/attachments/1114069039757676599/1114075473459302410/FxcOYbmacAA10-p.jpg"
          alt="멸종 위기 2급 이미지"
          className="w-1/4 mr-4"
        />
        <p className="text-lg">멸종 위기 2급에 대한 설명입니다.</p>
      </div>
    </div>
  );
};

export default SpeciesRank;
