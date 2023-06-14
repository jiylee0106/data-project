import { useState, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { postApi } from "../../services/api";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isConfirmFocused, setIsConfirmFocused] = useState(false);

  const handleChangeInput = useCallback(
    (e) => {
      setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    },
    [setUser]
  );

  const handleChangeConfirm = useCallback(
    (e) => {
      setConfirmPassword(e.target.value);
    },
    [setConfirmPassword]
  );

  const handleCheckboxChange = useCallback(
    (e) => {
      setCheckbox(e.target.checked);
    },
    [setCheckbox]
  );

  const validateEmail = useCallback(() => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,255}$/;
    return emailRegex.test(user.email);
  }, [user.email]);

  const validatePassword = useCallback(() => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
    return passwordRegex.test(user.password);
  }, [user.password]);

  const isEmailValid = useMemo(validateEmail, [validateEmail]);
  const isPasswordValid = useMemo(validatePassword, [validatePassword]);
  const isPasswordSame = useMemo(
    () => user.password === confirmPassword,
    [user.password, confirmPassword]
  );

  // 위 4개 조건이 모두 동시에 만족되는지 여부를 확인함.

  const isFormValid = useMemo(
    () => isEmailValid && isPasswordValid && isPasswordSame && checkbox,
    [isEmailValid, isPasswordValid, isPasswordSame, checkbox]
  );
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 회원가입 요청
      const response = await postApi("auth/register", user);
      console.log(response);

      // 회원가입이 성공한 경우 토큰을 저장
      const jwtToken = response.data.token;
      localStorage.setItem("accessToken", jwtToken);

      window.location.href = "/";
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                회원가입
              </h1>
              <form
                onSubmit={handleSubmit}
                className="space-y-4 md:space-y-6"
                action="#"
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                  >
                    이메일
                  </label>
                  <input
                    value={user.email}
                    onChange={handleChangeInput}
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                    onFocus={() => setIsEmailFocused(true)}
                    onBlur={() => setIsEmailFocused(false)}
                  />
                  {!isEmailValid && isEmailFocused && (
                    <p className="text-red-500 text-xs italic">
                      이메일 형식이 올바르지 않습니다.
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                  >
                    비밀번호
                  </label>
                  <input
                    value={user.password}
                    onChange={handleChangeInput}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    onFocus={() => setIsPasswordFocused(true)}
                    onBlur={() => setIsPasswordFocused(false)}
                  />
                  {!isPasswordValid && isPasswordFocused && (
                    <p className="text-red-500 text-xs italic">
                      비밀번호는 8~20자 이상 영문, 숫자,특수문자 조합으로 설정해 주세요.
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="confirm-password"
                    className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                  >
                    비밀번호 재확인
                  </label>
                  <input
                    value={confirmPassword}
                    onChange={handleChangeConfirm}
                    type="password"
                    name="confirmPassword" // Update the name attribute here
                    id="confirm-password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    onFocus={() => setIsConfirmFocused(true)}
                    onBlur={() => setIsConfirmFocused(false)}
                  />
                  {!isPasswordSame && isConfirmFocused && (
                    <p className="text-red-500 text-xs italic">
                      비밀번호가 일치하지 않습니다.
                    </p>
                  )}
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                      onChange={handleCheckboxChange}
                    />
                  </div>
                  <div className="ml-3 text-md">
                    <label
                      htmlFor="terms"
                      className="font-light text-gray-500 dark:text-gray-300"
                    >
                      <a
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                        href="#"
                      >
                        약관
                      </a>
                      에 동의합니다.
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={!isFormValid}
                  className="bg-[#85B7CC] text-white font-bold py-2 pt-3 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-[#BBDCE8]"
                >
                  가입하기
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  이미 계정이 있습니까?{" "}
                  <a
                    onClick={() => navigate("/login")}
                    href="#"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    로그인하기
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterForm;
