import MainLayout from "../layouts/MainLayout";

const NotFoundPage = () => {
  return (
    <MainLayout>
      <div style={{ textAlign: "center", padding: "100px 0" }}>
        <h1>404 - 페이지를 찾을 수 없습니다.</h1>
        <p>요청하신 페이지가 존재하지 않거나, 다른 주소로 변경되었습니다.</p>
        <a href="/">홈으로 돌아가기</a>
      </div>
    </MainLayout>
  );
};

export default NotFoundPage;
