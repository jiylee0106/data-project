const Contacts = () => {
  const developers = [
    { name: "Jun", email: "jun@example.com" },
    { name: "Jake", email: "jake@example.com" },
    { name: "Bill", email: "bill@example.com" },
    { name: "Stan", email: "stan@example.com" },
    { name: "Will", email: "will@example.com" },
  ];

  return (
    <div className="py-4">
      <h2 className="text-3xl font-bold mb-4">개발자 연락처</h2>

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
