// studygroup/client/src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import global styles
import "./styles/global.css";
import "./styles/common.css";
import "./styles/layout.css";

// Import pages
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import GroupListPage from "./pages/GroupListPage";
import GroupDetailPage from "./pages/GroupDetailPage";
import MaterialPage from "./pages/MaterialPage";
import CommunityPage from "./pages/CommunityPage";
import PostDetailPage from "./pages/PostDetailPage";
import ProfilePage from "./pages/ProfilePage";
import NotFoundPage from "./pages/NotFoundPage"; // 선택 사항

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/groups" element={<GroupListPage />} />
        <Route path="/groups/:id" element={<GroupDetailPage />} />{" "}
        {/* 그룹 상세 페이지 */}
        <Route path="/materials" element={<MaterialPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/community/:id" element={<PostDetailPage />} />{" "}
        {/* 게시물 상세 페이지 */}
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<NotFoundPage />} />{" "}
        {/* 404 Not Found 페이지 */}
      </Routes>
    </Router>
  );
}

export default App;
