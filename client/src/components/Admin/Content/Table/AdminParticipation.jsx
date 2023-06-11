import { useState } from "react";
import { post } from "../../../../services/api";

const AdminParticipation = ({ list, listStatus, setListStatus }) => {
  const [edit, setEdit] = useState({});

  const [putBody, setPutBody] = useState({
    title: "",
    description: "",
    image_link: "",
  });

  const toggleEdit = (id) => {
    setEdit((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const onSubmitPut = async () => {
    await post("admin/participation", putBody);
    setListStatus(listStatus + 1);
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
              표시 여부
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
            <td className="px-6 py-4"></td>
            <td className="px-6 py-4"></td>
            <td className="px-6 py-4">
              <button
                className="font-medium text-blue-400 hover:underline mr-3"
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
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {item.title}
                  </th>
                  <td className="px-6 py-4">{item.description}</td>
                  <td className="px-6 py-4">{item.image_link}</td>
                  <td className="px-6 py-4">
                    <span>{item.is_selected}</span>
                    <button className="border px-2 py-1 rounded ml-2 hover:bg-neutral-100">
                      표시 설정
                    </button>
                  </td>
                  <td className="px-6 py-4">
                    {" "}
                    {new Date(item.created_at).toLocaleDateString()}{" "}
                    {new Date(item.created_at).toLocaleTimeString()}
                  </td>
                  <td className="px-6 py-4">
                    <button
                      className="font-medium text-blue-400 hover:underline mr-3"
                      onClick={() => toggleEdit(item.id)}
                    >
                      수정
                    </button>
                    <button className="font-medium text-red-400 hover:underline">
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
                    ></textarea>
                  </th>
                  <td className="px-6 py-4">
                    <textarea
                      className="border rounded px-2 py-1 outline-neutral-300"
                      cols="20"
                      rows="3"
                      placeholder={item.description}
                    ></textarea>
                  </td>
                  <td className="px-6 py-4">
                    <textarea
                      className="border rounded px-2 py-1 outline-neutral-300"
                      cols="20"
                      rows="3"
                      placeholder={item.image_link}
                    ></textarea>
                  </td>
                  <td className="px-6 py-4"></td>
                  <td className="px-6 py-4"></td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => toggleEdit(item.id)}
                      className="font-medium text-blue-400 top:underline mr-3"
                    >
                      적용
                    </button>
                    <button
                      className="font-medium text-red-400 hover:underline"
                      onClick={() => toggleEdit(item.id)}
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

export default AdminParticipation;
