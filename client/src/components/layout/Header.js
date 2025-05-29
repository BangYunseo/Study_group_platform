import { Link, useLocation } from "react-router-dom";
import Button from "../common/Button";

const Header = () => {
  const location = useLocation();

  const isLoggedIn = false; 
  return (
    <header className="main-header">
      <div className="container">
        <Link to="/" className="logo">
          StudyHub
        </Link>
        <nav>
          <ul>
            <li>
              <Link
                to="/"
                className={location.pathname === "/" ? "active" : ""}
              >
                메인 화면
              </Link>
            </li>
            <li>
              <Link
                to="/groups"
                className={location.pathname === "/groups" ? "active" : ""}
              >
                그룹 탐색
              </Link>
            </li>
            <li>
              <Link
                to="/materials"
                className={location.pathname === "/materials" ? "active" : ""}
              >
                스터디 자료
              </Link>
            </li>
            <li>
              <Link
                to="/community"
                className={location.pathname === "/community" ? "active" : ""}
              >
                게시판
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className={location.pathname === "/profile" ? "active" : ""}
              >
                마이페이지
              </Link>
            </li>
          </ul>
        </nav>
        <div className="user-menu">
          {isLoggedIn ? (
            <>
              <span className="profile-icon">
                <i className="fas fa-user"></i>
              </span>
              <Button size="small" onClick={() => alert("로그아웃 기능")}>
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
