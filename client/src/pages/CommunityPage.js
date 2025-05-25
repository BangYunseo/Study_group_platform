import MainLayout from "../layouts/MainLayout";
import Button from "../components/common/Button";
import InputField from "../components/common/InputField";
import PostListItem from "../components/posts/PostListItem";
import { mockPosts } from "../data/posts";

import "../styles/community.css";
import "../styles/grouplist.css";

const CommunityPage = () => {
  const filteredPosts = mockPosts.filter((post) => post.groupId === null);

  return (
    <MainLayout>
      <div className="community-page-container">
        <div className="section-header">
          <h2>자유 게시판</h2>
          <div className="board-actions">
            <InputField
              type="text"
              placeholder="검색어 입력..."
              className="search-input"
            />
            <Button secondary small icon="search">
              검색
            </Button>
            <Button primary small icon="pen">
              글쓰기
            </Button>
            <Button primary small icon="warning">
              게시판 작성 요령
            </Button>
          </div>
        </div>

        <table className="post-list-table">
          <thead>
            <tr>
              <th style={{ width: "80px" }}>번호</th>
              <th>제목</th>
              <th style={{ width: "120px" }}>작성자</th>
              <th style={{ width: "120px" }}>작성일</th>
              <th style={{ width: "80px" }}>조회수</th>
              <th style={{ width: "80px" }}>댓글</th>
            </tr>
          </thead>
          <tbody>
            {filteredPosts.map((post) => (
              <PostListItem key={post.id} post={post} />
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="pagination">
          <Button
            size="small"
            variant="secondary"
            className="prev-next"
            icon="chevron-left"
          ></Button>
          <Button size="small" variant="primary" className="active">
            1
          </Button>
          {/* ... 필요에 따라 페이지 버튼 추가 ... */}
          <Button
            size="small"
            variant="secondary"
            className="prev-next"
            icon="chevron-right"
          ></Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default CommunityPage;
