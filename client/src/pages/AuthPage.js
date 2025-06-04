import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/auth/AuthForm/AuthForm';
import MainLayout from '../components/layout/MainLayout/MainLayout';
import '../styles/auth.css';
import { login, register } from '../api/auth';

const AuthPage = () => {
    const [isRegisterMode, setIsRegisterMode] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [nickname, setNickname] = useState('');

    const navigate = useNavigate();

    const handleAuthSubmit = async (e) => {
        e.preventDefault();

        if (isRegisterMode) {
            if (password !== confirmPassword) {
                alert('비밀번호가 일치하지 않습니다.');
                return;
            }

            try {
                await register(email, password, nickname);
                alert('회원가입 성공! 로그인해주세요.');
                setIsRegisterMode(false);
                setPassword('');
                setConfirmPassword('');
            } catch (err) {
                console.error(err);
                const errorMsg =
                    err.response?.data?.detail ||
                    Object.values(err.response?.data || {})
                        .flat()
                        .join('\n') ||
                    '회원가입 중 오류가 발생했습니다.';
                alert(errorMsg);
            }
        } else {
            try {
                const { access, refresh } = await login(email, password);
                localStorage.setItem('accessToken', access);
                localStorage.setItem('refreshToken', refresh);
                alert('로그인 성공!');
                navigate('/');
            } catch (error) {
                console.error(error);
                alert('이메일 또는 비밀번호가 올바르지 않습니다.');
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
