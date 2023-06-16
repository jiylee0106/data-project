import { useState } from "react";
import { delApi, patchApi, postApi } from "../../../../services/api";

const initialPutBody = {
  title: "",
  description: "",
  image_link: "",
  type: "Campaign1",
};

const initialEditBody = {
  title: "",
  description: "",
  image_link: "",
};

const AdminCampaign = ({ list, listStatus, setListStatus }) => {
  const [edit, setEdit] = useState({});
  const [putBody, setPutBody] = useState(initialPutBody);
  const [editBody, setEditBody] = useState(initialEditBody);

  const toggleEdit = (item) => {
    setEdit((prev) => ({ ...prev, [item.id]: !prev[item.id] }));
    setEditBody({
      ...editBody,
      title: item.title,
      description: item.description,
      image_link: item.image_link,
    });
  };

  const onSubmitPut = async () => {
    await postApi("admin/campaign", putBody);
    setListStatus(listStatus + 1);
    setPutBody(initialPutBody);
  };

  const onDelete = async (id) => {
    if (confirm("정말 삭제하시겠습니까?")) {
      await delApi(`admin/campaign/${id}`);
      setListStatus(listStatus + 1);
    }
  };

  const onEdit = async (id, type) => {
    await patchApi(`admin/campaign`, { ...editBody, type });
    setListStatus(listStatus + 1);
    setEdit((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <>
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              제목
            </th>
            <th scope="col" className="px-6 py-3">
              내용
            </th>
            <th scope="col" className="px-6 py-3">
              이미지 링크
            </th>
            <th scope="col" className="px-6 py-3">
              캠페인 타입
            </th>
            <th scope="col" className="px-6 py-3">
              생성 날짜
            </th>
            <th scope="col" className="px-6 py-3">
              액션
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              <textarea
                className="border rounded px-2 py-1 outline-neutral-300"
                cols="20"
                rows="3"
                value={putBody.title}
                onChange={(e) =>
                  setPutBody({ ...putBody, title: e.target.value })
                }
              ></textarea>
            </th>
            <td className="px-6 py-4">
              <textarea
                className="border rounded px-2 py-1 outline-neutral-300"
                cols="20"
                rows="3"
                value={putBody.description}
                onChange={(e) =>
                  setPutBody({ ...putBody, description: e.target.value })
                }
              ></textarea>
            </td>
            <td className="px-6 py-4">
              <textarea
                className="border rounded px-2 py-1 outline-neutral-300"
                cols="20"
                rows="3"
                value={putBody.image_link}
                onChange={(e) =>
                  setPutBody({ ...putBody, image_link: e.target.value })
                }
              ></textarea>
            </td>
            <td className="px-6 py-4">
              <select
                className="cursor-pointer border px-2 py-1 outline-neutral-300"
                value={putBody.type}
                onChange={(e) =>
                  setPutBody({ ...putBody, type: e.target.value })
                }
              >
                <option value="Campaign1">Campaign1</option>
                <option value="Campaign2">Campaign2</option>
                <option value="Campaign3">Campaign3</option>
              </select>
            </td>
            <td className="px-6 py-4"></td>
            <td className="px-6 py-4">
              <button
                className="font-medium text-blue-400 hover:underline mr-3 min-w-[30px]"
                onClick={onSubmitPut}
              >
                추가
              </button>
            </td>
          </tr>
          {list?.map((item) => (
            <tr key={item.id} className="bg-white border-b">
              {!edit[item.id] ? (
                <>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 max-w-[200px] break-words"
                  >
                    {item.title}
                  </th>
                  <td className="px-6 py-4 max-w-[200px] break-words">
                    {item.description}
                  </td>
                  <td className="px-6 py-4 max-w-[200px] break-words">
                    {item.image_link}
                  </td>
                  <td className="px-6 py-4 max-w-[200px] break-words">
                    {item.type}
                  </td>
                  <td className="px-6 py-4 max-w-[200px] break-words">
                    {" "}
                    {new Date(item.created_at).toLocaleDateString()}{" "}
                    {new Date(item.created_at).toLocaleTimeString()}
                  </td>
                  <td className="px-6 py-4">
                    <button
                      className="font-medium text-blue-400 hover:underline mr-3"
                      onClick={() => toggleEdit(item)}
                    >
                      수정
                    </button>
                    <button
                      className="font-medium text-red-400 hover:underline"
                      onClick={() => onDelete(item.id)}
                    >
                      삭제
                    </button>
                  </td>
                </>
              ) : (
                <>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    <textarea
                      className="border rounded px-2 py-1 outline-neutral-300"
                      cols="20"
                      rows="3"
                      placeholder={item.title}
                      value={editBody.title}
                      onChange={(e) =>
                        setEditBody({ ...editBody, title: e.target.value })
                      }
                    ></textarea>
                  </th>
                  <td className="px-6 py-4">
                    <textarea
                      className="border rounded px-2 py-1 outline-neutral-300"
                      cols="20"
                      rows="3"
                      placeholder={item.description}
                      value={editBody.description}
                      onChange={(e) =>
                        setEditBody({
                          ...editBody,
                          description: e.target.value,
                        })
                      }
                    ></textarea>
                  </td>
                  <td className="px-6 py-4">
                    <textarea
                      className="border rounded px-2 py-1 outline-neutral-300"
                      cols="20"
                      rows="3"
                      placeholder={item.image_link}
                      value={editBody.image_link}
                      onChange={(e) =>
                        setEditBody({ ...editBody, image_link: e.target.value })
                      }
                    ></textarea>
                  </td>
                  <td className="px-6 py-4"></td>
                  <td className="px-6 py-4"></td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => onEdit(item.id, item.type)}
                      className="font-medium text-blue-400 top:underline mr-3"
                    >
                      적용
                    </button>
                    <button
                      className="font-medium text-red-400 hover:underline"
                      onClick={() => toggleEdit(item)}
                    >
                      취소
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default AdminCampaign;
