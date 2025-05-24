import MainLayout from "../layouts/MainLayout";
import "../styles/HomePage.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <MainLayout>
      {/* 텍스트와 이미지 섹션 */}
      <div className="home-hero-section">
        {" "}
        {/* 새로운 CSS 클래스 적용 */}
        <div className="home-text-content">
          <h1>Welcome to StudyHub!</h1>
          <h3>StudyHub에 오신 것을 환영합니다.</h3>
          <p>
            스터디 목표에 맞는 그룹을 찾아보세요.<br></br>자신이 원하는 방향의
            스터디를 조직해보세요!
          </p>
          <Link to="/groups" className="btn primary">
            지금 스터디 시작하기
          </Link>
        </div>
        <div className="home-image-content">
          {/* public 폴더에 넣은 이미지 경로 */}
          <img
            src="/images/study-main.png"
            alt="공부하는 사람들 사진"
            className="main-study-image"
          />
        </div>
      </div>

      {/* 다른 섹션 추가 (예: 기능 소개, 최신 스터디 목록 등) */}
      <div className="home-features-section">
        <h2>StudyHub 활동</h2>
        <div className="features-grid">
          <div className="feature-item">
            <h3>그룹 찾기</h3>
            <p>공부하고 싶은 분야의 스터디 그룹을 탐색하고 참여하세요!</p>
          </div>
          <div className="feature-item">
            <h3>스터디 자료 공유</h3>
            <p>당신만의 학습 자료를 공유하고 필요한 자료를 찾아보세요!</p>
          </div>
          <div className="feature-item">
            <h3>자유로운 소통</h3>
            <p>커뮤니티 게시판에서 다른 사람들과 자유로운 만남을 가지세요!</p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default HomePage;
