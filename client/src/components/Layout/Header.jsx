import { useEffect, useState, useContext, Fragment } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Modal from "../Modal/Modal";
import { delApi, getApi } from "../../services/api";
import { GlobalContext } from "../../store/Context";
import Heart from "../Points/Heart";
import { useMediaQuery } from "react-responsive";

const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const context = useContext(GlobalContext);
  const user = context.state.userInfo;
  const pointStatus = context.state.point.status;
  const pointCount = context.state.point.count;
  const isLoggedIn = context.state.isLoggedIn;
  const navigate = useNavigate();
  const location = useLocation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const getIsAdmin = async () => {
      if (isLoggedIn) {
        getTotalPoints();
        const response = await getApi("user");
        context.dispatch({
          type: "USER",
          name: "role",
          value: response.data.role,
        });
      }
    };

    getIsAdmin();
  }, [isLoggedIn, pointStatus]);

  const handleDeleteAccount = async () => {
    const response = await delApi("user");
    console.log(response);

    localStorage.removeItem("accessToken");
    window.location.href = "/";

    setIsModalOpen(false);
  };

  const getTotalPoints = async () => {
    const response = await getApi("point");
    context.dispatch({
      type: "POINT",
      name: "count",
      value: response.data.point,
    });
  };

  useEffect(() => {
    if (
      window.location.pathname === "/login" ||
      window.location.pathname === "/register"
    ) {
      setHeaderVisible(false);
    } else {
      setHeaderVisible(true);
    }
  }, [window.location.pathname]);

  const logout = () => {
    localStorage.removeItem("accessToken");
    context.dispatch({ type: "ISLOGGEDIN", value: false });
    window.location.href = "/";
  };

  // const btnstyle =
  //   "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#CD9894] px-10 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";

  // 기본 페이지로 돌아가기
  const navItems = [
    { title: "홈", onClick: () => navigate("/"), path: "/" },
    { title: "소개", onClick: () => navigate("/about"), path: "/about" },
    {
      title: "참여",
      onClick: () => navigate("/participate"),
      path: "/participate",
    },
    { title: "소식", onClick: () => navigate("/article"), path: "/article" },
    { title: "자료", onClick: () => navigate("/data"), path: "/data" },
  ];

  const menuItems = [
    { title: "마이 컬렉션", onClick: () => navigate("/collection") },
    { title: "좋아요 내역", onClick: () => navigate("/points") },
    { title: "비밀번호 변경", onClick: () => navigate("/change-password") },
    { title: "회원탈퇴", onClick: () => setIsModalOpen(true) },
  ];

  const mobMenuItems = [
    { title: "마이 컬렉션", onClick: () => navigate("/collection") },
    { title: "좋아요 내역", onClick: () => navigate("/points") },
    { title: "비밀번호 변경", onClick: () => navigate("/change-password") },
    { title: "회원탈퇴", onClick: () => setIsModalOpen(true) },
    { title: "로그아웃", onClick: () => logout() },
  ];

  // const addItems = [
  //   { title: "홈", onClick: () => navigate("/") },
  //   { title: "소개", onClick: () => navigate("/about") },
  //   { title: "참여", onClick: () => navigate("/participate") },
  //   { title: "소식", onClick: () => navigate("/article") },
  //   { title: "자료", onClick: () => navigate("/data") },
  //   { title: "마이 컬렉션", onClick: () => navigate("/collection") },
  //   { title: "좋아요 내역", onClick: () => navigate("/points") },
  //   { title: "비밀번호 변경", onClick: () => navigate("/change-password") },
  //   { title: "회원탈퇴", onClick: () => setIsModalOpen(true) },
  //   { title: "로그아웃", onClick: () => logout() },
  // ];

  const itemsToMap = isLoggedIn
    ? mobMenuItems
    : [{ title: "로그인", onClick: () => navigate("/login") }];

  return headerVisible ? (
    <nav className="w-screen cursor-pointer flex-shrink-0 text-2xl bg-[#3E362F] dark:bg-gray-900 fixed w-full z-50 top-0 left-0 border-b border-gray-200 dark:border-gray-600 px-5 py-3">
      <div className="max-w-screen-xl flex flex-shrink-0 items-center justify-between mx-auto ">
        <a className="flex items-center">
          <span className="self-center w-40 md:w-60 whitespace-nowrap nav-item dark:text-white">
            <img
              onClick={() => navigate("/")}
              src="images/Sinabro.png"
              alt=""
            />
          </span>
        </a>

        <div className="flex justify-end md:order-2 gap-1">
          {isLoggedIn ? (
            <>
              <div className="flex justify-between">
                <div
                  onClick={() => navigate("/points")}
                  className="border rounded-md mr-1 flex gap-2 items-center px-3 py-1 pt-2 bg-white text-gray-900 text-xl shadow-inner"
                  style={{
                    boxShadow: "2px 2px 1px 1px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <Heart />
                  {pointCount}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button
                      className="whitespace-nowrap hidden md:block px-4 py-2 pt-3 text-center shadow-inner inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-lg font-semibold hover:bg-[#FFFAEE] shadow text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                      style={{
                        boxShadow: "2px 2px 1px 1px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <div className="flex flex-row">
                        <span>메뉴</span>
                        <ChevronDownIcon
                          className="-mr-1 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </div>
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="whitespace-nowrap absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 nav-item cursor-pointer focus:outline-none">
                      <div className="py-1">
                        {user.role === "Admin" && (
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                onClick={() => navigate("/admin")}
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-blue-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-lg"
                                )}
                              >
                                관리자 페이지
                              </a>
                            )}
                          </Menu.Item>
                        )}
                        {menuItems.map((item, index) => (
                          <Menu.Item key={index}>
                            {({ active }) => (
                              <a
                                onClick={item.onClick}
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-blue-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-lg"
                                )}
                              >
                                {item.title}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
                <button
                  onClick={logout}
                  type="button"
                  className="whitespace-nowrap hidden md:block text-white shadow-inner bg-[#CD9894] hover:bg-[#A36560] focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-lg px-4 py-2 pt-3 text-center mr-3 md:mr-0 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                  style={{
                    boxShadow: "2px 2px 1px 1px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  로그아웃
                </button>
              </div>
            </>
          ) : (
            <button
              onClick={() => navigate("/login")}
              type="button"
              className="whitespace-nowrap hidden md:block text-white shadow-inner bg-[#466D7E] hover:bg-[#698A96] focus:ring-4 focus:outline-none focus:ring-[#9BB1BB] font-medium rounded-lg text-lg px-4 py-2 pt-3 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              style={{
                boxShadow: "2px 2px 1px 1px rgba(0, 0, 0, 0.1)",
              }}
            >
              로그인
            </button>
          )}

          <Menu as="div" className="relative inline-block text-left md:hidden">
            <div>
              <Menu.Button className="bg-white inline-flex px-4 py-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 -mr-1 text-gray-400"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  {user.role === "Admin" && (
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          onClick={() => navigate("/admin")}
                          className={classNames(
                            active
                              ? "bg-gray-100 text-blue-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-lg"
                          )}
                        >
                          관리자 페이지
                        </a>
                      )}
                    </Menu.Item>
                  )}
                  {navItems.map((item) => (
                    <Menu.Item key={item.title}>
                      {({ active }) => (
                        <a
                          onClick={item.onClick}
                          className={classNames(
                            active
                              ? "bg-gray-100 text-blue-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-lg"
                          )}
                        >
                          {item.title}
                        </a>
                      )}
                    </Menu.Item>
                  ))}
                  {isMobile &&
                    itemsToMap.map((item) => (
                      <Menu.Item key={item.title}>
                        {({ active }) => (
                          <a
                            onClick={item.onClick}
                            className={classNames(
                              active
                                ? "bg-gray-100 text-blue-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-lg"
                            )}
                          >
                            {item.title}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>

        {/* 메인 헤더 */}
        <div
          className="items-center hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col text-white whitespace-nowrap xs:text-xl p-4 md:p-0 mt-4 border rounded-lg bg-[#3E362F] nav-item cursor-pointer md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navItems.map((item, index) => (
              <li key={index} onClick={item.onClick}>
                <Link
                  className={`block px-4 py-2 text-2xl ${
                    location.pathname === item.path
                      ? "text-[#CD9894] md:dark:text-blue-500"
                      : "text-gray-700"
                  }`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {isModalOpen && (
          <Modal
            buttonText="확인"
            color="white"
            closeModal={() => setIsModalOpen(false)}
            handleAction={handleDeleteAccount}
          >
            <h3 className="mb-5 text-lg font-normal text-black-500 dark:text-gray-400">
              정말로 회원을 탈퇴하시겠습니까?
            </h3>
          </Modal>
        )}
      </div>
    </nav>
  ) : null;
};

export default Header;
