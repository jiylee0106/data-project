import { useState } from "react";
import AdminContent from "./Content/AdminContent";
import AdminTab from "./Tab/AdminTab";

const Admin = () => {
  const [tab, setTab] = useState(0);
  return (
    <div className="my-24">
      <div className="flex flex-row">
        <div className="basis-1/6">
          <AdminTab tab={tab} setTab={setTab} />
        </div>
        <div className="basis-5/6">
          <p className="ml-5 mb-2 font-light text-sm">
            * Input에 빈 내용이 없게 해주세요
          </p>
          <AdminContent tab={tab} />
        </div>
      </div>
    </div>
  );
};

export default Admin;
