import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout/MainLayout';
import Button from '../components/common/Button';
import InputField from '../components/common/InputField';
import { createPost } from '../api/posts';

const PostCreatePage = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const postData = { title, content };
        console.log('작성된 게시글:', postData);

        try {
            const result = await createPost(postData);
            console.log('서버 응답:', result);
            alert('게시글이 등록되었습니다!');
            navigate('/community');
        } catch (err) {
            console.error('작성 실패:', err.response?.data || err);
            alert('등록 실패');
        }
    };

    return (
        <MainLayout>
            <div className="main-content">
                <h2>게시글 작성</h2>
                <form onSubmit={handleSubmit}>
                    <InputField label="제목" value={title} onChange={(e) => setTitle(e.target.value)} />
                    <div className="form-group">
                        <label>내용</label>
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            rows={10}
                            style={{ width: '100%' }}
                        ></textarea>
                    </div>
                    <Button type="submit" variant="primary" icon="pen">
                        작성 완료
                    </Button>
                </form>
            </div>
        </MainLayout>
    );
};

export default PostCreatePage;
