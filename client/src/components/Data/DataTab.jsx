const DataTab = ({ tab, setTab }) => {
  return (
    <div className="flex justify-center mb-10">
      <div className="w-full lg:mx-40 text-sm font-medium text-center border-b">
        <ul className="flex flex-row">
          <li className="basis-1/2">
            <button
              className={`w-full inline-block p-4 border-b-2 rounded-t-lg hover:bg-sky-50 text-neutral-500 ${
                tab === 0 && "bg-sky-100 font-bold"
              }`}
              onClick={() => setTab(0)}
            >
              지역별 멸종위기종
            </button>
          </li>
          <li className="basis-1/2">
            <button
              className={`w-full inline-block p-4 border-b-2 rounded-t-lg hover:bg-sky-50 text-neutral-500 ${
                tab === 1 && "bg-sky-100 font-bold"
              }`}
              onClick={() => setTab(1)}
            >
              원인
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DataTab;
