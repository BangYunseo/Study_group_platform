import MainLayout from "../layouts/MainLayout";
import Button from "../components/common/Button";
import InputField from "../components/common/InputField";
import { mockGroups } from "../data/groups";

import "../styles/grouplist.css";

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

        <div className="group-table-header">
          <span className="header-item item-title-column">스터디명</span>
          <span className="header-item item-leader-column">리더</span>
          <span className="header-item item-date-column">시작일</span>
          <span className="header-item item-members-column">인원</span>
          <span className="header-item item-join-column">참여</span>
        </div>
        <div className="group-table-body">
          {mockGroups.map((group) => (
            <div
              className={`group-table-row ${group.status === '모집완료' ? 'status-completed' : ''}`}
              key={group.id}
            >
              <div className="row-item item-title-column">
                <div className="group-title-card">
                  <span className={`group-status-badge status-${group.status === '모집중' ? 'recruiting' : 'completed'}`}>
                    {group.status}
                  </span>
                  <a href={`/groups/${group.id}`} className="group-name-link">
                    {group.name}
                  </a>
                  <p className="group-description">{group.description}</p>
                  <div className="group-tags">
                    {group.tags && group.tags.map(tag => (
                      <span key={tag} className="group-tag-item">#{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
              <span className="row-item item-leader-column">{group.leader.nickname}</span>
              <span className="row-item item-date-column">{group.startDate}</span>
              <span className="row-item item-members-column">
                <span className="current-members">{group.currentMembers}</span>/
                <span className="total-members">{group.totalMembers}</span>명
              </span>

              <span className="row-item item-join-column">
                <Button
                  small
                  variant={group.status === '모집중' ? 'primary' : 'secondary'}
                  disabled={group.status !== '모집중'}
                >
                  {group.status === '모집중' ? '참여' : '마감'}
                </Button>
              </span>
            </div>
          ))}
        </div>

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