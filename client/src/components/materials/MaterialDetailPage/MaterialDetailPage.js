import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../../layout/MainLayout/MainLayout";
import Button from "../../common/Button";

import "./MaterialDetailPage.css";

const sampleProblemsData = {
  "language-toeic": [
    {
      id: 1,
      question: "Q1. 다음 중 가장 맛있는 과일은?",
      options: ["딸기", "바나나", "사과", "망고"],
      correctAnswer: "딸기",
      explanation: "딸기는 비타민 C가 풍부하며 대중적으로 사랑받는 과일입니다.",
    },
    {
      id: 2,
      question: "Q2. 학교가기 가장 싫은 날은?",
      options: ["월", "화", "수", "목"],
      correctAnswer: "월",
      explanation:
        "월요일은 주말이 끝나고 새로운 한 주의 시작이기 때문에 많은 사람들이 싫어합니다.",
    },
    {
      id: 3,
      question: "Q3. 가장 높은 산은?",
      options: ["에베레스트", "한라산", "백두산", "금강산"],
      correctAnswer: "에베레스트",
      explanation: "에베레스트는 해발 8,848.86m로 세계에서 가장 높은 산입니다.",
    },
  ],
  "license-sqld": [
    {
      id: 1,
      question: "Q1. SQLD에서 D는 무엇의 약자인가?",
      options: ["Data", "Design", "Development", "Database"],
      correctAnswer: "Development",
      explanation: "SQLD는 'SQL Developer'의 약자입니다.",
    },
    {
      id: 2,
      question: "Q2. 다음 중 SQLD 시험 과목이 아닌 것은?",
      options: ["데이터 모델링", "SQL 기본", "SQL 활용", "데이터베이스 최적화"],
      correctAnswer: "데이터베이스 최적화",
      explanation:
        "데이터베이스 최적화는 SQLD의 직접적인 시험 과목은 아닙니다.",
    },
    {
      id: 3,
      question: "Q3. 관계형 데이터베이스의 핵심 개념은?",
      options: ["테이블", "쿼리", "뷰", "인덱스"],
      correctAnswer: "테이블",
      explanation: "관계형 데이터베이스는 데이터를 테이블 형태로 구성합니다.",
    },
  ],
  "license-adsp": [
    {
      id: 1,
      question: "Q1. ADsP에서 's'는 무엇의 약자인가?",
      options: ["Scientist", "Specialist", "System", "Statistic"],
      correctAnswer: "Specialist",
      explanation: "ADsP는 Advanced Data Analytics Specialist의 약자입니다.",
    },
    {
      id: 2,
      question: "Q2. 다음 중 데이터마이닝 기법이 아닌 것은?",
      options: ["회귀분석", "군집분석", "연관규칙", "정규화"],
      correctAnswer: "정규화",
      explanation: "정규화는 데이터베이스 설계 기법입니다.",
    },
    {
      id: 3,
      question: "Q3. 데이터 분석 과정 중 가장 먼저 수행되어야 하는 단계는?",
      options: ["데이터 수집", "모델링", "결과 해석", "시각화"],
      correctAnswer: "데이터 수집",
      explanation: "데이터 분석의 시작은 데이터 수집입니다.",
    },
  ],
  "license-info-processing-eng": [
    {
      id: 1,
      question: "Q1. 정보처리기사 필기 과목 중 하나가 아닌 것은?",
      options: [
        "소프트웨어 개발",
        "데이터베이스 구축",
        "운영체제",
        "네트워크 관리",
      ],
      correctAnswer: "네트워크 관리",
      explanation:
        "네트워크 관리는 정보처리기사 필기 과목에 직접 포함되지 않습니다.",
    },
    {
      id: 2,
      question: "Q2. 운영체제에서 프로세스 스케줄링 기법이 아닌 것은?",
      options: ["FCFS", "SJF", "Round Robin", "Hashing"],
      correctAnswer: "Hashing",
      explanation: "Hashing은 데이터 저장 및 검색 기법입니다.",
    },
    {
      id: 3,
      question: "Q3. 관계형 데이터 모델의 제약조건이 아닌 것은?",
      options: ["개체 무결성", "참조 무결성", "도메인 무결성", "튜플 무결성"],
      correctAnswer: "튜플 무결성",
      explanation:
        "튜플 무결성은 관계형 데이터 모델의 주요 제약조건이 아닙니다.",
    },
  ],
  "license-bigdata-analysis-eng": [
    {
      id: 1,
      question: "Q1. 빅데이터의 3V에 해당하지 않는 것은?",
      options: ["Volume", "Variety", "Velocity", "Validity"],
      correctAnswer: "Validity",
      explanation: "빅데이터의 3V는 Volume, Velocity, Variety입니다.",
    },
    {
      id: 2,
      question: "Q2. 다음 중 비정형 데이터를 처리하는 데 사용되는 기술은?",
      options: ["RDBMS", "SQL", "NoSQL", "Excel"],
      correctAnswer: "NoSQL",
      explanation: "NoSQL 데이터베이스는 비정형 데이터 처리에 유용합니다.",
    },
    {
      id: 3,
      question: "Q3. 빅데이터 분석 시 데이터 전처리 과정이 아닌 것은?",
      options: ["결측치 처리", "이상치 탐지", "데이터 정규화", "모델 학습"],
      correctAnswer: "모델 학습",
      explanation: "모델 학습은 데이터 전처리 이후에 수행되는 단계입니다.",
    },
  ],
};

const MaterialDetailPage = () => {
  const { mainCategory, subCategory } = useParams();
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentProblemIndex, setCurrentProblemIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  useEffect(() => {
    setLoading(true);
    const key = `${mainCategory}-${subCategory}`;
    const data = sampleProblemsData[key] || [];
    setProblems(data);
    setCurrentProblemIndex(0);
    setSelectedOption(null);
    setShowFeedback(false);
    setLoading(false);
  }, [mainCategory, subCategory]);

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

  const currentProblem = problems[currentProblemIndex];

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    setShowFeedback(false);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null) {
      alert("옵션을 선택해주세요!");
      return;
    }
    setShowFeedback(true);
  };

  const handleNextProblem = () => {
    if (currentProblemIndex < problems.length - 1) {
      setCurrentProblemIndex(currentProblemIndex + 1);
      setSelectedOption(null);
      setShowFeedback(false);
    } else {
      alert("모든 문제를 푸셨습니다!");
    }
  };

  const isCorrect = currentProblem
    ? Array.isArray(currentProblem.correctAnswer)
      ? currentProblem.correctAnswer.includes(selectedOption)
      : selectedOption === currentProblem.correctAnswer
    : false;

  if (loading) {
    return (
      <MainLayout>
        <div className="materials-main-container">문제를 불러오는 중...</div>
      </MainLayout>
    );
  }

  if (!currentProblem) {
    return (
      <MainLayout>
        <div className="material-detail-container">
          <h1 className="page-title">{getPageTitle()}</h1>
          <p>해당 카테고리의 문제가 없거나 모든 문제를 풀었습니다.</p>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="material-detail-container">
        <h1 className="page-title">{getPageTitle()}</h1>
        <div className="problem-card">
          <p className="question-number">Q{currentProblem.id}.</p>
          <p className="question">{currentProblem.question}</p>
          <div className="options">
            {currentProblem.options.map((option, idx) => (
              <div key={idx} className="option-item">
                <input
                  type="radio"
                  id={`q${currentProblem.id}-opt${idx}`}
                  name={`q${currentProblem.id}`}
                  value={option}
                  checked={selectedOption === option}
                  onChange={handleOptionChange}
                />
                <label htmlFor={`q${currentProblem.id}-opt${idx}`}>
                  {option}
                </label>
              </div>
            ))}
          </div>
          <div className="problem-actions">
            <Button primary onClick={handleSubmitAnswer} icon="check">
              정답 확인
            </Button>
            <Button
              secondary
              onClick={handleNextProblem}
              icon="arrow-right"
              disabled={currentProblemIndex === problems.length - 1}
            >
              {currentProblemIndex === problems.length - 1
                ? "문제 풀이 완료"
                : "다음 문제"}
            </Button>
            <Button small secondary icon="star" title="즐겨찾기 추가"></Button>{" "}
          </div>

          {showFeedback && (
            <div
              className={`answer-feedback ${
                isCorrect ? "correct" : "incorrect"
              }`}
            >
              <p>{isCorrect ? "정답입니다!" : "오답입니다."}</p>
              {currentProblem.explanation && (
                <p className="explanation">
                  해설: {currentProblem.explanation}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default MaterialDetailPage;
