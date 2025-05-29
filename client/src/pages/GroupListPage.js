import React, { useState } from "react"; // useState 임포트
import MainLayout from "../components/layout/MainLayout/MainLayout";
import Button from "../components/common/Button";
import InputField from "../components/common/InputField";
import { mockGroups } from "../data/groups";

import "../styles/grouplist.css";

const GroupListPage = () => {
  const [showCreateModal, setShowCreateModal] = useState(false); // 그룹 생성 모달 표시 여부
  const [newGroup, setNewGroup] = useState({
    // 새 그룹 정보 상태
    name: "",
    startDate: "",
    maxMembers: "",
  });
  const [searchTerm, setSearchTerm] = useState(""); // 검색어 상태 추가

  // 검색 버튼 클릭 핸들러 (InputField의 value를 관리하기 위해 searchTerm 상태 사용)
  const handleSearch = () => {
    console.log("검색어:", searchTerm);
    // TODO: 실제 그룹 검색 로직 구현
  };

  // 그룹 생성 버튼 클릭 핸들러
  const handleCreateGroupClick = () => {
    setShowCreateModal(true); // 모달 열기
  };

  // 모달 닫기 핸들러 (취소 버튼, 오버레이 클릭 시)
  const handleModalClose = () => {
    setShowCreateModal(false); // 모달 닫기
    setNewGroup({ name: "", startDate: "", maxMembers: "" }); // 입력 필드 초기화
  };

  // 새 그룹 입력 필드 변경 핸들러
  const handleNewGroupChange = (e) => {
    const { name, value } = e.target;
    setNewGroup((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 그룹 생성 제출 핸들러
  const handleCreateGroupSubmit = () => {
    // 필수 필드 유효성 검사
    if (!newGroup.name || !newGroup.startDate || !newGroup.maxMembers) {
      alert("모든 필드를 입력해주세요.");
      return;
    }
    if (newGroup.maxMembers <= 0) {
      alert("최대 인원은 1명 이상이어야 합니다.");
      return;
    }

    // 실제 데이터베이스 연동 대신 알림만 띄웁니다.
    alert("그룹 생성 완료!");
    console.log("생성될 그룹 정보:", newGroup);

    // TODO: 여기에 실제 그룹 생성 API 호출 로직 추가 (나중에 백엔드 연동 시)
    // 예: createGroup(newGroup).then(...)

    handleModalClose(); // 모달 닫기
  };

  return (
    <MainLayout>
      <div className="group-list-container">
        <div className="section-header">
          <h2>그룹 탐색</h2>
          {/* board-actions에 검색 InputField와 버튼, 그리고 그룹 생성 버튼을 함께 배치 */}
          <div className="board-actions">
            <InputField
              type="text"
              placeholder="그룹 검색..."
              className="search-input"
              value={searchTerm} // 검색어 상태와 연결
              onChange={(e) => setSearchTerm(e.target.value)} // 검색어 변경 핸들러
            />
            <Button
              variant="secondary"
              size="small"
              icon="search" // Button 컴포넌트에 icon prop이 있다고 가정
              onClick={handleSearch} // 검색 버튼 클릭 핸들러
            >
              검색
            </Button>
            {/* 그룹 생성 버튼 추가 */}
            <Button
              variant="primary" // primary variant 사용 (파란색) 또는 새 variant 정의 가능
              size="small"
              onClick={handleCreateGroupClick}
              className="create-group-button" // CSS를 위한 클래스 추가
            >
              그룹 생성
            </Button>
          </div>
        </div>

        {/* 기존 그룹 목록 (변동 없음) */}
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
              className={`group-table-row ${
                group.status === "모집완료" ? "status-completed" : ""
              }`}
              key={group.id}
            >
              <div className="row-item item-title-column">
                <div className="group-title-card">
                  <span
                    className={`group-status-badge status-${
                      group.status === "모집중" ? "recruiting" : "completed"
                    }`}
                  >
                    {group.status}
                  </span>
                  <a href={`/groups/${group.id}`} className="group-name-link">
                    {group.name}
                  </a>
                  <p className="group-description">{group.description}</p>
                  <div className="group-tags">
                    {group.tags &&
                      group.tags.map((tag) => (
                        <span key={tag} className="group-tag-item">
                          #{tag}
                        </span>
                      ))}
                  </div>
                </div>
              </div>
              <span className="row-item item-leader-column">
                {group.leader.nickname}
              </span>
              <span className="row-item item-date-column">
                {group.startDate}
              </span>
              <span className="row-item item-members-column">
                <span className="current-members">{group.currentMembers}</span>/
                <span className="total-members">{group.totalMembers}</span>명
              </span>

              <span className="row-item item-join-column">
                <Button
                  small // small prop은 size="small"과 동일하게 동작한다고 가정
                  variant={group.status === "모집중" ? "primary" : "secondary"}
                  disabled={group.status !== "모집중"}
                >
                  {group.status === "모집중" ? "참여" : "마감"}
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

      {/* 그룹 생성 모달 */}
      {showCreateModal && (
        <div className="modal-overlay" onClick={handleModalClose}>
          {" "}
          {/* 오버레이 클릭 시 모달 닫기 */}
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {" "}
            {/* 모달 내부 클릭은 전파 방지 */}
            <h3>새 그룹 생성</h3>
            <div className="form-group">
              <label htmlFor="name">스터디명:</label>
              <InputField
                type="text"
                id="name"
                name="name"
                value={newGroup.name}
                onChange={handleNewGroupChange}
                placeholder="스터디명을 입력하세요"
              />
            </div>
            <div className="form-group">
              <label htmlFor="startDate">시작일:</label>
              <InputField
                type="date"
                id="startDate"
                name="startDate"
                value={newGroup.startDate}
                onChange={handleNewGroupChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="maxMembers">최대 인원:</label>
              <InputField
                type="number"
                id="maxMembers"
                name="maxMembers"
                value={newGroup.maxMembers}
                onChange={handleNewGroupChange}
                min="1"
                placeholder="최대 인원을 입력하세요"
              />
            </div>
            <div className="modal-actions">
              <Button variant="primary" onClick={handleCreateGroupSubmit}>
                생성
              </Button>
              <Button variant="secondary" onClick={handleModalClose}>
                취소
              </Button>
            </div>
          </div>
        </div>
      )}
    </MainLayout>
  );
};

export default GroupListPage;
