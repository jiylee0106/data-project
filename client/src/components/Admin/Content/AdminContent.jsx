import { useEffect, useState } from "react";
import { get } from "../../../services/api";
import AdminNews from "./Table/AdminNews";
import AdminVideo from "./Table/AdminVideo";
import AdminCampaign from "./Table/AdminCampaign";
import AdminParticipation from "./Table/AdminParticipation";

const AdminContent = ({ tab }) => {
  const [list, setList] = useState(null);
  const [listStatus, setListStatus] = useState(0);
  useEffect(() => {
    const tabList = ["news", "video", "participation", "campaign"];
    getList(`admin/${tabList[tab]}`);
  }, [tab, listStatus]);

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
      <div className="w-[95%]">
        {(tab === 0 && (
          <AdminNews
            list={list}
            listStatus={listStatus}
            setListStatus={setListStatus}
          />
        )) ||
          (tab === 1 && (
            <AdminVideo
              list={list}
              listStatus={listStatus}
              setListStatus={setListStatus}
            />
          )) ||
          (tab === 2 && (
            <AdminParticipation
              list={list}
              listStatus={listStatus}
              setListStatus={setListStatus}
            />
          )) ||
          (tab === 3 && (
            <AdminCampaign
              list={list}
              listStatus={listStatus}
              setListStatus={setListStatus}
            />
          ))}
      </div>
    </div>
  );
};

export default AdminContent;
