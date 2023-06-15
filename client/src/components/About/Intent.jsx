import { useState } from "react";
import { endangerYearData } from "../../data/endanger_year_data";
import LineChart from "../Data/Chart/LineChart";

const Intent = () => {
  const [activeTab, setActiveTab] = useState("sinabro");

  const toggleTab = (tabId) => {
    setActiveTab(tabId === activeTab ? null : tabId);
  };

  return (
    <div className="border-4 border-[#57443A] border-8 rounded-xl py-4 p-4 md:p-20 text-center">
      <h2 className="text-3xl font-bold">시나브로와 함께해요!</h2>
      <div className="flex flex-col mt-10 md:flex-row items-stretch">
        <div className="w-full md:w-2/3 mr-2">
          <div className="my-10 h-auto">
            <LineChart yearData={endangerYearData} />
          </div>
        </div>
        <div className="w-full md:w-2/3 ml-2">
          <div className="flex mt-2 mb-2">
            <button
              className={`flex-1 focus:outline-none mr-2 text-lg py-2 ${
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
                <p className="leading-8 text-left text-xl text-base text-black-500 :text-gray-400">
                  시나브로는 한국에 서식하는 멸종위기 생물들을 알리고, 생물
                  다양성 유지의 중요성을 알리기 위해 기획된 페이지입니다.
                  <br />
                  우리나라는 난대에서 한대에 이르는 다양한 식생대 분포, 독특한
                  지형,기후 여건, 산림 생태계와 연안 생태계의 연결성 등의
                  이점으로 온대지역 국가 중 국토면적에 비해 상대적으로 다양한
                  생물자원을 보유하고 있습니다.
                  <br />
                  그러나, 개발로 인한 서식지 파괴, 외래종 유입 등으로 인해
                  조금씩 이 소중한 생태계를 잃어가고 있습니다.
                  <br />
                  시나브로는 사라져 가는 야생생물들에 대한 정보와 관련 활동들을
                  제공함으로써 환경 보호에 대한 사회적 관심을 높이는 데에
                  기여하고자 합니다.
                  <br />
                  시나브로와 함께, 우리의 지구를 위해 행동해주세요.
                </p>
              </div>
            )}
            {activeTab === "likes" && (
              <div className="p-4 rounded-lg bg-gray-50 :bg-gray-800">
                <p className="text-xl text-base text-black-500 :text-black-400">
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
                <p className="leading-8 text-xl text-left text-black-500 :text-black-400">
                  좋아요를 얻고, 컬렉션에서 멸종위기 생물을 뽑아주세요!
                  <br />
                  좋아요를 많이 모을수록 희귀한 멸종 위기 생물들을 지켜낼 수
                  있습니다.
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
