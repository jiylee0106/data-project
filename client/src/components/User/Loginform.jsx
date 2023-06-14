import { useState, useCallback, useMemo, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { postApi } from "../../services/api";
import { GlobalContext } from "../../store/Context";
const LoginForm = () => {
  const navigate = useNavigate();
  const context = useContext(GlobalContext);

  const [user, setUser] = useState({ email: "", password: "" });
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  //이메일이 abc@example.com 형태인지 regex를 이용해 확인함.

  const handleChangeInput = useCallback(
    (e) => {
      setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    },
    [setUser]
  );

  const validateEmail = useCallback(() => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,255}$/;
    return emailRegex.test(user.email);
  }, [user.email]);

  const isEmailValid = useMemo(validateEmail, [validateEmail]);
  const isPasswordValid = useMemo(
    () => user.password.length > 0,
    [user.password]
  );

  const isFormValid = useMemo(
    () => isEmailValid && isPasswordValid,
    [isEmailValid, isPasswordValid]
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await postApi("auth/login", user);
      console.log(response);

      const jwtToken = response.data.token;
      localStorage.setItem("accessToken", jwtToken);
      context.dispatch({ type: "ISLOGGEDIN", value: true });

      navigate("/");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div>
      <div className="bg-white dark:bg-gray-900">
        <div className="flex justify-center h-screen">
          <div
            className="hidden bg-cover bg-no-repeat lg:block lg:w-full"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80)",
            }}
          >
            <div className="flex items-end p-20 h-full px-20 bg-gray-900 bg-opacity-40">
              <div>
                <p className="max-w-2xl mt-3 text-gray-300 text-4xl leading-[1.5]">
                  우리가 알고 있는 야생생물이
                </p>
                <span className="max-w-2xl pt-1.5 px-1 text-[#28415E] font-semibold text-4xl leading-[1.5] bg-gray-300">
                  20분마다 1종씩
                </span>
                <span className="max-w-2xl text-gray-300 text-4xl leading-[1.5]">
                  <span className="before:content[' '] before:inline-block before:w-4 before:opacity-0"></span>
                  사라지고 있습니다.
                </span>
                <p className="max-w-2xl text-gray-300 whitespace-pre-line text-xl leading-[1.8]">
                  가까운 곳에서 우리가 보호해야 할 멸종위기 야생생물이 살고 있습니다.
                  <br />
                  우리가 잘 모르는 동·식물이 어쩌면 멸종위기 야생생물일 수도 있습니다.
                  <br />
                  우리의 관심이 우리나라에 살고 있는 다양한 생물들을 지킬 수 있으며,
                  <br />
                  향후 멸종위기 야생생물 관리·보호 대책에 많은 도움이 됩니다.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center w-full max-w-md px-6 mx-20 lg:w-2/5">
            <div className="flex-1">
              <div className="text-center cursor-pointer">
                <h2
                  onClick={() => navigate("/")}
                  className="text-5xl font-bold text-center text-gray-700 dark:text-white"
                >
                  시나브로
                </h2>
              </div>

              <div className="mt-8">
                <form onSubmit={handleSubmit}>
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-xl text-gray-600 dark:text-gray-200"
                    >
                      이메일
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="elice@gmail.com"
                      value={user.email}
                      onChange={handleChangeInput}
                      onFocus={() => {
                        if (!isFormValid && user.email === "") {
                          setIsEmailFocused(true);
                        }
                      }}
                      onBlur={() => {
                        setIsEmailFocused(false);
                      }}
                      className={`block w-full px-4 py-2 my-2 text-gray-700 placeholder-gray-400 bg-white border rounded-md dark:placeholder-gray-800 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 dark:focus:border-blue-400 focus:ring-gray-400 focus:outline-none focus:ring focus:ring-opacity-40`}
                    />
                    {!isEmailValid && user.email !== "" && isEmailFocused && (
                      <p className="text-red-500 text-xs italic">
                        이메일 형식이 올바르지 않습니다.
                      </p>
                    )}
                    {!isFormValid && user.email === "" && isEmailFocused && (
                      <p className="text-red-500 text-xs italic">
                        이메일을 입력해주세요.
                      </p>
                    )}
                  </div>

                  <div className="mt-6">
                    <div className="flex justify-between mb-2">
                      <label
                        htmlFor="password"
                        className="text-lg text-gray-600 dark:text-gray-200"
                      >
                        비밀번호
                      </label>
                      <a
                        href="#"
                        className="text-md text-gray-400 pt-1 focus:text-blue-500 hover:text-blue-500 hover:underline"
                      >
                        비밀번호 찾기
                      </a>
                    </div>

                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="********"
                      value={user.password}
                      onChange={handleChangeInput}
                      onFocus={() => {
                        if (!isFormValid && user.password === "") {
                          setIsPasswordFocused(true);
                        }
                      }}
                      onBlur={() => {
                        setIsPasswordFocused(false);
                      }}
                      className="block w-full px-4 py-2 my-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:ring-gray-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                    {!isFormValid &&
                      user.password === "" &&
                      isPasswordFocused && (
                        <p className="text-red-500 text-xs italic">
                          비밀번호를 입력해주세요.
                        </p>
                      )}
                  </div>

                  <div className="mt-6">
                    <button
                      type="submit"
                      disabled={!isFormValid}
                      className="w-full text-lg px-4 py-2 pt-3 tracking-wide text-white transition-colors duration-200 transform bg-[#85B7CC] rounded-md disabled:bg-[#BBDCE8] focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                    >
                      로그인
                    </button>
                  </div>
                </form>

                <p className="mt-4 text-md text-center text-gray-400">
                  계정이 없으신가요?{" "}
                  <a
                    className="text-[#5DA1BE] focus:outline-none focus:underline hover:underline"
                    onClick={() => navigate("/register")}
                  >
                    가입하기
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
