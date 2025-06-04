import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Button from '../Button';
import { getMyInfo } from '../../../api/user'; // 경로 맞게 수정 필요
import './Header.css';

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const checkLogin = async () => {
            try {
                await getMyInfo(); // accessToken 유효하면 true
                setIsLoggedIn(true);
            } catch {
                setIsLoggedIn(false);
            }
        };
        checkLogin();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        setIsLoggedIn(false);
        navigate('/auth');
    };

    return (
        <header className="main-header">
            <div className="container">
                <Link to="/" className="logo">
                    StudyHub
                </Link>
                <nav>
                    <ul>
                        <li>
                            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                                메인 화면
                            </Link>
                        </li>
                        <li>
                            <Link to="/groups" className={location.pathname === '/groups' ? 'active' : ''}>
                                그룹 탐색
                            </Link>
                        </li>
                        <li>
                            <Link to="/materials" className={location.pathname === '/materials' ? 'active' : ''}>
                                스터디 자료
                            </Link>
                        </li>
                        <li>
                            <Link to="/community" className={location.pathname === '/community' ? 'active' : ''}>
                                게시판
                            </Link>
                        </li>
                        <li>
                            <Link to="/profile" className={location.pathname === '/profile' ? 'active' : ''}>
                                마이페이지
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="user-menu">
                    {isLoggedIn ? (
                        <>
                            <span
                                className="profile-icon"
                                onClick={() => navigate('/profile')}
                                style={{ cursor: 'pointer' }}
                            >
                                <i className="fas fa-user"></i>
                            </span>
                            <Button size="small" onClick={handleLogout}>
                                로그아웃
                            </Button>
                        </>
                    ) : (
                        <Link to="/auth">
                            <Button size="small" variant="primary">
                                로그인
                            </Button>
                        </Link>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
