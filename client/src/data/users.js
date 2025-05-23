export const mockUsers = [
  {
    id: "user-0",
    nickname: "관리자",
    email: "manager123@naver.com",
    password: "123",
    interests: ["해킹"],
    intro: "ㅇㅇ",
    profileImage: null,
  },
  {
    id: "user-2",
    nickname: "이영희",
    email: "lee@example.com",
    password: "mypassword",
    interests: ["React", "Node.js", "프로젝트"],
    intro: "프론트엔드 개발에 열정적인 개발자입니다.",
    profileImage: null,
  },
  {
    id: "user-3",
    nickname: "박민수",
    email: "park@example.com",
    password: "1111",
    interests: ["토익", "영어 회화"],
    intro: "토익 고득점과 영어 회화 실력 향상을 목표로 합니다.",
    profileImage: null,
  },
  {
    id: "user-4",
    nickname: "합격기원",
    email: "pass@example.com",
    password: "pass",
    interests: ["정보처리기사"],
    intro: "정보처리기사 자격증 취득을 위한 여정 중입니다.",
    profileImage: null,
  },
  {
    id: "user-5",
    nickname: "스터디원A",
    email: "a@example.com",
    password: "study",
    interests: ["자격증"],
    intro: "스터디 그룹에 열심히 참여하겠습니다!",
    profileImage: null,
  },
  {
    id: "user-6",
    nickname: "테스트계정",
    email: "testuser@naver.com",
    password: "test",
    interests: ["프론트엔드", "백엔드"],
    intro: "테스트용 계정입니다. 환영합니다!",
    profileImage: null,
  },
];

export const getUserById = (id) => mockUsers.find((user) => user.id === id);
export const getUserByEmail = (email) =>
  mockUsers.find((user) => user.email === email);
