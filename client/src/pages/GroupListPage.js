import MainLayout from "../layouts/MainLayout";
import GroupFilter from "../components/groups/GroupFilter";
import GroupCard from "../components/groups/GroupCard";
import Button from "../components/common/Button";
import InputField from "../components/common/InputField";
import { mockGroups } from "../data/groups"; // 목업 그룹 데이터

const GroupListPage = () => {
  // 실제로는 필터링 로직, 페이지네이션 등 구현

  return (
    <MainLayout showSidebar sidebarContent={<GroupFilter />}>
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

      <div className="group-grid">
        {mockGroups.map((group) => (
          <GroupCard key={group.id} group={group} />
        ))}
      </div>

      {/* Pagination (추후 구현) */}
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
    </MainLayout>
  );
};

export default GroupListPage;
