import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import "../styles/layout.css"; // 레이아웃 스타일

const MainLayout = ({
  children,
  showSidebar = false,
  sidebarContent = null,
}) => {
  return (
    <>
      <Header />
      <div className="page-wrapper">
        <div className="container content-area">
          {showSidebar && sidebarContent && (
            <aside className="sidebar">{sidebarContent}</aside>
          )}
          <main
            className="main-content"
            style={{ flexGrow: 1, padding: showSidebar ? "30px" : "0" }}
          >
            {children}
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
