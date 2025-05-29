import MainLayout from "../layouts/MainLayout";
import GroupCard from "../components/groups/GroupCard";
import Button from "../components/common/Button";
import InputField from "../components/common/InputField";
import { mockGroups } from "../data/groups";

import "../styles/grouplist.css";
import "../styles/groupcard.css";

const GroupListPage = () => {
  return (
    <MainLayout>
      <div className="group-list-page-container">
        <div className="section-header">
          <h2>그룹 탐색</h2>
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
