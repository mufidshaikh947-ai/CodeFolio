function Input({
    label,
    type = "text",
    placeholder = "",
    register,
    error,
    disabled = false,
    autoComplete = "off",
    required = false,
    className = "",
    ...props
}) {
    return (
        <div className="space-y-2">
            {label && (
<label className="mb-2 block text-sm font-semibold text-slate-700">
                    {required && (
                        <span className="ml-1 text-red-500">*</span>
                    )}
                </label>
            )}

            <input
                type={type}
                placeholder={placeholder}
                autoComplete={autoComplete}
                disabled={disabled}
                {...(register || {})}
                {...props}
                className={`
                    block
w-full
rounded-xl
border
border-slate-200
bg-white
px-4
py-3.5
text-sm
font-medium
text-slate-800
placeholder:text-slate-400
shadow-sm
outline-none
transition-all
duration-200
hover:border-slate-300
focus:border-blue-600
focus:bg-white
focus:shadow-md
focus:ring-4
focus:ring-blue-500/10
disabled:cursor-not-allowed
disabled:bg-slate-50
disabled:text-slate-400
                    ${
                        error
                            ? "border-red-500 focus:border-red-500 focus:ring-red-500/10"
                            : ""
                    }
                    ${className}
                `}
            />

            {error && (
<p className="mt-1 text-xs font-medium text-red-500">
                </p>
            )}
        </div>
    );
}

export default Input;