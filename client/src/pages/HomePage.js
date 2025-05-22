import MainLayout from "../layouts/MainLayout";

const HomePage = () => {
  return (
    <MainLayout>
      <div style={{ textAlign: "center", padding: "50px 0" }}>
        <h1>환영합니다!</h1>
        <p>
          Study-Group-Platform의 홈 페이지입니다. 공통 관심사나 목표에 따른
          스터디 그룹 및 프로젝트 팀을 찾아보세요.
        </p>
        <p>상단 메뉴를 클릭하여 다양한 기능을 이용해보세요.</p>
      </div>
    </MainLayout>
  );
};

export default HomePage;
