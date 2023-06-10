const AdminTab = ({ setTab }) => {
  return (
    <div className="border-r h-screen p-5">
      <ul>
        <li>
          <button className="px-3 py-2" onClick={() => setTab(0)}>
            소식 관리
          </button>
        </li>
        <li>
          <button className="px-3 py-2" onClick={() => setTab(1)}>
            영상 관리
          </button>
        </li>
        <li>
          <button className="px-3 py-2" onClick={() => setTab(2)}>
            캠페인 관리
          </button>
        </li>
        <li>
          <button className="px-3 py-2" onClick={() => setTab(3)}>
            동참 관리
          </button>
        </li>
      </ul>
    </div>
  );
};

export default AdminTab;
