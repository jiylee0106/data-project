const AdminParticipation = ({ list }) => {
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
              <input
                type="text"
                className="border rounded px-2 py-1 outline-neutral-300"
              />
            </th>
            <td className="px-6 py-4">
              <input
                type="text"
                className="border rounded px-2 py-1 outline-neutral-300"
              />
            </td>
            <td className="px-6 py-4">
              <input
                type="text"
                className="border rounded px-2 py-1 outline-neutral-300"
              />
            </td>
            <td className="px-6 py-4"></td>
            <td className="px-6 py-4"></td>
            <td className="px-6 py-4">
              <button className="font-medium text-blue-400 hover:underline mr-3">
                추가
              </button>
            </td>
          </tr>
          {list?.map((item) => (
            <tr key={item.id} className="bg-white border-b">
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
                <button className="font-medium text-blue-400 hover:underline mr-3">
                  수정
                </button>
                <button className="font-medium text-red-400 hover:underline">
                  삭제
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default AdminParticipation;
