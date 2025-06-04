import { useEffect, useState } from 'react';
import MainLayout from '../components/layout/MainLayout/MainLayout';
import ProfileForm from '../components/users/ProfileForm';
import { getMyInfo } from '../api/user';

const ProfilePage = () => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const data = await getMyInfo();
                setCurrentUser({
                    ...data,
                    profileImage: data.profile_image,
                    intro: data.bio,
                    interests: data.interests || [],
                    tags: data.tags || [],
                    roles: data.roles || [],
                });
            } catch (err) {
                console.error('사용자 정보 불러오기 실패:', err);
            }
        };
        fetchUser();
    }, []);

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
                    <p>{currentUser.intro || '소개가 없습니다.'}</p>
                </div>
                <ProfileForm user={currentUser} />
            </div>
        </MainLayout>
    );
};

export default ProfilePage;
