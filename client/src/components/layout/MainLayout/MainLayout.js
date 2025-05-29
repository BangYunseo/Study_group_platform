import React from "react";
import Header from "../../../components/common/Header/Header";
import Footer from "../../../components/common/Footer/Footer";

import "./MainLayout.css";

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
