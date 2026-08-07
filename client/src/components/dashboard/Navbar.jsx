import {
    LogOut,
    ExternalLink,
    Monitor,
    Menu,
    PanelLeftClose
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useAuth } from "../../context/AuthContext";
import { usePreview } from "../../context/PreviewContext";

function Navbar({
    sidebarOpen,
    setSidebarOpen
}) {

    const navigate = useNavigate();

    const { logout, user } = useAuth();

    const {
    enabled,
    togglePreview
} = usePreview();

    function handleLogout() {

        logout();

        toast.success("Logged out successfully.");

        navigate("/login");

    }

    function handlePreviewToggle() {

    togglePreview();

}

    return (

        <header
            className="
                sticky
                top-0
                z-20
                flex
                h-16
                items-center
                justify-between
                border-b
                border-slate-200/80
                bg-white/90
                px-6
                backdrop-blur-md
                lg:px-8
            "
        >

            {/* Left */}

            <div className="flex items-center gap-4">

                <button
                    type="button"
                    onClick={() => setSidebarOpen(previous => !previous)}
                    className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-slate-200
                        bg-white
                        text-slate-600
                        transition-all
                        duration-200
                        hover:border-blue-200
                        hover:bg-slate-50
                        hover:text-blue-600
                    "
                    title={
                        sidebarOpen
                            ? "Collapse Sidebar"
                            : "Expand Sidebar"
                    }
                >

                    {
                        sidebarOpen
                            ? <PanelLeftClose size={18} />
                            : <Menu size={18} />
                    }

                </button>

                <div className="min-w-0">

                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">

                        CodeFolio CMS

                    </p>

                    <h2 className="truncate text-base font-semibold text-slate-900">

                        Developer Portfolio Builder

                    </h2>

                </div>

            </div>

            {/* Right */}

            <div className="flex items-center gap-3">

                <button
                    type="button"
                    onClick={handlePreviewToggle}
                    className={`
                        inline-flex
                        items-center
                        gap-2
                        rounded-xl
                        border
                        px-4
                        py-2
                        text-sm
                        font-medium
                        transition-all
                        duration-200
                        ${
                            enabled
                                ? "border-blue-600 bg-blue-600 text-white shadow-md"
                                : "border-slate-200 bg-white text-slate-700 hover:border-blue-200 hover:bg-slate-50 hover:text-blue-600"
                        }
                    `}
                >

                    <Monitor size={16} />

                    <span className="hidden sm:inline">

                        {enabled
                            ? "Close Preview"
                            : "Live Preview"}

                    </span>

                </button>

                {user?.username && (

                    <a
                        href={`/${user.username}`}
                        target="_blank"
                        rel="noreferrer"
                        className="
                            inline-flex
                            items-center
                            gap-2
                            rounded-xl
                            border
                            border-slate-200
                            bg-white
                            px-4
                            py-2
                            text-sm
                            font-medium
                            text-slate-700
                            transition-all
                            duration-200
                            hover:border-blue-200
                            hover:bg-slate-50
                            hover:text-blue-600
                        "
                    >

                        <ExternalLink size={16} />

                        <span className="hidden sm:inline">

Open Portfolio
                        </span>

                    </a>

                )}

                <button
                    type="button"
                    onClick={handleLogout}
                    className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-xl
                        border
                        border-red-200
                        bg-red-50
                        px-4
                        py-2
                        text-sm
                        font-medium
                        text-red-600
                        transition-all
                        duration-200
                        hover:bg-red-600
                        hover:text-white
                    "
                >

                    <LogOut size={16} />

                    <span className="hidden sm:inline">

                        Logout

                    </span>

                </button>

            </div>

        </header>

    );

}

export default Navbar;