import MainLayout from "../components/layout/MainLayout/MainLayout";
import ProfileForm from "../components/users/ProfileForm";
import { getUserById } from "../data/users";

const ProfilePage = () => {
  const currentUser = getUserById("user-1"); // 또는 테스트용 임시 데이터

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
      <div className="profile-page-container">
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
      </div>
    </MainLayout>
  );
};

export default ProfilePage;
