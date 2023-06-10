import { useState } from "react";
import AdminContent from "./Content/AdminContent";
import AdminTab from "./Tab/AdminTab";

const Admin = () => {
  const [tab, setTab] = useState(0);
  return (
    <div className="my-20">
      <h1 className="text-center text-2xl font-bold my-10">관리자 페이지</h1>
      <div className="flex flex-row">
        <AdminTab tab={tab} setTab={setTab} />
        <AdminContent tab={tab} />
      </div>
    </div>
  );
};

export default Admin;
