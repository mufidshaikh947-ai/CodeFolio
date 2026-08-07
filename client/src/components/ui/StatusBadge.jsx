function StatusBadge({
    children,
    color = "blue"
}) {
    const styles = {
        blue: "bg-blue-50 text-blue-700 border-blue-200/60",
        green: "bg-emerald-50 text-emerald-700 border-emerald-200/60",
        emerald: "bg-emerald-50 text-emerald-700 border-emerald-200/60",
        yellow: "bg-amber-50 text-amber-700 border-amber-200/60",
        amber: "bg-amber-50 text-amber-700 border-amber-200/60",
        red: "bg-rose-50 text-rose-700 border-rose-200/60",
        rose: "bg-rose-50 text-rose-700 border-rose-200/60",
        gray: "bg-slate-100 text-slate-700 border-slate-200/60",
        slate: "bg-slate-100 text-slate-700 border-slate-200/60"
    };

    const dotColors = {
        blue: "bg-blue-500",
        green: "bg-emerald-500",
        emerald: "bg-emerald-500",
        yellow: "bg-amber-500",
        amber: "bg-amber-500",
        red: "bg-rose-500",
        rose: "bg-rose-500",
        gray: "bg-slate-400",
        slate: "bg-slate-400"
    };

    const activeStyle = styles[color] || styles.blue;
    const activeDot = dotColors[color] || dotColors.blue;

    return (
        <span
            className={`
                inline-flex
                items-center
                gap-1.5
                rounded-full
                border
                px-2.5
                py-0.5
                text-xs
                font-semibold
                ${activeStyle}
            `}
        >
            <span className={`h-1.5 w-1.5 rounded-full ${activeDot}`} />
            {children}
        </span>
    );
}

export default StatusBadge;