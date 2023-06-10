import { useEffect, useState } from "react";
import { get } from "../../../services/api";
import AdminNews from "./Table/AdminNews";
import AdminVideo from "./Table/AdminVideo";
import AdminCampaign from "./Table/AdminCampaign";
import AdminParticipation from "./Table/AdminParticipation";

const AdminContent = ({ tab }) => {
  const [list, setList] = useState(null);
  useEffect(() => {
    let link;
    switch (tab) {
      case 0:
        link = "news";
        break;
      case 1:
        link = "video";
        break;
      case 2:
        link = "campaign";
        break;
      case 3:
        link = "participation";
        break;
    }
    getList(`admin/${link}`);
  }, [tab]);

  const getList = async (link) => {
    try {
      const result = await get(link);
      setList(result.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    console.log(list);
  }, [list]);

  return (
    <div className="ml-10 w-full">
      <div>
        <button className="border px-3 py-2 rounded mb-5 hover:bg-neutral-100">
          추가하기
        </button>
      </div>
      <div className="w-full">
        {(tab === 0 && <AdminNews list={list} />) ||
          (tab === 1 && <AdminVideo list={list} />) ||
          (tab === 2 && <AdminCampaign list={list} />) ||
          (tab === 3 && <AdminParticipation list={list} />)}
      </div>
    </div>
  );
};

export default AdminContent;
