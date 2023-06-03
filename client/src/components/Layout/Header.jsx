import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  if (
    window.location.pathname === "/login" ||
    window.location.pathname === "/register"
  )
    return null;

  const btnstyle =
    "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";

  // 기본 페이지로 돌아가기

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a className="flex items-center">
          <span
            onClick={() => navigate("/")}
            className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
          >
            시나브로
          </span>
        </a>
        <div className="flex md:order-2">
          <button
            onClick={() => navigate("/login")}
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Log in
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                onClick={() => navigate("/")}
                className={btnstyle}
                aria-current="page"
              >
                홈
              </a>
            </li>
            <li>
              <a onClick={() => navigate("/introduce")} className={btnstyle}>
                소개
              </a>
            </li>
            <li>
              <a onClick={() => navigate("/participate")} className={btnstyle}>
                참여
              </a>
            </li>
            <li>
              <a onClick={() => navigate("/article")} className={btnstyle}>
                소식
              </a>
            </li>
            <li>
              <a onClick={() => navigate("/data")} className={btnstyle}>
                자료
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
