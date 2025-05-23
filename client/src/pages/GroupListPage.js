import React from "react";
import MainLayout from "../layouts/MainLayout";
import GroupFilter from "../components/groups/GroupFilter";
import GroupCard from "../components/groups/GroupCard";
import Button from "../components/common/Button";
import InputField from "../components/common/InputField";
import { mockGroups } from "../data/groups";

import "../styles/layout.css";

const GroupListPage = () => {
  return (
    <MainLayout showSidebar sidebarContent={<GroupFilter />}>
      {/* 검색 및 제목 섹션 */}
      <div className="section-header">
        <h2>스터디/프로젝트 그룹</h2>
        <div className="board-actions">
          <InputField
            type="text"
            placeholder="그룹 검색..."
            className="search-input"
          />
          <Button variant="secondary" size="small" icon="search">
            검색
          </Button>
        </div>
      </div>

      {/* 그룹 목록 그리드 */}
      <div className="group-grid">
        {" "}
        {/* group-grid 클래스 적용 */}
        {mockGroups.map((group) => (
          <GroupCard key={group.id} group={group} />
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        {" "}
        {/* pagination 클래스 적용 */}
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

export default GroupListPage;
