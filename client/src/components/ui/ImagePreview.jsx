function ImagePreview({
    src,
    alt = "Preview",
    size = "lg"
}) {
    if (!src) return null;

    const sizes = {
        sm: "h-20 w-20",
        md: "h-28 w-28",
        lg: "h-36 w-36"
    };

    return (
        <div className="mt-4 inline-block">
            <img
                src={src}
                alt={alt}
                className={`
                    rounded-2xl
                    border
                    border-slate-200
                    bg-slate-50
                    object-cover
                    shadow-xs
                    ${sizes[size]}
                `}
            />
        </div>
    );
}

export default ImagePreview;