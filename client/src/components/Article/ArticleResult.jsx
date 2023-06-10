const SearchResults = ({ items }) => {
  return (
    <div className="rounded-lg border border-gray-300 mx-8 my-6 p-4 text-left">
      {items.map((item) => (
        <div
          key={item.link}
          className="rounded-md bg-gray-50 border border-gray-300 mx-8 my-6 p-4 text-left"
        >
          <div className="mt-4">
            <a href={item.link}>
              <strong>{item.title}</strong>
            </a>
          </div>
          <div className="text-gray-600">{item.description}</div>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
