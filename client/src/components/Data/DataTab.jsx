const DataTab = ({ tab, setTab }) => {

  return (
    <div className="flex justify-center mb-10">
      <div className="w-full text-sm font-medium text-center border-b">
        <ul className="flex flex-row">
          <li className="basis-1/2">
            <button
              className={`text-[1.1rem] sm:text-2xl w-full inline-block p-3.5 pt-5 border-b-2 rounded-t-lg hover:bg-sky-50 text-neutral-500 outline-sky-200${
                tab === 0 && "bg-sky-100 font-bold"
              }`}
              onClick={() => setTab(0)}
            >
              지역별 멸종위기종
            </button>
          </li>
          <li className="basis-1/2">
            <button
              className={`text-[1.1rem] sm:text-2xl w-full inline-block p-3.5 pt-5 border-b-2 rounded-t-lg hover:bg-sky-50 text-neutral-500 outline-sky-200 ${
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
