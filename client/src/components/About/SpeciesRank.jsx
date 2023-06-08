const SpeciesRank = () => {
  return (
    <div className="py-4">
      <h2 className="text-3xl font-bold mb-4">멸종위기 생물이란?</h2>

      <div className="flex items-center mb-8">
        <div className="w-1/4 mr-4">
          <img
            src="https://cdn.discordapp.com/attachments/1114069039757676599/1114075473459302410/FxcOYbmacAA10-p.jpg"
            alt="멸종 위기 1급 이미지"
            className="rounded-lg max-w-full"
          />
        </div>
        <div className="w-3/4">
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="text-xl font-bold mb-2">멸종 위기종 1급</h3>
            <p className="text-lg">
              자연적 또는 인위적 위협요인으로 개체 수가<br />
              많이 줄어들어 멸종위기에 처한 야생생물
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center">
        <div className="w-1/4 mr-4">
          <img
            src="https://cdn.discordapp.com/attachments/1114069039757676599/1114075473459302410/FxcOYbmacAA10-p.jpg"
            alt="멸종 위기 2급 이미지"
            className="rounded-lg max-w-full"
          />
        </div>
        <div className="w-3/4">
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="text-xl font-bold mb-2">멸종 위기종 2급</h3>
            <p className="text-lg">
              자연적 또는 인위적 위협요인으로 개체 수가<br />
              크게 줄어들고 있어 현재의 위협요인이 제거되거나 완화되지 아니할 경우<br /> 
              가까운 장래에 멸종위기에 처할 우려가 있는 야생생물
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeciesRank;
