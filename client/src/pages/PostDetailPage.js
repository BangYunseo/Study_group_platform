import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Button from "../components/common/Button";
import CommentItem from "../components/posts/CommentItem";
import InputField from "../components/common/InputField";
import { getPostById } from "../data/posts"; // 목업 게시물 데이터

const PostDetailPage = () => {
  const { id } = useParams();
  const post = getPostById(id);
  const [commentContent, setCommentContent] = useState("");

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
    if (commentContent.trim() === "") {
      alert("댓글 내용을 입력해주세요.");
      return;
    }
    // 여기에 댓글 작성 로직 (백엔드 연동)
    console.log("댓글 작성:", commentContent);
    setCommentContent("");
    alert(
      "댓글이 작성되었습니다! (실제로는 페이지 새로고침 또는 상태 업데이트)"
    );
  };

  return (
    <MainLayout>
      <div className="post-detail-header">
        <h2>{post.title}</h2>
        <div className="post-meta">
          <span>
            <i className="fas fa-user-circle"></i> {post.author.nickname}
          </span>
          <span>
            <i className="fas fa-calendar-alt"></i> {post.createdAt}
          </span>
          <span>
            <i className="fas fa-eye"></i> {post.views}
          </span>
          <span>
            <i className="fas fa-comment"></i> {post.commentsCount}
          </span>
        </div>
      </div>

      <div
        className="post-content"
        dangerouslySetInnerHTML={{ __html: post.content }}
      ></div>

      <div
        className="post-actions"
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "10px",
          marginBottom: "30px",
        }}
      >
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
        <h3>댓글 ({post.comments.length})</h3>
        <div className="comment-list">
          {post.comments.map((comment) => (
            <CommentItem key={comment.id} comment={comment} />
          ))}
        </div>

        <div className="comment-form">
          <form onSubmit={handleCommentSubmit}>
            <textarea
              placeholder="댓글을 작성하세요."
              value={commentContent}
              onChange={(e) => setCommentContent(e.target.value)}
              style={{ minHeight: "80px", width: "100%", marginBottom: "10px" }}
            ></textarea>
            <Button
              type="submit"
              primary
              size="small"
              style={{ float: "right" }}
            >
              댓글 등록
            </Button>
            <div style={{ clear: "both" }}></div> {/* float 해제 */}
          </form>
        </div>
      </div>
    </MainLayout>
  );
};

export default PostDetailPage;
