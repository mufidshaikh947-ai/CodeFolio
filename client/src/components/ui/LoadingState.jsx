import { Loader2 } from "lucide-react";

function LoadingState({ text = "Loading details..." }) {
    return (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-200/80 bg-white py-16 text-center shadow-xs">
            <Loader2 size={32} className="animate-spin text-blue-600" />
            <p className="mt-3 text-sm font-semibold text-slate-600">
                {text}
            </p>
        </div>
    );
}

export default LoadingState;