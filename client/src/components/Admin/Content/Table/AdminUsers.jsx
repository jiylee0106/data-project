import { delApi } from "../../../../services/api";

const AdminUsers = ({ list, listStatus, setListStatus }) => {
  const onDelete = async (id) => {
    if (confirm("정말 삭제하시겠습니까?")) {
      try {
        await delApi(`user/${id}`);
        setListStatus(listStatus + 1);
      } catch (error) {
        alert(error.response.data.message);
      }
    }
  };

  return (
    <>
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              유저ID
            </th>
            <th scope="col" className="px-6 py-3">
              이메일
            </th>
            <th scope="col" className="px-6 py-3">
              가입 경로
            </th>
            <th scope="col" className="px-6 py-3">
              권한
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
          {list?.map((item) => (
            <tr key={item.id} className="bg-white border-b">
              <>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 max-w-[200px] break-words"
                >
                  {item.id}
                </th>
                <td className="px-6 py-4 max-w-[200px] break-words">
                  {item.email}
                </td>
                <td className="px-6 py-4 max-w-[200px] break-words">
                  {item.provider}
                </td>
                <td className="px-6 py-4 max-w-[200px] break-words">
                  {item.role}
                </td>
                <td className="px-6 py-4">
                  {" "}
                  {new Date(item.created_at).toLocaleDateString()}{" "}
                  {new Date(item.created_at).toLocaleTimeString()}
                </td>
                <td className="px-6 py-4">
                  {item.role !== "Admin" ? (
                    <button
                      className="font-medium text-red-400 hover:underline"
                      onClick={() => onDelete(item.id)}
                    >
                      삭제
                    </button>
                  ) : (
                    <span>삭제 불가</span>
                  )}
                </td>
              </>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default AdminUsers;
