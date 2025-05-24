import MainLayout from "../layouts/MainLayout";
import GroupFilter from "../components/groups/GroupFilter";
import GroupCard from "../components/groups/GroupCard";
import Button from "../components/common/Button";
import InputField from "../components/common/InputField";
import { mockGroups } from "../data/groups";

import "../styles/grouplist.css";
import "../styles/groupcard.css";

const GroupListPage = () => {
  return (
    <MainLayout showSidebar sidebarContent={<GroupFilter />}>
      {/* 전체 페이지 콘텐츠를 감싸는 컨테이너 추가 (선택 사항) */}
      <div className="group-list-page-container">
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

        {/* 그룹 목록 */}
        <div className="group-grid">
          {mockGroups.map((group) => (
            <GroupCard key={group.id} group={group} />
          ))}
        </div>

        {/* 페이지네이션 */}
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
          <Button
            size="small"
            variant="secondary"
            className="prev-next"
            icon="chevron-right"
          >
            다음
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default GroupListPage;
