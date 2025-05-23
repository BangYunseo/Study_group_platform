import React from "react";
import MainLayout from "../layouts/MainLayout";
import "../styles/HomePage.css";

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
            공통 관심사나 목표에 따른 스터디 그룹 및 프로젝트 팀을 찾아보세요.
          </p>
          <p>상단 메뉴에서 다른 사람과 스터디를 만들어보세요!</p>
          {/* 필요하다면 여기에 버튼 추가 */}
          {/* <button className="btn primary">지금 스터디 시작하기</button> */}
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
            <p>다양한 관심사의 스터디 그룹을 탐색하고 참여해보세요.</p>
          </div>
          <div className="feature-item">
            <h3>스터디 자료 공유</h3>
            <p>유용한 학습 자료를 공유하고 필요한 자료를 찾아보세요.</p>
          </div>
          <div className="feature-item">
            <h3>자유로운 소통</h3>
            <p>커뮤니티 게시판에서 다른 멤버들과 자유롭게 소통하세요.</p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default HomePage;
