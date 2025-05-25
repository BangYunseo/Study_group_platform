// studygroup/client/src/data/posts.js (수정 제안)

export const mockPosts = [
  {
    id: "1", // 그대로 유지
    groupId: null,
    title: "React Hooks 사용 시 주의할 점",
    author: { id: "user-2", nickname: "나진짜개발자임" },
    createdAt: "2024.05.21",
    views: 123,
    commentsCount: 3,
    content: `
              <p>안녕하세요! React Hooks를 사용하면서 겪었던 경험과 몇 가지 주의할 점을 공유합니다.</p>
              <h3>1. useEffect의 의존성 배열</h3>
              <p>useEffect 훅을 사용할 때 의존성 배열을 올바르게 지정하는 것이 중요합니다. 배열을 비워두면 컴포넌트 마운트 시 한 번만 실행되지만, 잘못된 의존성을 넣으면 불필요한 렌더링이나 버그의 원인이 될 수 있습니다.</p>
              <h3>2. 불변성 유지</h3>
              <p>React에서 상태를 업데이트할 때는 불변성을 유지하는 것이 좋습니다. 객체나 배열을 직접 수정하는 대신, 스프레드 연산자나 'map', 'filter' 등을 사용하여 새로운 객체/배열을 반환해야 합니다.</p>
              <h3>3. 커스텀 훅 활용</h3>
              <p>반복되는 로직은 커스텀 훅으로 분리하여 재사용성을 높일 수 있습니다. 예를 들어, 폼 데이터 관리나 API 호출 로직 등을 커스텀 훅으로 만들면 코드가 훨씬 깔끔해집니다.</p>
              <p>혹시 다른 좋은 팁이 있다면 댓글로 공유해주세요!</p>
          `,
    comments: [
      {
        id: "comment-1",
        author: { id: "user-1", nickname: "김철수" },
        createdAt: "2024.05.21 14:30",
        content:
          "좋은 정보 감사합니다! 특히 useEffect 의존성 배열은 항상 헷갈리네요.",
      },
      {
        id: "comment-2",
        author: { id: "user-3", nickname: "박민수" },
        createdAt: "2024.05.21 15:00",
        content:
          "저도 커스텀 훅으로 분리하는 연습 중인데, 확실히 코드가 간결해지는 것 같아요.",
      },
      {
        id: "comment-3",
        author: { id: "user-2", nickname: "개발러버" },
        createdAt: "2024.05.21 16:10",
        content: "네 맞아요! 처음에는 좀 어렵지만 익숙해지면 정말 편합니다. 😉",
      },
    ],
  },
  {
    id: "2", // 그대로 유지
    groupId: null,
    title: "정보처리기사 필기 합격 후기 공유합니다!",
    author: { id: "user-4", nickname: "합격기원" },
    createdAt: "2024.05.20",
    views: 254,
    commentsCount: 2,
    content: `
              <p>안녕하세요! 지난 주 정보처리기사 필기 합격해서 기분 좋은 마음에 후기 남깁니다.</p>
              <p>저는 독학으로 준비했고, 인강은 따로 듣지 않고 교재와 문제집 위주로 공부했어요. 특히 기출문제 풀이가 정말 중요했습니다!</p>
              <p>궁금한 점 있으시면 댓글 남겨주세요!</p>
          `,
    comments: [
      {
        id: "comment-4",
        author: { id: "user-1", nickname: "김철수" },
        createdAt: "2024.05.20 18:00",
        content: "축하드립니다! 어떤 교재로 공부하셨는지 궁금해요!",
      },
    ],
  },
  {
    id: "3", // ✅ "post-3"을 "3"으로 수정했습니다.
    groupId: "group-1", // 특정 그룹 게시판
    title: "[정보처리기사 스터디] 이번 주 진도 공지 (6/1 ~ 6/7)",
    author: { id: "user-1", nickname: "김철수" },
    createdAt: "2024.05.25",
    views: 15,
    commentsCount: 2,
    content: `
              <p>안녕하세요, 정보처리기사 스터디 리더 김철수입니다.</p>
              <p>이번 주 스터디 진도 및 과제 공지합니다.</p>
              <ul>
                  <li>챕터 1: 소프트웨어 설계 (교재 50p까지)</li>
                  <li>연습 문제 풀이 (해설 포함)</li>
                  <li>다음 스터디는 6월 8일 (토) 오후 2시 온라인으로 진행합니다.</li>
              </ul>
              <p>질문 있으시면 댓글 남겨주세요!</p>
          `,
    comments: [
      {
        id: "comment-5",
        author: { id: "user-5", nickname: "스터디원A" },
        createdAt: "2024.05.25 10:00",
        content: "네, 확인했습니다! 열심히 할게요!",
      },
    ],
  },
];

export const getPostsByGroupId = (groupId) =>
  mockPosts.filter((post) => post.groupId === groupId);
export const getPostById = (id) => mockPosts.find((post) => post.id === id);
