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
      if (error.response.data.message === "관리자 권한이 없습니다") {
        location.href = "/";
      }
    }
  };

  return (
    <div className="ml-10 w-full">
      <div>
        <button className="border px-3 py-2 rounded mb-5 hover:bg-neutral-100 text-neutral-700">
          추가하기
        </button>
      </div>
      <div className="w-[95%]">
        {(tab === 0 && <AdminNews list={list} />) ||
          (tab === 1 && <AdminVideo list={list} />) ||
          (tab === 2 && <AdminParticipation list={list} />) ||
          (tab === 3 && <AdminCampaign list={list} />)}
      </div>
    </div>
  );
};

export default AdminContent;
