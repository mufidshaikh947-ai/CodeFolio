import {
    LayoutDashboard,
    User,
    Code2,
    FolderOpen,
    Briefcase,
    GraduationCap,
    Award,
    Mail,
    Crown,
    X
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

function Sidebar({ sidebarOpen, setSidebarOpen }) {

    return (

        <>

            {/* Mobile backdrop — tapping it closes the drawer.
                Only rendered below the lg breakpoint, and only
                while the drawer is open. */}

            {sidebarOpen && (

                <div
                    onClick={() => setSidebarOpen(false)}
                    className="fixed inset-0 z-30 bg-slate-900/50 lg:hidden"
                />

            )}

            <aside
                className={`
                    fixed
                    inset-y-0
                    left-0
                    z-40
                    flex
                    h-screen
                    w-72
                    max-w-[85vw]
                    flex-shrink-0
                    flex-col
                    overflow-hidden
                    border-r
                    border-slate-200
                    bg-white
                    shadow-lg
                    transition-transform
                    duration-300
                    ease-in-out
                    ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
                    lg:static
                    lg:z-auto
                    lg:max-w-none
                    lg:translate-x-0
                    ${sidebarOpen ? "lg:w-80" : "lg:w-24"}
                `}
            >

                {/* Logo */}

                <div className="border-b border-slate-200 px-5 py-6">

                    <div className="flex items-center justify-between gap-4">

                        <div
                            className={`
                                flex
                                items-center
                                ${sidebarOpen ? "gap-4" : "lg:justify-center"}
                            `}
                        >

                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-500/25">

                                <Code2 size={28} />

                            </div>

                            <div
                                className={`
                                    min-w-0
                                    ${sidebarOpen ? "" : "lg:hidden"}
                                `}
                            >

                                <h1 className="text-2xl font-bold tracking-tight text-slate-900">

                                    CodeFolio

                                </h1>

                                <p className="mt-1 text-sm font-medium text-slate-500">

                                    Developer Portfolio CMS

                                </p>

                            </div>

                        </div>

                        {/* Close button — mobile only */}

                        <button
                            type="button"
                            onClick={() => setSidebarOpen(false)}
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 text-slate-500 lg:hidden"
                        >

                            <X size={18} />

                        </button>

                    </div>

                </div>

                {/* Navigation */}

                <nav className="flex-1 overflow-y-auto px-4 py-6">

                    <p
                        className={`
                            mb-6
                            px-2
                            text-xs
                            font-bold
                            uppercase
                            tracking-[0.18em]
                            text-slate-400
                            ${sidebarOpen ? "" : "lg:hidden"}
                        `}
                    >

                        Main Navigation

                    </p>

                    <ul
                        className={`
                            flex
                            h-full
                            flex-col
                            justify-evenly
                            ${sidebarOpen ? "" : "lg:items-center"}
                        `}
                    >

                        {navigation.map((item) => {

                            const Icon = item.icon;

                            return (

                                <li
                                    key={item.path}
                                    className={sidebarOpen ? "w-full" : "w-full lg:w-auto"}
                                >

                                    <NavLink

                                        to={item.path}

                                        onClick={() => {

                                            if (window.innerWidth < 1024) {
                                                setSidebarOpen(false);
                                            }

                                        }}

                                        title={!sidebarOpen ? item.name : ""}

                                        className={({ isActive }) => `
                                            group
                                            flex
                                            w-full
                                            items-center
                                            gap-4
                                            rounded-2xl
                                            border
                                            px-5
                                            py-4
                                            transition-all
                                            duration-200
                                            ${
                                                sidebarOpen
                                                    ? ""
                                                    : "lg:h-16 lg:w-16 lg:justify-center lg:px-0"
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

                                        <span
                                            className={`
                                                text-base
                                                font-semibold
                                                ${sidebarOpen ? "" : "lg:hidden"}
                                            `}
                                        >

                                            {item.name}

                                        </span>

                                    </NavLink>

                                </li>

                            );

                        })}

                    </ul>

                </nav>

                {/* Footer */}

                <div className="border-t border-slate-200 px-5 py-5">

                    <div
                        className={`
                            flex
                            items-center
                            ${sidebarOpen ? "justify-between" : "justify-between lg:justify-center"}
                        `}
                    >

                        <span
                            className={`
                                text-sm
                                font-medium
                                text-slate-500
                                ${sidebarOpen ? "" : "lg:hidden"}
                            `}
                        >

                            CodeFolio v1.0

                        </span>

                        <span className="h-3 w-3 rounded-full bg-emerald-500" />

                    </div>

                </div>

            </aside>

        </>

    );

}

export default Sidebar;