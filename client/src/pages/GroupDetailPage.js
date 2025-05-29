import { useParams, Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Button from "../components/common/Button";
import { getGroupById } from "../data/groups";

const GroupDetailPage = () => {
  const { id } = useParams();
  const group = getGroupById(id);

  if (!group) {
    return (
      <MainLayout>
        <div className="main-content">
          <h2>그룹을 찾을 수 없습니다.</h2>
          <p>존재하지 않는 그룹이거나 삭제된 그룹입니다.</p>
        </div>
      </MainLayout>
    );
  }

  const currentUserIsLeader = group.leader.id === "user-1";

  return (
    <MainLayout>
      <div className="section-header">
        <h2>{group.name}</h2>
        <div className="group-actions">
          {group.recruiting && (
            <Button variant="primary" icon="user-plus">
              그룹 참여 요청
            </Button>
          )}
          {currentUserIsLeader && (
            <>
              <Button variant="secondary" icon="edit">
                그룹 정보 수정
              </Button>
              <Button
                variant="secondary"
                icon="times"
                onClick={() => alert("그룹 해체 기능")}
              >
                그룹 해체
              </Button>
            </>
          )}
          <Link to="/groups">
            <Button variant="secondary">목록으로</Button>
          </Link>
        </div>
      </div>

      <div
        className="group-detail-info"
        style={{
          marginBottom: "30px",
          borderBottom: "1px solid var(--border-color-light)",
          paddingBottom: "20px",
        }}
      >
        <p>
          <strong>목표:</strong> {group.goal}
        </p>
        <p>
          <strong>학습 분야:</strong>{" "}
          <span className="tag primary-tag">{group.field}</span>
        </p>
        <p>
          <strong>모집 현황:</strong> {group.members}/{group.maxMembers}명{" "}
          <span
            className={`status ${
              group.recruiting ? "recruiting" : "completed"
            }`}
          >
            {group.recruiting ? "모집중" : "모집완료"}
          </span>
        </p>
        <p>
          <strong>모집 기간:</strong> {group.period}
        </p>
        <p>
          <strong>리더:</strong> {group.leader.nickname}
        </p>
        <p>
          <strong>태그:</strong>{" "}
          {group.tags.map((tag, index) => (
            <span key={index} className="tag" style={{ marginRight: "5px" }}>
              {tag}
            </span>
          ))}
        </p>
      </div>

      <h3>그룹 소개</h3>
      <div
        style={{
          border: "1px solid var(--border-color-light)",
          borderRadius: "8px",
          padding: "20px",
          backgroundColor: "var(--bg-white)",
          marginBottom: "30px",
          minHeight: "100px",
        }}
      >
        <p>{group.description}</p>
      </div>

      <h3>그룹 멤버 ({group.members}명)</h3>
      <div
        style={{
          border: "1px solid var(--border-color-light)",
          borderRadius: "8px",
          padding: "20px",
          backgroundColor: "var(--bg-white)",
          marginBottom: "30px",
        }}
      >
        <p>멤버 목록이 여기에 표시됩니다.</p>
        <ul style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          <li>
            <span className="tag">{group.leader.nickname} (리더)</span>
          </li>
          <li>
            <span className="tag">멤버2</span>
          </li>
          <li>
            <span className="tag">멤버3</span>
          </li>
        </ul>
        {currentUserIsLeader && (
          <Button
            size="small"
            variant="secondary"
            style={{ marginTop: "15px" }}
            icon="users-slash"
            onClick={() => alert("멤버 관리/강퇴 기능")}
          >
            멤버 관리
          </Button>
        )}
      </div>

      <h3>그룹 게시판</h3>
      <div
        style={{
          border: "1px solid var(--border-color-light)",
          borderRadius: "8px",
          padding: "20px",
          backgroundColor: "var(--bg-white)",
          marginBottom: "30px",
        }}
      >
        <p>여기에 그룹 내 게시판 목록이 표시됩니다.</p>
        <Link to={`/community?groupId=${group.id}`}>
          <Button size="small" variant="secondary">
            게시판 바로가기
          </Button>
        </Link>
      </div>
    </MainLayout>
  );
};

export default GroupDetailPage;
