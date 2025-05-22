// studygroup/client/src/pages/CommunityPage.js
import React from "react";
import MainLayout from "../layouts/MainLayout";
import Button from "../components/common/Button";
import InputField from "../components/common/InputField";
import PostListItem from "../components/posts/PostListItem";
import { mockPosts } from "../data/posts"; // 목업 게시물 데이터

const CommunityPage = () => {
  // 실제로는 게시판 타입(전체/그룹 내)에 따라 게시물 필터링
  const filteredPosts = mockPosts.filter((post) => post.groupId === null); // 일단 전체 게시판만 표시

  return (
    <MainLayout>
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
        >
          이전
        </Button>
        <Button size="small" variant="primary" className="active">
          1
        </Button>
        <Button size="small" variant="secondary">
          2
        </Button>
        <Button size="small" variant="secondary">
          3
        </Button>
        <Button size="small" variant="secondary">
          4
        </Button>
        <Button size="small" variant="secondary">
          5
        </Button>
        <Button
          size="small"
          variant="secondary"
          className="prev-next"
          icon="chevron-right"
        >
          다음
        </Button>
      </div>
    </MainLayout>
  );
};

export default CommunityPage;
