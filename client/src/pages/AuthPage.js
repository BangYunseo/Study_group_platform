import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
// import InputField from "../components/common/InputField"; // AuthForm으로 옮겨지므로 더 이상 필요 없음
// import Button from "../components/common/Button"; // AuthForm으로 옮겨지므로 더 이상 필요 없음
import { getUserByEmail, mockUsers } from "../data/users";
import AuthForm from "../components/auth/AuthForm"; // ✅ AuthForm 컴포넌트 임포트
// import "../styles/auth.css"; // ✅ 새로 만든 CSS 파일을 여기서 임포트 (또는 App.js 등에서 전역으로)

const AuthPage = () => {
  const [isRegisterMode, setIsRegisterMode] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nickname, setNickname] = useState("");

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    if (isRegisterMode) {
      if (password !== confirmPassword) {
        alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
        return;
      }
      if (getUserByEmail(email)) {
        alert("이미 존재하는 이메일입니다.");
        return;
      }
      alert(`회원가입 요청: 이메일=${email}, 닉네임=${nickname}`);
      console.log("New user registered (mock):", { email, password, nickname });
      setIsRegisterMode(false); // 회원가입 후 로그인 폼으로 전환
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setNickname("");
    } else {
      // 로그인 로직
      const user = getUserByEmail(email);
      if (user && user.email === email && password === "test1234") {
        alert(`로그인 성공! 환영합니다, ${user.nickname}님!`);
        console.log("User logged in (mock):", user);
      } else {
        alert("이메일 또는 비밀번호가 올바르지 않습니다.");
      }
    }
  };

  return (
    <MainLayout>
      <div className="auth-container">
        {" "}
        {/* auth-container는 AuthPage에 유지하여 중앙 정렬 담당 */}
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
          setIsRegisterMode={setIsRegisterMode} // 모드 전환 함수 전달
        />
      </div>
    </MainLayout>
  );
};

export default AuthPage;
