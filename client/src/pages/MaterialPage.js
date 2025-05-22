import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import Button from "../components/common/Button";
import QuizProblem from "../components/materials/QuizProblem";
import InputField from "../components/common/InputField";
import MaterialEditor from "../components/materials/MaterialEditor"; // MaterialEditor 컴포넌트 임포트

// Mock Quiz Data
const mockQuizProblems = [
  {
    number: 1,
    question: "다음 중 가장 맛있는 과일은 ?",
    options: ["딸기", "바나나", "사과", "망고"],
    correctAnswer: ["딸기", "바나나", "사과", "망고"], // 모든 옵션이 정답인 경우 (배열)
    explanation: "사실 모든 과일은 다 맛있죠!",
  },
  {
    number: 2,
    question: "학교가기 가장 싫은 날은 ?",
    options: ["월", "화", "수", "목"],
    correctAnswer: ["월", "화", "수", "목"], // 모든 옵션이 정답인 경우 (배열)
    explanation: "사실 항상 가기 싫죠?",
  },
  // ... 추가 문제들
];

const MaterialPage = () => {
  // 편집 모드 상태 추가
  const [isEditMode, setIsEditMode] = useState(false);

  // 편집 모드 토글 함수
  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  const sidebarContent = (
    <>
      <h3 className="section-title">스터디 자료</h3>
      <nav>
        <ul>
          <li>
            <a href="#" className="active">
              <i className="fas fa-book"></i> 정보처리기사 이론
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-question-circle"></i> 정보처리기사 문제은행
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-react"></i> React 기본 가이드
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-graduation-cap"></i> 토익 LC 단어장
            </a>
          </li>
        </ul>
      </nav>
      <Button primary style={{ width: "100%", marginTop: "20px" }} icon="plus">
        새 자료 추가
      </Button>
    </>
  );

  return (
    <MainLayout showSidebar sidebarContent={sidebarContent}>
      <div className="section-header">
        <h2>정보처리기사 문제은행 - 챕터 1</h2>
        {/* 편집 모드 버튼에 onClick 이벤트 추가 및 텍스트 조건부 변경 */}
        <Button secondary small icon="edit" onClick={toggleEditMode}>
          {isEditMode ? "뷰 모드" : "편집 모드"}
        </Button>
      </div>

      {/* Quiz Problems Section */}
      {mockQuizProblems.map((problem) => (
        <QuizProblem key={problem.number} problem={problem} />
      ))}

      {/* isEditMode 상태에 따라 MaterialEditor 컴포넌트 렌더링 */}
      {isEditMode && <MaterialEditor />}
    </MainLayout>
  );
};

export default MaterialPage;
