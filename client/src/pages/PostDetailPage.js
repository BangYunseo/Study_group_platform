import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout/MainLayout';
import Button from '../components/common/Button';
import CommentItem from '../components/posts/CommentItem';
import { getPostById } from '../api/posts';

import '../styles/post.css';
import '../styles/comment.css';

const PostDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);
    const [commentContent, setCommentContent] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const data = await getPostById(id);
                setPost(data);
            } catch (err) {
                console.error('게시글 불러오기 실패:', err);
            } finally {
                setLoading(false);
            }
        };
        fetchPost();
    }, [id]);

    if (loading) {
        return (
            <MainLayout>
                <div>로딩 중...</div>
            </MainLayout>
        );
    }

    if (!post) {
        return (
            <MainLayout>
                <div className="main-content">
                    <h2>게시물을 찾을 수 없습니다.</h2>
                    <p>존재하지 않는 게시물이거나 삭제된 게시물입니다.</p>
                </div>
            </MainLayout>
        );
    }

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (commentContent.trim() === '') {
            alert('댓글 내용을 입력해주세요.');
            return;
        }
        // TODO: 댓글 작성 API 연동 필요
        console.log('댓글 작성:', commentContent);
        setCommentContent('');
        alert('댓글이 작성되었습니다! (실제로는 페이지 새로고침 또는 상태 업데이트)');
    };

    return (
        <MainLayout>
            <div className="post-detail-page-container">
                <div className="post-detail-header">
                    <h2>{post.title}</h2>
                    <div className="post-meta">
                        <span>
                            <i className="fas fa-user-circle"></i> {post.author.nickname}
                        </span>
                        <span>
                            <i className="fas fa-calendar-alt"></i> {new Date(post.created_at).toLocaleDateString()}
                        </span>
                        <span>
                            <i className="fas fa-eye"></i> {post.views}
                        </span>
                        <span>
                            <i className="fas fa-comment"></i> {post.comment_count || 0}
                        </span>
                    </div>
                </div>

                <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }}></div>

                <div className="post-actions">
                    <Button variant="secondary" icon="edit" size="small">
                        수정
                    </Button>
                    <Button variant="secondary" icon="trash-alt" size="small">
                        삭제
                    </Button>
                    <Button variant="secondary" icon="thumbs-up" size="small">
                        공감
                    </Button>
                    <Link to="/community">
                        <Button variant="secondary" size="small">
                            목록
                        </Button>
                    </Link>
                </div>

                <div className="comment-section">
                    <h3>댓글 ({post.comment_count || 0})</h3>
                    <div className="comment-list">
                        {post.comments &&
                            post.comments.map((comment) => <CommentItem key={comment.id} comment={comment} />)}
                    </div>

                    <div className="comment-form">
                        <form onSubmit={handleCommentSubmit}>
                            <textarea
                                placeholder="댓글을 작성하세요."
                                value={commentContent}
                                onChange={(e) => setCommentContent(e.target.value)}
                            ></textarea>
                            <Button type="submit" primary size="small" className="comment-submit-btn">
                                댓글 등록
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default PostDetailPage;
