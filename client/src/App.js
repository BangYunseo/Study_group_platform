import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GroupListPage from './pages/GroupListPage';
import MaterialsPage from './components/materials/MaterialsPage/MaterialsPage';
import MaterialCategoryPage from './components/materials/MaterialCategoryPage/MaterialCategoryPage';
import MaterialDetailPage from './components/materials/MaterialDetailPage/MaterialDetailPage';
import CommunityPage from './pages/CommunityPage';
import PostDetailPage from './pages/PostDetailPage';
import AuthPage from './pages/AuthPage';
import ProfilePage from './pages/ProfilePage';
import PostCreatePage from './pages/PostCreatePage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/groups" element={<GroupListPage />} />
                <Route path="/materials" element={<MaterialsPage />} />{' '}
                <Route path="/materials/category/:mainCategory" element={<MaterialCategoryPage />} />
                <Route path="/materials/category/:mainCategory/:subCategory" element={<MaterialDetailPage />} />
                <Route path="/community" element={<CommunityPage />} />
                <Route path="/community/post/:id" element={<PostDetailPage />} />
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/profile" element={<ProfilePage />} />{' '}
                <Route path="/community/write" element={<PostCreatePage />} />
            </Routes>
        </Router>
    );
}

export default App;
