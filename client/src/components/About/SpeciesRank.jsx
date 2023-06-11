const SpeciesRank = () => {
  return (
    <div className="py-4 p-4 md:p-20">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          멸종위기 생물이란?
        </h2>

        <p className="text-lg md:text-xl mb-8">
          야생생물 보호 및 관리에 관한 법률에 따라 야생생물을 대상으로 효과적인
          보호를 위하여 환경부가 지정 보호하는 생물들을 말합니다. 멸종위기
          야생생물은 자연적 또는 인위적 위협요인으로 인하여 개체 수가 현격히
          감소하거나 소수만 남아 있어 가까운 장래에 절멸될 위기에 처해 있는
          야생생물을 말하며, 법으로 지정하여 보호 · 관리하는 법정보호종으로,
          현재 멸종위기 야생생물 1급과 멸종위기 야생생물 2급으로 나누어 지정
          관리하고 있습니다.
        </p>
      </div>
      <div>
        <div className="flex justify-center mb-8">
          <div className="w-1/2 pr-2 flex justify-center">
            <img
              src="images/AboutRank1.jpg"
              alt="멸종 위기 1급 이미지"
              className="rounded-lg max-w-full h-auto"
            />
          </div>
          <div className="w-1/2 pl-2 flex justify-center">
            <img
              src="images/AboutRank2.jpg"
              alt="멸종 위기 2급 이미지"
              className="rounded-lg max-w-full h-auto"
            />
          </div>
        </div>

        <div className="flex justify-center mb-8">
          <div className="w-1/2 pr-2 flex w-full">
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg w-full">
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-left">
                멸종 위기종 1급
              </h3>
              <p className="text-lg md:text-xl text-left">
                자연적 또는 인위적 위협요인으로 개체 수가
                <br />
                많이 줄어들어 멸종위기에 처한 야생생물
              </p>
            </div>
          </div>
          <div className="w-1/2 pl-2 flex justify-center">
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg w-full">
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-left">
                멸종 위기종 2급
              </h3>
              <p className="text-lg md:text-xl text-left">
                자연적 또는 인위적 위협요인으로 개체 수가
                <br />
                크게 줄어들고 있어 현재의 위협요인이 제거되거나 완화되지 아니할
                경우
                <br />
                가까운 장래에 멸종위기에 처할 우려가 있는 야생생물
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeciesRank;
