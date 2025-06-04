import React from 'react';

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
        <div className="auth-form-container">
            <h2>{isRegisterMode ? '회원가입' : '로그인'}</h2>
            <form onSubmit={handleAuthSubmit}>
                <div>
                    <label>이메일</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>

                {isRegisterMode && (
                    <div>
                        <label>닉네임</label>
                        <input type="text" value={nickname} onChange={(e) => setNickname(e.target.value)} required />
                    </div>
                )}

                <div>
                    <label>비밀번호</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>

                {isRegisterMode && (
                    <div>
                        <label>비밀번호 확인</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                )}

                <button type="submit">{isRegisterMode ? '회원가입' : '로그인'}</button>
            </form>

            <button type="button" onClick={() => setIsRegisterMode(!isRegisterMode)} style={{ marginTop: '10px' }}>
                {isRegisterMode ? '로그인 하러 가기' : '회원가입 하러 가기'}
            </button>
        </div>
    );
};

export default AuthForm;
