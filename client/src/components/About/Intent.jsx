import { useState } from 'react';

const Intent = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const toggleTab = (tabId) => {
    setActiveTab(tabId === activeTab ? null : tabId);
  };

  return (
    <div className="mt-14 py-4">
      <h2 className="text-3xl font-bold mb-2">시나브로와 함께해요!</h2>
      <div className="flex items-center">
        <div className="w-1/4 lg:w-1/3 mr-4">
          <img
            src="https://cdn.discordapp.com/attachments/1114069039757676599/1114075473459302410/FxcOYbmacAA10-p.jpg"
            alt="기획 의도 이미지"
            className="rounded-lg max-w-full"
          />
        </div>
        <div>
          <p className="text-lg">기획 의도에 대한 설명입니다.</p>
          <div className="flex justify-end mt-2">
            <button className={`focus:outline-none mr-2 ${activeTab === 'profile' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`} onClick={() => toggleTab('profile')}>
              시나브로
            </button>
            <button className={`focus:outline-none mr-2 ${activeTab === 'likes' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`} onClick={() => toggleTab('likes')}>
              좋아요
            </button>
            <button className={`focus:outline-none mr-2 ${activeTab === 'collection' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`} onClick={() => toggleTab('collection')}>
              컬렉션
            </button>
          </div>
          <div className="mt-2">
            {activeTab === 'profile' && (
              <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  기획 의도에 대한 설명입니다.
                </p>
              </div>
            )}
            {activeTab === 'likes' && (
              <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  좋아요에 대한 설명입니다.
                </p>
              </div>
            )}
            {activeTab === 'collection' && (
              <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  컬렉션에 대한 설명입니다.
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
