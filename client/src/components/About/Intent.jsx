import { useState } from "react";
import { endangerYearData } from "../../data/endanger_year_data";
import LineChart from "../Data/Chart/LineChart";

const Intent = () => {
  const [activeTab, setActiveTab] = useState("sinabro");

  const toggleTab = (tabId) => {
    setActiveTab(tabId === activeTab ? null : tabId);
  };

  return (
    <div className="py-4 text-center">
      <h2 className="text-3xl font-bold">시나브로와 함께해요!</h2>
      <div className="flex flex-col mt-10 md:flex-row items-stretch">
        <div className="w-full md:w-2/3 mr-2">
          <div className="my-10 h-auto">
            <LineChart yearData={endangerYearData} />
          </div>
        </div>
        <div className="w-full md:w-2/3 ml-2">
          <div className="flex">
            <button
              className={`flex-1 focus:outline-none mr-2 text-lg ${
                activeTab === "sinabro"
                  ? "text-neutral-100 bg-blue-400 rounded-lg"
                  : "text-gray-600 hover:text-blue-400"
              }`}
              onClick={() => toggleTab("sinabro")}
            >
              시나브로
            </button>
            <button
              className={`flex-1 focus:outline-none mr-2 text-lg ${
                activeTab === "likes"
                  ? "text-neutral-100 bg-blue-400 rounded-lg"
                  : "text-gray-600 hover:text-blue-400"
              }`}
              onClick={() => toggleTab("likes")}
            >
              좋아요
            </button>
            <button
              className={`flex-1 focus:outline-none mr-2 text-lg ${
                activeTab === "collection"
                  ? "text-neutral-100 bg-blue-400 rounded-lg"
                  : "text-gray-600 hover:text-blue-400"
              }`}
              onClick={() => toggleTab("collection")}
            >
              컬렉션
            </button>
          </div>
          <div className="mt-2">
            {activeTab === "sinabro" && (
              <div className="p-4 rounded-lg bg-gray-50 :bg-gray-800">
                <p className="text-base text-gray-500 :text-gray-400">
                  시나브로는 한국의 멸종 위기에 처한 생물들을 알리고, 생물
                  다양성 유지의 중요성을 인식시키는 것을 목표로 하고 있습니다.
                  우리 나라는 아름다운 생태계를 보유한 다양한 동식물의 독특한
                  서식지입니다. 그러나 우리는 조금씩 이 소중한 생태계를 잃어가고
                  있습니다. 시나브로는 환경 보호에 대한 사회적 관심을 높이는데
                  기여하고, 더 나아가 한 발자국씩 변화를 이끌어가기 위해 노력할
                  것입니다. 시나브로에서는 멸종 위기에 처한 종들에 대한 정보를
                  제공하며, 여러분들도 우리의 목표에 동참하여 환경 보호에 기여할
                  수 있습니다. 우리의 작은 노력이 모여 더 아름다운 자연을
                  만들어갑시다.
                </p>
              </div>
            )}
            {activeTab === "likes" && (
              <div className="p-4 rounded-lg bg-gray-50 :bg-gray-800">
                <p className="text-base text-gray-500 :text-gray-400">
                  환상종 카드를 얻기 위해서는 좋아요가 필요합니다!
                </p>
                <p className="mt-4">
                  <strong className="text-black">1급</strong> = ❤️ 15개
                </p>
                <p className="mt-2">
                  <strong className="text-black">2급</strong> = ❤️ 5개
                </p>
                <div className="mt-4">
                  <p>
                    <strong className="text-black">❤️ 1개</strong>
                  </p>
                  <ul className="list-disc list-inside">
                    <li>한국의 멸종 위기종 알아보기 클릭</li>
                    <li>오늘의 환상종 확인하기</li>
                    <li>동참하기</li>
                  </ul>
                  <p className="mt-4">
                    <strong className="text-black">❤️ 2개</strong>
                  </p>
                  <ul className="list-disc list-inside">
                    <li>퀴즈 참여하기</li>
                  </ul>
                  <p className="mt-4">
                    <strong className="text-black">❤️ 3개</strong>
                  </p>
                  <ul className="list-disc list-inside">
                    <li>멸종 위기종 영상 시청 완료</li>
                  </ul>
                  <p className="mt-4">
                    <strong className="text-black">❤️ 5개</strong>
                  </p>
                  <ul className="list-disc list-inside">
                    <li>캠페인 참여하기</li>
                  </ul>
                  <p className="text-base text-gray-500 :text-gray-400">
                    캠페인 참여를 제외한 활동들은 하루에 한번만 좋아요 획득이
                    가능합니다.
                  </p>
                </div>
              </div>
            )}
            {activeTab === "collection" && (
              <div className="p-4 rounded-lg bg-gray-50 :bg-gray-800">
                <p className="text-base text-gray-500 :text-gray-400">
                  여러분이 컬렉션에 모아둔 환상종들을 확인해 보세요.
                  <br />
                  여러분이 좋아요를 모을수록 희귀한 멸종 위기 생물들을 만나보실
                  수 있습니다.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intent;
