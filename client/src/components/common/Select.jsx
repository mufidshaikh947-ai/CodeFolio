import { ChevronDown } from "lucide-react";

function Select({
    label,
    register,
    error,
    options = [],
    required = false,
    disabled = false,
    className = "",
    ...props
}) {
    return (
        <div className="space-y-2">
            {label && (
<label className="mb-2 block text-sm font-semibold text-slate-700">
                    {required && <span className="ml-1 text-red-500">*</span>}
                </label>
            )}

            <div className="relative w-full">
                <select
                    disabled={disabled}
                    {...(register || {})}
                    {...props}
                    className={`
                       block
w-full
appearance-none
rounded-xl
border
border-slate-200
bg-white
px-4
py-3.5
pr-10
text-sm
font-medium
text-slate-800
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
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>

               <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-slate-400">
                    <ChevronDown size={16} />
                </div>
            </div>

            {error && (
                <p className="mt-1 text-xs font-medium text-red-500">
                    {error.message}
                </p>
            )}
        </div>
    );
}

export default Select;