import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import ProfilePage from "./pages/ProfilePage";
import SkillsPage from "./pages/SkillsPage";
import ProjectsPage from "./pages/ProjectsPage";
import ExperiencePage from "./pages/ExperiencePage";
import EducationPage from "./pages/EducationPage";
import CertificatesPage from "./pages/CertificatesPage";
import MessagesPage from "./pages/MessagesPage";
import NotFoundPage from "./pages/NotFoundPage";
import PortfolioPage from "./pages/PortfolioPage";

import AuthLayout from "./layouts/AuthLayout";
import DashboardLayout from "./layouts/DashboardLayout";

import ProtectedRoute from "./components/common/ProtectedRoute";
import PublicRoute from "./components/common/PublicRoute";

function App() {
    return (
        <Routes>

            {/* Home */}
            <Route path="/" element={<HomePage />} />

            {/* Authentication */}

            <Route element={<AuthLayout />}>

                <Route
                    path="/login"
                    element={
                        <PublicRoute>
                            <LoginPage />
                        </PublicRoute>
                    }
                />

                <Route
                    path="/register"
                    element={
                        <PublicRoute>
                            <RegisterPage />
                        </PublicRoute>
                    }
                />

            </Route>

            {/* Dashboard */}

           {/* Dashboard */}

<Route
    element={
        <ProtectedRoute>
            <DashboardLayout />
        </ProtectedRoute>
    }
>

    <Route path="/dashboard" element={<DashboardPage />} />

    <Route path="/profile" element={<ProfilePage />} />

    <Route path="/skills" element={<SkillsPage />} />

    <Route path="/projects" element={<ProjectsPage />} />

    <Route path="/experience" element={<ExperiencePage />} />

    <Route path="/education" element={<EducationPage />} />

    <Route path="/certificates" element={<CertificatesPage />} />

    <Route path="/messages" element={<MessagesPage />} />

</Route>

{/* Public Portfolio */}

<Route
    path="/:username"
    element={<PortfolioPage />}
/>

{/* 404 */}

<Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}

export default App;