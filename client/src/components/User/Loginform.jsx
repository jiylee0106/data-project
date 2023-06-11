import { useState, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { postApi } from "../../services/api";
const LoginForm = () => {
  const navigate = useNavigate();

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
      navigate("/");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="flex justify-center h-screen">
        <div
          className="hidden bg-cover lg:block lg:w-2/3"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80)",
          }}
        >
          <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
            <div>
              <h2 className="text-4xl font-bold text-white">시나브로</h2>

              <p className="max-w-xl mt-3 text-gray-300">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                autem ipsa, nulla laboriosam dolores, repellendus perferendis
                libero suscipit nam temporibus molestiae
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
          <div className="flex-1">
            <div className="text-center">
              <h2
                onClick={() => navigate("/")}
                className="text-4xl font-bold text-center text-gray-700 dark:text-white"
              >
                시나브로
              </h2>

              <p className="mt-3 text-gray-500 dark:text-gray-300">
                Sign in to access your account
              </p>
            </div>

            <div className="mt-8">
              <form onSubmit={handleSubmit}>
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
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
                    className={`block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border rounded-md dark:placeholder-gray-800 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 dark:focus:border-blue-400 focus:ring-gray-400 focus:outline-none focus:ring focus:ring-opacity-40`}
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
                      className="text-sm text-gray-600 dark:text-gray-200"
                    >
                      Password
                    </label>
                    <a
                      href="#"
                      className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline"
                    >
                      Forgot password?
                    </a>
                  </div>

                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="******************"
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
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:ring-gray-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
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
                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md disabled:bg-blue-200 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                  >
                    Sign in
                  </button>
                </div>
              </form>

              <p className="mt-6 text-sm text-center text-gray-400">
                Don&#x27;t have an account yet?{" "}
                <a
                  className="text-blue-500 focus:outline-none focus:underline hover:underline"
                  onClick={() => navigate("/register")}
                >
                  Sign up
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
