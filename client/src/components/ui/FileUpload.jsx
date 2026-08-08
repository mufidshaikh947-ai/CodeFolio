import { UploadCloud, CheckCircle2, Loader2 } from "lucide-react";

function FileUpload({
    label,
    accept,
    uploading = false,
    fileName = "",
    helperText = "",
    register,
    name,
    onChange
}) {

    const inputProps =
        register && name
            ? register(name)
            : {
                  onChange
              };

    return (
        <div className="space-y-3">

            {label && (
                <label className="text-sm font-bold uppercase text-slate-700">
                    {label}
                </label>
            )}

            <div className="relative flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-white p-6 text-center transition-all hover:border-blue-400 hover:bg-blue-50/20">

                <input
                    type="file"
                    accept={accept}
                    {...inputProps}
                    className="absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0"
                />

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <UploadCloud size={22}/>
                </div>

                <p className="mt-3 text-xs font-bold text-slate-700">
                    Click to upload
                    <span className="font-normal text-slate-500">
                        {" "}or drag and drop
                    </span>
                </p>

                {helperText && (
                    <p className="mt-1 text-[11px] font-medium text-slate-400">
                        {helperText}
                    </p>
                )}

            </div>

            {uploading && (
                <div className="flex items-center gap-2 text-xs font-semibold text-blue-600">
                    <Loader2 size={14} className="animate-spin"/>
                    Uploading...
                </div>
            )}

            {fileName && !uploading && (
                <div className="flex items-center gap-2 rounded-lg bg-emerald-50 px-3 py-3 text-xs font-medium text-emerald-700">
                    <CheckCircle2 size={14}/>
                    Selected:
                    <strong>{fileName}</strong>
                </div>
            )}

        </div>
    );
}

export default FileUpload;