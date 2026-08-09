import {
    LayoutDashboard,
    User,
    Code2,
    FolderOpen,
    Briefcase,
    GraduationCap,
    Award,
    Mail,
    Crown
} from "lucide-react";
import { NavLink } from "react-router-dom";

const navigation = [
    { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
    { name: "Profile", path: "/profile", icon: User },
    { name: "Skills", path: "/skills", icon: Code2 },
    { name: "Projects", path: "/projects", icon: FolderOpen },
    { name: "Experience", path: "/experience", icon: Briefcase },
    { name: "Education", path: "/education", icon: GraduationCap },
    { name: "Certificates", path: "/certificates", icon: Award },
    { name: "Messages", path: "/messages", icon: Mail },
    { name: "Premium", path: "/premium", icon: Crown }
];

function Sidebar({ sidebarOpen }) {

    return (

       <aside
    className={`
        flex
        h-screen
        flex-shrink-0
        flex-col
        overflow-hidden
        border-r
        border-slate-200
        bg-white
        shadow-lg
        transition-all
        duration-300
        ease-in-out
        ${sidebarOpen ? "w-80" : "w-24"}
    `}
>

            {/* Logo */}

            <div className="border-b border-slate-200 px-5 py-6">

                <div
                    className={`
                        flex
                        items-center
                        ${sidebarOpen ? "gap-4" : "justify-center"}
                    `}
                >

                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-500/25">

                        <Code2 size={28} />

                    </div>

                    {sidebarOpen && (

                        <div className="min-w-0">

                            <h1 className="text-2xl font-bold tracking-tight text-slate-900">

                                CodeFolio

                            </h1>

                            <p className="mt-1 text-sm font-medium text-slate-500">

                                Developer Portfolio CMS

                            </p>

                        </div>

                    )}

                </div>

            </div>

            {/* Navigation */}

            <nav className="flex-1 px-4 py-6">

                {sidebarOpen && (

                    <p className="mb-6 px-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">

                        Main Navigation

                    </p>

                )}

                <ul
                    className={`
                        flex
                        h-full
                        flex-col
                        ${sidebarOpen
                            ? "justify-evenly"
                            : "items-center justify-evenly"}
                    `}
                >

                    {navigation.map((item) => {

                        const Icon = item.icon;

                        return (

                            <li
                                key={item.path}
                                className={sidebarOpen ? "w-full" : ""}
                            >

                                <NavLink

                                    to={item.path}

                                    title={!sidebarOpen ? item.name : ""}

                                    className={({ isActive }) => `
                                        group
                                        flex
                                        items-center
                                        rounded-2xl
                                        border
                                        transition-all
                                        duration-200
                                        ${
                                            sidebarOpen
                                                ? "w-full gap-4 px-5 py-4"
                                                : "h-16 w-16 justify-center"
                                        }
                                        ${
                                            isActive
                                                ? `
                                                    border-blue-600
                                                    bg-blue-600
                                                    text-white
                                                    shadow-lg
                                                    shadow-blue-500/20
                                                `
                                                : `
                                                    border-slate-200
                                                    bg-white
                                                    text-slate-600
                                                    hover:border-slate-300
                                                    hover:bg-slate-50
                                                    hover:text-slate-900
                                                    hover:shadow-md
                                                `
                                        }
                                    `}
                                >

                                    <Icon

                                        size={sidebarOpen ? 23 : 24}

                                        className="shrink-0"

                                    />

                                    {sidebarOpen && (

                                        <span className="text-base font-semibold">

                                            {item.name}

                                        </span>

                                    )}

                                </NavLink>

                            </li>

                        );

                    })}

                </ul>

            </nav>

            {/* Footer */}

            <div className="border-t border-slate-200 px-5 py-5">

                {sidebarOpen ? (

                    <div className="flex items-center justify-between">

                        <span className="text-sm font-medium text-slate-500">

                            CodeFolio v1.0

                        </span>

                        <span className="h-3 w-3 rounded-full bg-emerald-500" />

                    </div>

                ) : (

                    <div className="flex justify-center">

                        <span className="h-3 w-3 rounded-full bg-emerald-500" />

                    </div>

                )}

            </div>

        </aside>

    );

}

export default Sidebar;
