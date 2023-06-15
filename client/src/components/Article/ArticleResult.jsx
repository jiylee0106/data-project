const SearchResults = ({ items }) => {
  return (
    <div className="rounded-lg border-4 border-[#57443A] p-4 text-left">
      {items?.length > 0 ? (
        items.map((item) => (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={item.link}
            key={item.link}
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              className="object-cover w-full h-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              src={
                item.image_link ||
                "https://climate.onep.go.th/wp-content/uploads/2020/01/default-image.jpg"
              }
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {item.title}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {item.description}
              </p>
            </div>
          </a>
        ))
      ) : (
        <p>등록된 소식이 없습니다.</p>
      )}
    </div>
  );
};

export default SearchResults;
