import { useState } from "react";
import { useNavigate } from "react-router-dom";

import * as Api from "../../api";

const RegisterForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,255}$/;
    return emailRegex.test(email);
  };
  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/;
    return passwordRegex.test(password);
  };

  const isEmailValid = validateEmail(email);
  const isPasswordValid = validatePassword(password);
  const isPasswordSame = password === confirmPassword;
  const isNameValid = name.length >= 2;

  // 위 4개 조건이 모두 동시에 만족되는지 여부를 확인함.
  const isFormValid =
    isEmailValid && isPasswordValid && isPasswordSame && isNameValid;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await Api.post("user/register", {
        email,
        password,
        name,
      });

      // 로그인 페이지로 이동함.
      navigate("/login");
    } catch (err) {
      alert("회원가입에 실패하였습니다.서버를 확인해주세요.");
    }
  };

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">이메일 주소</label>
          <input
            className="inputLogin"
            type="text"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {!isEmailValid && (
          <span className="text-success">이메일 형식이 올바르지 않습니다.</span>
        )}

        <div>
          <label htmlFor="password">비밀번호:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {!isPasswordValid && (
          <span className="text-success">
            비밀번호는 4글자 이상으로 설정해 주세요.
          </span>
        )}

        <div>
          <label htmlFor="password">비밀번호 재확인</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        {!isPasswordSame && (
          <span className="text-success">비밀번호가 일치하지 않습니다.</span>
        )}

        <div>
          <label htmlFor="name">이름</label>
          <input
            type="text"
            autoComplete="off"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        {!isNameValid && (
          <span className="text-success">
            이름은 2글자 이상으로 설정해 주세요.
          </span>
        )}

        <button type="submit" disabled={!isFormValid} className="shadow-button">
          회원가입
        </button>

        <button onClick={() => navigate("/login")} className="shadow-button">
          로그인하기
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
