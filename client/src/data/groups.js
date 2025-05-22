// 그룹 더미 데이터

export const mockGroups = [
  {
    id: "group-1",
    name: "정보처리기사 스터디",
    goal: "2024년 3회차 정보처리기사 자격증 취득",
    field: "자격증",
    members: 2,
    maxMembers: 5,
    recruiting: true,
    period: "2024.06.01 ~ 2024.09.30",
    description:
      "2024년 3회차 정보처리기사 자격증 취득을 목표로 이론 정리 및 문제 풀이를 함께 할 스터디원을 모집합니다.",
    tags: ["자격증", "정보처리기사", "필기", "실기"],
    leader: { id: "user-1", nickname: "김철수" },
    createdAt: "2024-05-20",
  },
  {
    id: "group-2",
    name: "React 웹 개발 프로젝트",
    goal: "포트폴리오용 웹 서비스 개발",
    field: "개발",
    members: 4,
    maxMembers: 4,
    recruiting: false,
    period: "2024.03.01 ~ 2024.05.31",
    description:
      "포트폴리오용 React 기반 웹 서비스를 함께 개발할 팀원을 구합니다. 백엔드 개발자 환영!",
    tags: ["프로젝트", "웹개발", "React", "포트폴리오"],
    leader: { id: "user-2", nickname: "이영희" },
    createdAt: "2024-02-28",
  },
  {
    id: "group-3",
    name: "토익 900+ 달성 스터디",
    goal: "토익 900점 이상 취득",
    field: "어학",
    members: 3,
    maxMembers: 4,
    recruiting: true,
    period: "2024.06.10 ~ 2024.08.10",
    description:
      "매주 실전 모의고사를 풀고 오답을 분석하며 토익 900점 이상을 목표로 하는 스터디입니다.",
    tags: ["어학", "토익", "900점", "LC", "RC"],
    leader: { id: "user-3", nickname: "박민수" },
    createdAt: "2024-06-01",
  },
  {
    id: "group-4",
    name: "JS 알고리즘 스터디",
    goal: "코딩 테스트 실력 향상",
    field: "개발",
    members: 5,
    maxMembers: 6,
    recruiting: true,
    period: "2024.06.01 ~ 2024.08.31",
    description:
      "매주 2회 모여 자바스크립트 알고리즘 문제를 풀고 서로 코드 리뷰를 진행합니다.",
    tags: ["알고리즘", "자바스크립트", "코딩테스트"],
    leader: { id: "user-1", nickname: "김철수" },
    createdAt: "2024-05-25",
  },
];

export const getGroupById = (id) => mockGroups.find((group) => group.id === id);
