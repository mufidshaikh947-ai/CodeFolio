function InfoCard({
    title,
    children,
    className = ""
}) {
    return (
        <div
            className={`
                rounded-2xl
                border
                border-slate-200/80
                bg-white
                p-6
                shadow-xs
                sm:p-8
                ${className}
            `}
        >
            {title && (
                <h3 className="mb-4 text-lg font-bold text-slate-900">
                    {title}
                </h3>
            )}
            <div className="text-sm font-normal text-slate-600 leading-relaxed">
                {children}
            </div>
        </div>
    );
}

export default InfoCard;