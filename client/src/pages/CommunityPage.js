import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout/MainLayout';
import Button from '../components/common/Button';
import InputField from '../components/common/InputField';
import PostListItem from '../components/posts/PostListItem';
import { getAllPosts } from '../api/posts';

import '../styles/community.css';
import '../styles/grouplist.css';

const CommunityPage = () => {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const data = await getAllPosts();
                console.log('서버 응답 확인:', data);

                if (Array.isArray(data)) {
                    setPosts(data);
                } else if (Array.isArray(data.results)) {
                    setPosts(data.results);
                } else {
                    console.error('posts 응답이 배열이 아님:', data);
                    setPosts([]);
                }
            } catch (err) {
                console.error('게시글 불러오기 실패:', err);
            }
        };

        fetchPosts();
    }, []);

    const filteredPosts = posts.filter((post) => !post.groupId);

    return (
        <MainLayout>
            <div className="community-page-container">
                <div className="section-header">
                    <h2>자유 게시판</h2>
                    <div className="board-actions">
                        <InputField type="text" placeholder="검색어 입력..." className="search-input" />
                        <Button secondary small icon="search">
                            검색
                        </Button>
                        <Button onClick={() => navigate('/community/write')}>글쓰기</Button>
                        <Button primary small icon="warning">
                            게시판 작성 요령
                        </Button>
                    </div>
                </div>

                <table className="post-list-table">
                    <thead>
                        <tr>
                            <th style={{ width: '80px' }}>번호</th>
                            <th>제목</th>
                            <th style={{ width: '120px' }}>작성자</th>
                            <th style={{ width: '120px' }}>작성일</th>
                            <th style={{ width: '80px' }}>조회수</th>
                            <th style={{ width: '80px' }}>댓글</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredPosts.map((post) => (
                            <PostListItem key={post.id} post={post} />
                        ))}
                    </tbody>
                </table>

                <div className="pagination">
                    <Button size="small" variant="secondary" className="prev-next" icon="chevron-left" />
                    <Button size="small" variant="primary" className="active">
                        1
                    </Button>
                    <Button size="small" variant="secondary" className="prev-next" icon="chevron-right" />
                </div>
            </div>
        </MainLayout>
    );
};

export default CommunityPage;
