const developers = [
  { name: "이지윤", email: "little8867@gmail.com" },
  { name: "이채영", email: "codudghkdlxld@gmail.com" },
  { name: "이승현", email: "kubrickcode@gmail.com" },
  { name: "황준성", email: "shabagshao@gmail.com" },
  { name: "방석진", email: "sj97014@gmail.com" },
];

const Contacts = () => {
  return (
    <div className="py-4">
      <h2 className="text-2xl font-bold mb-4">개발자 연락처</h2>

      <div className="grid grid-cols-3 gap-4">
        {developers.map((developer, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-semibold mb-2">{developer.name}</h3>
            <p className="mb-1">이메일: {developer.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contacts;
