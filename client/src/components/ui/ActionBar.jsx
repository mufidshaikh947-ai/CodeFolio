function ActionBar({ children }) {
    return (
        <div className="flex flex-col gap-4 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-xs sm:flex-row sm:items-center sm:justify-between">
            {children}
        </div>
    );
}

export default ActionBar;