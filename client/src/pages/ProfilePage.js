// studygroup/client/src/pages/ProfilePage.js
import React from "react";
import MainLayout from "../layouts/MainLayout";
import ProfileForm from "../components/users/ProfileForm";
import { getUserById } from "../data/users";

const ProfilePage = () => {
  // 로그인 유저 정보
  const currentUser = getUserById("user-1");

  if (!currentUser) {
    return (
      <MainLayout>
        <div className="main-content">
          <h2>사용자 정보를 찾을 수 없습니다.</h2>
          <p>로그인 후 이용해주세요.</p>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="profile-container">
        <div className="profile-header">
          <div className="profile-avatar">
            {currentUser.profileImage ? (
              <img src={currentUser.profileImage} alt="프로필 이미지" />
            ) : (
              <i className="fas fa-user-circle"></i>
            )}
          </div>
          <h2>{currentUser.nickname}</h2>
          <p>{currentUser.intro}</p>
        </div>

        <ProfileForm user={currentUser} />

        {/* 추가 정보 (예: 내 스터디 그룹, 내 게시물 등) */}
        <div
          style={{
            marginTop: "40px",
            borderTop: "1px solid var(--border-color-light)",
            paddingTop: "30px",
          }}
        >
          <h3>내 그룹</h3>
          <p>가입한 그룹 목록이 여기에 표시됩니다.</p>
          {/* <Link to="/my-groups"><Button small secondary>내 그룹 보기</Button></Link> */}
        </div>
        <div
          style={{
            marginTop: "30px",
            borderTop: "1px solid var(--border-color-light)",
            paddingTop: "30px",
          }}
        >
          <h3>내 작성 글</h3>
          <p>내가 작성한 게시물 목록이 여기에 표시됩니다.</p>
          {/* <Link to="/my-posts"><Button small secondary>내 작성 글 보기</Button></Link> */}
        </div>
      </div>
    </MainLayout>
  );
};

export default ProfilePage;
