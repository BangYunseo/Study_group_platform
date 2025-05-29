import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../../layout/MainLayout/MainLayout";

import "./MaterialDetailPage.css"; // MaterialDetailPage 전용 CSS 파일

// 임시 문제 데이터 (실제로는 API에서 가져올 수 있음)
const sampleProblemsData = {
  "language-toeic": [
    {
      id: 1,
      question: "Q1. 다음 중 가장 맛있는 과일은?",
      options: ["딸기", "바나나", "사과", "망고"],
      answer: "딸기",
    },
    {
      id: 2,
      question: "Q2. 학교가기 가장 싫은 날은?",
      options: ["월", "화", "수", "목"],
      answer: "월",
    },
    {
      id: 3,
      question: "Q3. 가장 높은 산은?",
      options: ["에베레스트", "한라산", "백두산", "금강산"],
      answer: "에베레스트",
    },
  ],
  "license-sqld": [
    {
      id: 1,
      question: "Q1. SQLD에서 D는 무엇의 약자인가?",
      options: ["Data", "Design", "Development", "Database"],
      answer: "Development",
    },
    {
      id: 2,
      question: "Q2. 다음 중 SQLD 시험 과목이 아닌 것은?",
      options: ["데이터 모델링", "SQL 기본", "SQL 활용", "데이터베이스 최적화"],
      answer: "데이터베이스 최적화",
    },
    {
      id: 3,
      question: "Q3. 관계형 데이터베이스의 핵심 개념은?",
      options: ["테이블", "쿼리", "뷰", "인덱스"],
      answer: "테이블",
    },
  ],
};

const MaterialDetailPage = () => {
  const { mainCategory, subCategory } = useParams();
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAnswer, setShowAnswer] = useState({});

  useEffect(() => {
    setLoading(true);
    const key = `${mainCategory}-${subCategory}`;
    const data = sampleProblemsData[key] || [];
    setProblems(data);
    setLoading(false);
    setShowAnswer({});
  }, [mainCategory, subCategory]);

  const handleToggleAnswer = (problemId) => {
    setShowAnswer((prev) => ({
      ...prev,
      [problemId]: !prev[problemId],
    }));
  };

  const getPageTitle = () => {
    let mainTitle = "";
    let subTitle = "";
    switch (mainCategory) {
      case "language":
        mainTitle = "어학";
        break;
      case "license":
        mainTitle = "자격증";
        break;
      case "programming":
        mainTitle = "프로그래밍";
        break;
      default:
        mainTitle = "자료";
    }
    switch (subCategory) {
      case "toeic":
        subTitle = "TOEIC";
        break;
      case "toeic-speaking":
        subTitle = "TOEIC Speaking";
        break;
      case "opic":
        subTitle = "OPIC";
        break;
      case "sqld":
        subTitle = "SQLD";
        break;
      case "adsp":
        subTitle = "ADsP";
        break;
      case "info-processing-eng":
        subTitle = "정보처리기사";
        break;
      case "bigdata-analysis-eng":
        subTitle = "빅데이터분석기사";
        break;
      case "react":
        subTitle = "React";
        break;
      case "javascript":
        subTitle = "JavaScript";
        break;
      case "python":
        subTitle = "Python";
        break;
      default:
        subTitle = "상세 자료";
    }
    return `${mainTitle} > ${subTitle} 문제`;
  };

  if (loading)
    return (
      <MainLayout>
        <div className="materials-main-container">문제를 불러오는 중...</div>
      </MainLayout>
    );

  return (
    <MainLayout>
      <div className="material-detail-container">
        <h1 className="page-title">{getPageTitle()}</h1>
        {problems.length > 0 ? (
          <div className="problem-list">
            {problems.map((problem) => (
              <div key={problem.id} className="problem-card">
                <p className="question">{problem.question}</p>
                <div className="options">
                  {problem.options.map((option, idx) => (
                    <div key={idx} className="option-item">
                      <input
                        type="radio"
                        id={`q${problem.id}-opt${idx}`}
                        name={`q${problem.id}`}
                        value={option}
                        disabled
                      />
                      <label htmlFor={`q${problem.id}-opt${idx}`}>
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
                <div className="problem-actions">
                  <button
                    onClick={() => handleToggleAnswer(problem.id)}
                    className="btn small primary"
                  >
                    {showAnswer[problem.id] ? "정답 숨기기" : "정답 확인"}
                  </button>
                </div>
                {showAnswer[problem.id] && (
                  <p className="answer-reveal">
                    정답: <span className="answer-text">{problem.answer}</span>
                  </p>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p>이 세부 카테고리에 해당하는 문제가 없습니다.</p>
        )}
      </div>
    </MainLayout>
  );
};

export default MaterialDetailPage;
