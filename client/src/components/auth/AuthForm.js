import InputField from "../common/InputField";
import Button from "../common/Button";

const AuthForm = ({
  isRegisterMode,
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  nickname,
  setNickname,
  handleAuthSubmit,
  setIsRegisterMode,
}) => {
  return (
    <div className="auth-box">
      <h2>{isRegisterMode ? "회원가입" : "로그인"}</h2>
      <form onSubmit={handleAuthSubmit}>
        <InputField
          label="이메일"
          id="auth-email"
          type="email"
          placeholder="이메일 주소"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {isRegisterMode && (
          <InputField
            label="닉네임"
            id="auth-nickname"
            type="text"
            placeholder="사용할 닉네임"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            required
          />
        )}
        <InputField
          label="비밀번호"
          id="auth-password"
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {isRegisterMode && (
          <InputField
            label="비밀번호 확인"
            id="auth-confirm-password"
            type="password"
            placeholder="비밀번호 확인"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        )}
        <Button type="submit" primary style={{ width: "100%" }}>
          {isRegisterMode ? "회원가입" : "로그인"}
        </Button>
      </form>

      <div className="social-login">
        <p>또는 소셜 계정으로 {isRegisterMode ? "회원가입" : "로그인"}</p>
        <Button
          className="social google"
          style={{ width: "100%", marginBottom: "10px" }}
          icon="google"
        >
          Google
        </Button>
        <Button
          className="social kakao"
          style={{ width: "100%" }}
          icon="comment"
        >
          Kakao
        </Button>
      </div>

      <p className="auth-switch">
        {isRegisterMode ? "이미 계정이 있으신가요?" : "계정이 없으신가요?"}{" "}
        <button
          href="button"
          onClick={() => {
            setIsRegisterMode(!isRegisterMode);
          }}
        >
          {isRegisterMode ? "로그인" : "회원가입"}
        </button>
      </p>
    </div>
  );
};

export default AuthForm;
