import { useState } from "react";
import AdminContent from "./Content/AdminContent";
import AdminTab from "./Tab/AdminTab";

const Admin = () => {
  const [tab, setTab] = useState(0);
  return (
    <div className="my-20">
      <h1 className="text-center text-2xl font-bold mb-10 mt-24 text-neutral-700">
        관리자 페이지
      </h1>
      <div className="flex flex-row">
        <div className="basis-1/6">
          <AdminTab tab={tab} setTab={setTab} />
        </div>
        <div className="basis-5/6">
          <AdminContent tab={tab} />
        </div>
      </div>
    </div>
  );
};

export default Admin;
