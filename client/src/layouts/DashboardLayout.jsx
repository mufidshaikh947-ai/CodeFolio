import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/dashboard/Navbar";
import Sidebar from "../components/dashboard/Sidebar";

import { useAuth } from "../context/AuthContext";
import { usePreview } from "../context/PreviewContext";

function DashboardLayout() {

    const [sidebarOpen, setSidebarOpen] = useState(true);

    const [previewKey, setPreviewKey] = useState(Date.now());

    const { enabled } = usePreview();

    const { user } = useAuth();

    useEffect(() => {

        function handleRefresh() {

            setPreviewKey(Date.now());

        }

        window.addEventListener(
            "portfolio-updated",
            handleRefresh
        );

        return () => {

            window.removeEventListener(
                "portfolio-updated",
                handleRefresh
            );

        };

    }, []);

    return (

        <div className="flex h-screen overflow-hidden bg-slate-50">

            <Sidebar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
            />

            <div className="flex flex-1 overflow-hidden">

                {/* Dashboard */}

                <div
                    className={
                        enabled
                            ? "w-1/2 border-r border-slate-300"
                            : "w-full"
                    }
                >

                    <div className="flex h-full flex-col overflow-hidden">

                        <Navbar
                            sidebarOpen={sidebarOpen}
                            setSidebarOpen={setSidebarOpen}
                        />

                        <main className="flex-1 overflow-y-auto p-6 sm:p-8 lg:p-10">

                            <Outlet />

                        </main>

                    </div>

                </div>

                {/* Live Preview */}

                {enabled && user?.username && (

                    <div className="w-1/2 bg-white">

                        <iframe
                            key={previewKey}
                            title="Live Portfolio Preview"
                            src={`/${user.username}?preview=1`}
                            className="h-full w-full border-0"
                        />

                    </div>

                )}

            </div>

        </div>

    );

}

export default DashboardLayout;