import { useEffect, useState } from "react";
import { get } from "../../../services/api";

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
    <div className="ml-10">
      <div>
        <button className="border px-3 py-2 rounded mb-5 hover:bg-neutral-100">
          추가하기
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default AdminContent;
