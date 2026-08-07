function PageSkeleton() {
    return (
        <div className="space-y-6 animate-pulse">
            <div className="space-y-2">
                <div className="h-8 w-64 rounded-xl bg-slate-200" />
                <div className="h-4 w-96 rounded-lg bg-slate-100" />
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
                <div className="space-y-5">
                    <div className="h-10 rounded-xl bg-slate-100" />
                    <div className="h-10 rounded-xl bg-slate-100" />
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="h-10 rounded-xl bg-slate-100" />
                        <div className="h-10 rounded-xl bg-slate-100" />
                    </div>
                    <div className="h-32 rounded-xl bg-slate-100" />
                </div>
            </div>
        </div>
    );
}

export default PageSkeleton;