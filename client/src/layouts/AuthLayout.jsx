import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-100 to-blue-100 p-3 sm:p-6">
      <Outlet />
    </div>
  );
}

export default AuthLayout;
