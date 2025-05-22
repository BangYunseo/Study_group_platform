import { Link } from "react-router-dom";
import Button from "../common/Button";

const GroupCard = ({ group }) => {
  return (
    <div className="group-card">
      <div className="group-card-header">
        <h3>{group.name}</h3>
        <span
          className={`status ${group.recruiting ? "recruiting" : "completed"}`}
        >
          {group.recruiting ? "모집중" : "모집완료"}
        </span>
      </div>
      <div className="group-card-body">
        <p className="group-description">{group.description}</p>
        <div className="group-card-tags">
          <span className="tag primary-tag">#{group.field}</span>
          {group.tags.map((tag, index) => (
            <span key={index} className="tag">
              #{tag}
            </span>
          ))}
        </div>
      </div>
      <div className="group-card-footer">
        <span className="leader">리더: {group.leader.nickname}</span>
        <span className="members">
          <i className="fas fa-users"></i> {group.members}/{group.maxMembers}명
        </span>
        <Link to={`/groups/${group.id}`}>
          <Button
            size="small"
            variant={group.recruiting ? "primary" : "secondary"}
          >
            상세 보기
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default GroupCard;
