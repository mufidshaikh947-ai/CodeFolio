import {
    User,
    FolderOpen,
    Code2,
    Briefcase,
    GraduationCap,
    Award,
    Mail,
    Sparkles
} from "lucide-react";

import PageHeader from "../components/ui/PageHeader";
import SectionCard from "../components/ui/SectionCard";
import StatCard from "../components/ui/StatCard";
import { useNavigate } from "react-router-dom";

const modules = [
    {
        title: "Profile",
        value: "Manage Profile",
        description: "Personal details, social links and portfolio settings.",
        path: "/profile",
        icon: User,
        color: "blue"
    },
    {
        title: "Projects",
        value: "Manage Projects",
        description: "Showcase your best work and live demos.",
        path: "/projects",
        icon: FolderOpen,
        color: "emerald"
    },
    {
        title: "Skills",
        value: "Manage Skills",
        description: "Update your technologies and proficiency.",
        path: "/skills",
        icon: Code2,
        color: "amber"
    },
    {
        title: "Experience",
        value: "Manage Experience",
        description: "Internships, jobs and professional journey.",
        path: "/experience",
        icon: Briefcase,
        color: "rose"
    },
    {
        title: "Education",
        value: "Manage Education",
        description: "Academic qualifications and coursework.",
        path: "/education",
        icon: GraduationCap,
        color: "blue"
    },
    {
        title: "Certificates",
        value: "Manage Certificates",
        description: "Professional certifications and achievements.",
        path: "/certificates",
        icon: Award,
        color: "emerald"
    },
    {
        title: "Messages",
        value: "View Messages",
        description: "Read portfolio enquiries and contact requests.",
        path: "/messages",
        icon: Mail,
        color: "amber"
    }
];

function DashboardPage() {
    const navigate = useNavigate();
    return (
        <div className="space-y-8">
            {/* Header */}
            <PageHeader
                title="Welcome Back 👋"
                description="Manage your portfolio, projects, and professional profile from one central workspace."
            />

            {/* Quick Modules */}
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {modules.map((item) => (
                  <StatCard
    key={item.title}
    title={item.title}
    value={item.value}
    description={item.description}
    icon={item.icon}
    color={item.color}
    clickable
    onClick={() => navigate(item.path)}
/>
                ))}
            </div>

            {/* Information Section */}
            <SectionCard>
                <div className="space-y-3">
                    <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/60 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                        <Sparkles size={14} />
                        <span>Portfolio Builder Workspace</span>
                    </div>

                    <h2 className="text-xl font-bold text-slate-900">
                        Portfolio Builder
                    </h2>

                    <p className="max-w-3xl text-sm font-normal leading-relaxed text-slate-600">
                        Complete your profile, add projects, upload certificates, and keep your portfolio updated. Every change you make here is automatically reflected on your public developer portfolio.
                    </p>
                </div>
            </SectionCard>
        </div>
    );
}

export default DashboardPage;