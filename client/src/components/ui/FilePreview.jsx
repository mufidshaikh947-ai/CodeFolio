import { FileText, ExternalLink } from "lucide-react";

function FilePreview({
    type = "image",
    src,
    alt = "Preview",
    size = "lg"
}) {
    if (!src) return null;

    const sizes = {
        sm: "h-16 w-16",
        md: "h-24 w-24",
        lg: "h-32 w-32"
    };

    if (type === "image") {
        return (
            <div className="mt-4 inline-block">
                <img
                    src={src}
                    alt={alt}
                    className={`
                        rounded-2xl
                        border-2
                        border-white
                        object-cover
                        shadow-md
                        ring-1
                        ring-slate-200/80
                        ${sizes[size]}
                    `}
                />
            </div>
        );
    }

    return (
        <a
            href={src}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-xl border border-red-200 bg-red-50/80 px-4 py-2.5 text-xs font-semibold text-red-700 transition-all hover:bg-red-600 hover:text-white"
        >
            <FileText size={16} />
            <span>View Uploaded File</span>
            <ExternalLink size={14} className="ml-0.5 opacity-70" />
        </a>
    );
}

export default FilePreview;