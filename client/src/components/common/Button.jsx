function Button({
    children,
    type = "button",
    variant = "primary",
    size = "md",
    disabled = false,
    loading = false,
    fullWidth = false,
    className = "",
    ...props
}) {
   const baseClasses = `
    inline-flex
    items-center
    justify-center
    rounded-xl
    font-semibold
    whitespace-nowrap
    select-none
    transition-all
    duration-200
    active:scale-[0.98]
    hover:-translate-y-[1px]
    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-blue-500
    focus-visible:ring-offset-2
    disabled:pointer-events-none
    disabled:opacity-60
`;

    const sizeClasses = {
        sm: "h-9 px-3.5 text-xs",
        md: "h-11 px-5 text-sm",
        lg: "h-12 px-6 text-base"
    };

    const variantClasses = {
    primary:
        "bg-blue-600 text-white shadow-sm shadow-blue-600/20 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30",

    secondary:
        "border border-slate-200 bg-white text-slate-700 shadow-sm hover:border-slate-300 hover:bg-slate-50",

    success:
        "bg-emerald-600 text-white shadow-sm shadow-emerald-600/20 hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-600/30",

    danger:
        "bg-red-600 text-white shadow-sm shadow-red-600/20 hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/30",

    ghost:
        "bg-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-900"
};

    return (
        <button
            type={type}
            disabled={disabled || loading}
            className={`
                ${baseClasses}
                ${sizeClasses[size]}
                ${variantClasses[variant]}
                ${fullWidth ? "w-full" : ""}
                ${className}
            `}
            {...props}
        >
            {loading ? (
                <div className="flex items-center gap-2">
                    <svg className="h-4 w-4 animate-spin text-current" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>{children}</span>
                </div>
            ) : (
                children
            )}
        </button>
    );
}

export default Button;