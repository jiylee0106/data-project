import { useState } from "react";
import { useNavigate } from "react-router-dom";

import * as Api from "../../api";

const LoginForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //이메일이 abc@example.com 형태인지 regex를 이용해 확인함.

  const validateEmail = (email) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,255}$/;
    return emailRegex.test(email);
  };

  const isEmailValid = validateEmail(email);
  const isPasswordValid = password.length > 0;

  const isFormValid = isEmailValid && isPasswordValid;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await Api.post("user/login", {
        email,
        password,
      });

      const user = res.data;
      const jwtToken = user.token;
      sessionStorage.setItem("userToken", jwtToken);

      navigate("/", { replace: true });
    } catch (err) {
      if (err.response && err.response.status === 400) {
        alert("비밀번호가 일치하지 않습니다. 다시 한 번 확인해 주세요.");
      } else {
        alert("로그인에 실패하였습니다.");
      }
    }
  };

  return (
    <div className="w-full max-w-xs">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Email
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {!isEmailValid && email !== "" && (
          <p className="text-red-500 text-xs italic">
            이메일 형식이 올바르지 않습니다.
          </p>
        )}
        {!isFormValid && email === "" && (
          <p className="text-red-500 text-xs italic">이메일을 입력해주세요.</p>
        )}

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="password"
            type="password"
            placeholder="******************"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {!isFormValid && password === "" && (
            <p className="text-red-500 text-xs italic">
              비밀번호를 입력해주세요.
            </p>
          )}
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            disabled={!isFormValid}
            onClick={() => navigate("/register")}
          >
            Sign In
          </button>

          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
