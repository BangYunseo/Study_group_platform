import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { getUserByEmail, mockUsers } from "../data/users";
import AuthForm from "../components/auth/AuthForm";
import "../styles/auth.css";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  // false는 로그인
  // true는 회원가입

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nickname, setNickname] = useState("");

  const navigate = useNavigate();

  const handleAuthSubmit = (e) => {
    e.preventDefault();

    if (isRegisterMode) {
      // 회원가입 로직
      if (password !== confirmPassword) {
        alert("비밀번호가 일치하지 않습니다.");
        return;
      }
      const newUser = { email, password, nickname };
      mockUsers.push(newUser);
      alert("회원가입이 완료되었습니다! 이제 로그인해주세요.");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setNickname("");
    } else {
      // 로그인 로직
      const user = getUserByEmail(email);
      if (user && user.password === password) {
        alert("로그인 성공!");
        navigate("/");
      } else {
        alert("이메일 또는 비밀번호가 올바르지 않습니다.");
      }
    }
  };

  return (
    <MainLayout>
      <div className="auth-container">
        <AuthForm
          isRegisterMode={isRegisterMode}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          confirmPassword={confirmPassword}
          setConfirmPassword={setConfirmPassword}
          nickname={nickname}
          setNickname={setNickname}
          handleAuthSubmit={handleAuthSubmit}
          setIsRegisterMode={setIsRegisterMode}
        />
      </div>
    </MainLayout>
  );
};

export default AuthPage;
