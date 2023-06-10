const tabList = [
  {
    id: 0,
    title: "소식 관리",
  },
  {
    id: 1,
    title: "영상 관리",
  },
  {
    id: 2,
    title: "캠페인 관리",
  },
  {
    id: 3,
    title: "동참 관리",
  },
];

const AdminTab = ({ setTab }) => {
  return (
    <div className="border-r h-screen p-5">
      <ul>
        {tabList.map((item) => (
          <li className="hover:bg-neutral-100 rounded-xl my-5" key={item.id}>
            <button className="px-3 py-2" onClick={() => setTab(item.id)}>
              {item.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminTab;
