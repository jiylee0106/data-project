const SpeciesRank = () => {
  return (
    <div className="rounded-xl py-4 p-10 md:p-20">
      <div>
        <h2 className="text-x1 md:text-3xl font-bold">멸종위기 생물이란?</h2>
        <p className="leading-8 text-base mt-8 md:text-xl mb-10">
          야생생물 보호 및 관리에 관한 법률에 따라 야생생물을 대상으로 효과적인
          보호를 위하여 환경부가 지정 보호하는 생물들을 말합니다. 멸종위기
          야생생물은 자연적 또는 인위적 위협요인으로 인하여 개체 수가 현격히
          감소하거나 소수만 남아 있어 가까운 장래에 절멸될 위기에 처해 있는
          야생생물을 말하며, 법으로 지정하여 보호,관리하는 법정보호종으로, 현재
          멸종위기 야생생물 1급과 멸종위기 야생생물 2급으로 나누어 지정 관리하고
          있습니다.
        </p>
      </div>
      <div>
        <div className="md:flex justify-center mb-6 gap-5">
          <div className="basis-1/2 flex w-full mb-4 md:mb-0">
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg w-full">
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-left">
                멸종위기종 1급
              </h3>
            </div>
          </div>
          <div className="basis-1/2 flex w-full">
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg w-full">
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-left">
                멸종위기종 2급
              </h3>
            </div>
          </div>
        </div>
        <div className="md:flex justify-center mb-4 gap-5">
          <div className="border-4 rounded-lg border-black basis-1/2 flex w-full mb-4 md:mb-0">
            <img
              src="images/AboutRank1.jpg"
              alt="멸종위기 1급 이미지"
              className="rounded-lg w-full h-auto"
            />
          </div>
          <div className="border-4 rounded-lg border-black basis-1/2 flex w-full">
            <img
              src="images/AboutRank2.jpg"
              alt="멸종위기 2급 이미지"
              className="rounded-lg w-full h-auto"
            />
          </div>
        </div>
        <div className="md:flex justify-center mb-6 gap-5">
          <div className="basis-1/2 flex w-full mb-4 md:mb-0">
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg w-full">
              <p className="text-lg md:text-xl text-left">
                자연적 또는 인위적 위협요인으로 개체 수가 많이 줄어들어
                멸종위기에 처한 야생생물
              </p>
            </div>
          </div>
          <div className="basis-1/2 flex w-full">
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg w-full">
              <p className="text-lg md:text-xl text-left">
                자연적 또는 인위적 위협요인으로 개체 수가 크게 줄어들고 있어
                현재의 위협요인이 제거되거나 완화되지 아니할 경우 가까운 장래에
                멸종위기에 처할 우려가 있는 야생생물
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeciesRank;
