import { useState } from "react";
import AdminContent from "./Content/AdminContent";
import AdminTab from "./Tab/AdminTab";

const Admin = () => {
  const [tab, setTab] = useState(0);
  return (
    <div className="my-20 flex flex-row">
      <AdminTab setTab={setTab} />
      <AdminContent tab={tab} />
    </div>
  );
};

export default Admin;
