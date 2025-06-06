import React, { useState } from 'react';
import InputField from '../common/InputField';
import Button from '../common/Button';
import { updateMyInfo } from '../../api/user';

import './ProfileForm.css';

const ProfileForm = ({ user }) => {
    const [nickname, setNickname] = useState(user.nickname);
    const [interests, setInterests] = useState(user.interests.join(', '));
    const [intro, setIntro] = useState(user.intro);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await updateMyInfo({
                nickname,
                interests: interests.split(',').map((s) => s.trim()),
                bio: intro,
            });
            alert('프로필이 저장되었습니다!');
        } catch (err) {
            console.error('프로필 저장 실패:', err);
            alert('저장 중 오류가 발생했습니다.');
        }
    };

    return (
        <form className="profile-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label>이메일</label>
                <input type="email" value={user.email} disabled /> {/* 이메일은 수정 불가 */}
            </div>
            <InputField
                label="닉네임"
                id="profile-nickname"
                type="text"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
            />
            <InputField
                label="관심 분야"
                id="profile-interests"
                type="text"
                placeholder="예: 웹 개발, 자격증, 영어"
                value={interests}
                onChange={(e) => setInterests(e.target.value)}
            />
            <div className="form-group">
                <label htmlFor="profile-intro">자기소개</label>
                <textarea
                    id="profile-intro"
                    placeholder="자신을 소개해보세요."
                    value={intro}
                    onChange={(e) => setIntro(e.target.value)}
                    style={{ minHeight: '100px' }}
                ></textarea>
            </div>
            <div className="profile-actions">
                <Button type="submit" variant="primary" icon="save">
                    변경 사항 저장
                </Button>
                <Button type="button" variant="secondary" icon="times" onClick={() => alert('취소되었습니다.')}>
                    취소
                </Button>
            </div>
        </form>
    );
};

export default ProfileForm;
