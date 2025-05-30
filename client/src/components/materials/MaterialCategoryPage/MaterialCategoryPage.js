import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import MainLayout from "../../layout/MainLayout/MainLayout";

import "./MaterialCategoryPage.css";

const subCategoriesData = {
  language: [
    {
      id: "toeic",
      name: "TOEIC",
      description: "토익 시험 대비 자료",
      downloadUrl: "/materials/pdfs/toeic.pdf",
      problemUrl: "/materials/category/language/toeic",
    },
    {
      id: "toeic-speaking",
      name: "TOEIC Speaking",
      description: "토익 스피킹 시험 대비 자료",
      downloadUrl: "/materials/pdfs/toeic-speaking.pdf",
      problemUrl: "/materials/category/language/toeic-speaking",
    },
    {
      id: "opic",
      name: "OPIC",
      description: "오픽 시험 대비 자료",
      downloadUrl: "/materials/pdfs/opic.pdf",
      problemUrl: "/materials/category/language/opic",
    },
  ],
  license: [
    {
      id: "sqld",
      name: "SQLD",
      description: "SQL 개발자 자격증 자료",
      downloadUrl: "/materials/pdfs/sqld.pdf",
      problemUrl: "/materials/category/license/sqld",
    },
    {
      id: "adsp",
      name: "ADsP",
      description: "데이터 분석 준전문가 자격증 자료",
      downloadUrl: "/materials/pdfs/adsp.pdf",
      problemUrl: "/materials/category/license/adsp",
    },
    {
      id: "info-processing-eng",
      name: "정보처리기사",
      description: "정보처리기사 필기/실기 자료",
      downloadUrl: "/materials/pdfs/info-processing-eng.pdf",
      problemUrl: "/materials/category/license/info-processing-eng",
    },
    {
      id: "bigdata-analysis-eng",
      name: "빅데이터분석기사",
      description: "빅데이터분석기사 자료",
      downloadUrl: "/materials/pdfs/bigdata-analysis-eng.pdf",
      problemUrl: "/materials/category/license/bigdata-analysis-eng",
    },
  ],
  programming: [
    {
      id: "react",
      name: "React",
      description: "React 프레임워크 학습 자료",
      downloadUrl: "/materials/pdfs/react.pdf",
      problemUrl: "/materials/category/programming/react",
    },
    {
      id: "javascript",
      name: "JavaScript",
      description: "자바스크립트 기본 및 심화 자료",
      downloadUrl: "/materials/pdfs/javascript.pdf",
      problemUrl: "/materials/category/programming/javascript",
    },
    {
      id: "python",
      name: "Python",
      description: "파이썬 프로그래밍 자료",
      downloadUrl: "/materials/pdfs/python.pdf",
      problemUrl: "/materials/category/programming/python",
    },
  ],
};

const MaterialCategoryPage = () => {
  const { mainCategory } = useParams();
  const [subCategories, setSubCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const data = subCategoriesData?.[mainCategory] || [];
    setSubCategories(data);
    setLoading(false);
  }, [mainCategory]);

  const getCategoryTitle = (id) => {
    switch (id) {
      case "language":
        return "어학";
      case "license":
        return "자격증";
      case "programming":
        return "프로그래밍";
      default:
        return "알 수 없는 카테고리";
    }
  };

  const handleDownload = (e, downloadUrl) => {
    e.stopPropagation();
    window.open(downloadUrl, "_blank");
    alert("자료 다운로드를 시작합니다!");
  };

  if (loading)
    return (
      <MainLayout>
        <div className="materials-main-container">
          세부 카테고리를 불러오는 중...
        </div>
      </MainLayout>
    );

  return (
    <MainLayout>
      <div className="materials-main-container">
        <h1 className="page-title">{getCategoryTitle(mainCategory)} 자료</h1>
        {subCategories.length > 0 ? (
          <div className="category-grid">
            {subCategories.map((subCat) => (
              <div key={subCat.id} className="category-card">
                <div className="category-info">
                  <h3>{subCat.name}</h3>
                  <p>{subCat.description}</p>
                </div>
                <div className="category-actions">
                  {subCat.downloadUrl && (
                    <button
                      className="download-button"
                      onClick={(e) => handleDownload(e, subCat.downloadUrl)}
                      title={`${subCat.name} 자료 다운로드`}
                    >
                      <i className="fas fa-download"></i>{" "}
                    </button>
                  )}
                  {subCat.problemUrl && (
                    <Link
                      to={subCat.problemUrl}
                      className="problem-button"
                      title={`${subCat.name} 문제 풀이`}
                    >
                      <i className="fas fa-question-circle"></i>{" "}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>해당 카테고리에 세부 자료가 없습니다.</p>
        )}
      </div>
    </MainLayout>
  );
};

export default MaterialCategoryPage;
