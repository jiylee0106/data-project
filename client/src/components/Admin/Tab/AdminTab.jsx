const tabList = [
  {
    id: 0,
    title: "유저 관리",
  },
  {
    id: 1,
    title: "소식 관리",
  },
  {
    id: 2,
    title: "영상 관리",
  },
  {
    id: 3,
    title: "동참 관리",
  },
  {
    id: 4,
    title: "캠페인 관리",
  },
];

const AdminTab = ({ tab, setTab }) => {
  return (
    <div className="border-r h-screen p-5">
      <h1 className="text-xl font-bold text-neutral-700">관리자 페이지</h1>
      <ul>
        {tabList.map((item, index) => (
          <li
            className={`hover:bg-neutral-200 rounded-xl my-5 cursor-pointer text-neutral-700 ${
              tab === index && "bg-neutral-200"
            }`}
            key={item.id}
            onClick={() => setTab(item.id)}
          >
            <div className="px-3 py-2">{item.title}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminTab;
