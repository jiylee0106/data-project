const AdminNews = () => {
  return (
    <>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              제목
            </th>
            <th scope="col" className="px-6 py-3">
              내용
            </th>
            <th scope="col" className="px-6 py-3">
              링크
            </th>
            <th scope="col" className="px-6 py-3">
              이미지 링크
            </th>
            <th scope="col" className="px-6 py-3">
              영상 ID
            </th>
          </tr>
        </thead>
      </table>
    </>
  );
};

export default AdminNews;
