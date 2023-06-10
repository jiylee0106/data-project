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
          <AdminContent tab={tab} />
        </div>
      </div>
    </div>
  );
};

export default Admin;
