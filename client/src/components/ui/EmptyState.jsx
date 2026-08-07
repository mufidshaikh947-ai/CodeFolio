import { FolderKanban } from "lucide-react";

function EmptyState({
    title,
    description,
    action
}) {
    return (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300/80 bg-slate-50/50 px-6 py-14 text-center">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-slate-400 shadow-xs border border-slate-200/60">
                <FolderKanban size={28} />
            </div>

            <h3 className="text-base font-bold text-slate-800">
                {title}
            </h3>

            <p className="mx-auto mt-1.5 max-w-sm text-xs font-medium text-slate-500 leading-relaxed">
                {description}
            </p>

            {action && <div className="mt-6">{action}</div>}
        </div>
    );
}

export default EmptyState;