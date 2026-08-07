import { ArrowRight } from "lucide-react";

function StatCard({
    icon: Icon,
    title,
    value,
    description,
    color = "blue",
    clickable = false,
    onClick
}) {

    const colors = {
        blue: {
            bg: "bg-blue-50/80 border-blue-100",
            text: "text-blue-600"
        },
        emerald: {
            bg: "bg-emerald-50/80 border-emerald-100",
            text: "text-emerald-600"
        },
        amber: {
            bg: "bg-amber-50/80 border-amber-100",
            text: "text-amber-600"
        },
        rose: {
            bg: "bg-rose-50/80 border-rose-100",
            text: "text-rose-600"
        }
    };

    const currentColor = colors[color] || colors.blue;

    return (

        <div
            onClick={onClick}
            className={`
                group
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-6
                shadow-sm
                transition-all
                duration-300
                ${clickable
                    ? "cursor-pointer hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
                    : ""
                }
            `}
        >

            <div className="flex items-center justify-between">

                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">

                    {title}

                </span>

                {Icon && (

                    <div
                        className={`flex h-11 w-11 items-center justify-center rounded-xl border ${currentColor.bg}`}
                    >

                        <Icon
                            size={20}
                            className={currentColor.text}
                        />

                    </div>

                )}

            </div>

            <h3 className="mt-6 text-3xl font-bold tracking-tight text-slate-900">

                {value}

            </h3>

            {description && (

                <p className="mt-3 text-sm leading-6 text-slate-500">

                    {description}

                </p>

            )}

            {clickable && (

                <div className="mt-6 flex items-center gap-2 font-semibold text-blue-600 transition-all group-hover:translate-x-1">

                    <span>

                        Open

                    </span>

                    <ArrowRight size={16} />

                </div>

            )}

        </div>

    );

}

export default StatCard;