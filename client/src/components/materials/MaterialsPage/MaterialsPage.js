import MainLayout from "../../layout/MainLayout/MainLayout";
import { Link } from "react-router-dom";
import "./MaterialsPage.css";

const categories = [
  {
    id: "language",
    name: "어학",
    description: "토익, 오픽 등 어학 스터디 자료",
    path: "/materials/category/language",
  },
  {
    id: "license",
    name: "자격증",
    description: "SQLD, 정보처리기사 등 자격증 자료",
    path: "/materials/category/license",
  },
  {
    id: "programming",
    name: "프로그래밍",
    description: "개발 언어, 알고리즘 관련 자료",
    path: "/materials/category/programming",
  },
];

const MaterialsPage = () => {
  return (
    <MainLayout>
      <div className="materials-main-container">
        <h1 className="page-title">스터디 자료 카테고리</h1>

        <div className="category-grid">
          {categories.map((category) => (
            <Link
              to={category.path}
              key={category.id}
              className="category-card-link"
            >
              <div className="category-card">
                <h3>{category.name}</h3>
                <p>{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default MaterialsPage;
