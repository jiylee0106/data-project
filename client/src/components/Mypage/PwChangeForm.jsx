import { useState, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import * as Api from "../../services/api";

const PwChangeForm = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    password: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");
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

  const validatePassword = useCallback(() => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
    return passwordRegex.test(user.password);
  }, [user.password]);

  const isPasswordValid = useMemo(validatePassword, [validatePassword]);
  const isPasswordSame = useMemo(
    () => user.password === confirmPassword,
    [user.password, confirmPassword]
  );

  // 위 4개 조건이 모두 동시에 만족되는지 여부를 확인함.

  const isFormValid = useMemo(
    () => isPasswordValid && isPasswordSame,
    [isPasswordValid, isPasswordSame]
  );
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 회원가입 요청

      const response = await Api.patch("user/password", user);

      console.log("Password updated:", response);

      // 회원가입이 성공한 경우 토큰을 저장

      // 로그인 페이지로 이동
      navigate("/", { replace: true });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Change Password
              </h1>
              <form
                onSubmit={handleSubmit}
                className="space-y-4 md:space-y-6"
                action="#"
              >
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
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
                      비밀번호는 8~20자 이상 영문, 숫자,특수문자 조합으로 설정해
                      주세요.
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="confirm-password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Confirm password
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

                <button
                  type="submit"
                  disabled={!isFormValid}
                  className="bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-blue-200"
                >
                  Save Password
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PwChangeForm;
