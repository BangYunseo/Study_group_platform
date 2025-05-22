// 사용자 더미 데이터

export const mockUsers = [
  {
    id: "user-1",
    nickname: "김철수",
    email: "kim@example.com",
    interests: ["정보처리기사", "웹 개발"],
    intro:
      "안녕하세요! 함께 성장하는 스터디 그룹을 찾고 있습니다. 꾸준함이 강점입니다.",
    profileImage: null, // 실제 이미지 URL
  },
  {
    id: "user-2",
    nickname: "이영희",
    email: "lee@example.com",
    interests: ["React", "Node.js", "프로젝트"],
    intro: "프론트엔드 개발에 열정적인 개발자입니다.",
    profileImage: null,
  },
  {
    id: "user-3",
    nickname: "박민수",
    email: "park@example.com",
    interests: ["토익", "영어 회화"],
    intro: "토익 고득점과 영어 회화 실력 향상을 목표로 합니다.",
    profileImage: null,
  },
  {
    id: "user-4",
    nickname: "합격기원",
    email: "pass@example.com",
    interests: ["정보처리기사"],
    intro: "정보처리기사 자격증 취득을 위한 여정 중입니다.",
    profileImage: null,
  },
  {
    id: "user-5",
    nickname: "스터디원A",
    email: "a@example.com",
    interests: ["자격증"],
    intro: "스터디 그룹에 열심히 참여하겠습니다!",
    profileImage: null,
  },
];

export const getUserById = (id) => mockUsers.find((user) => user.id === id);
export const getUserByEmail = (email) =>
  mockUsers.find((user) => user.email === email);
