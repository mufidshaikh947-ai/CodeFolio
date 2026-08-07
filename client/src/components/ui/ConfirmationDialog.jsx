import { AlertTriangle } from "lucide-react";
import Button from "../common/Button";

function ConfirmationDialog({
    title,
    message,
    onConfirm,
    onCancel
}) {
    return (
        <div className="mx-auto max-w-lg rounded-2xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8">
            <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-red-50 text-red-600">
                    <AlertTriangle size={24} />
                </div>
                <div>
                    <h2 className="text-lg font-bold text-slate-900">
                        {title}
                    </h2>
                    <p className="mt-1 text-sm font-normal text-slate-600 leading-relaxed">
                        {message}
                    </p>
                </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-3 border-t border-slate-100 pt-5">
                <Button variant="secondary" onClick={onCancel} size="sm">
                    Cancel
                </Button>
                <Button variant="danger" onClick={onConfirm} size="sm">
                    Confirm Action
                </Button>
            </div>
        </div>
    );
}

export default ConfirmationDialog;