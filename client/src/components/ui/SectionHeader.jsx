function SectionHeader({

    title,

    subtitle

}) {

    return (

        <div className="mb-10">

            <h2 className="text-xl font-bold text-slate-900">

                {title}

            </h2>

            {subtitle && (

                <p className="mt-3 text-sm font-medium leading-relaxed text-slate-500">

                    {subtitle}

                </p>

            )}

        </div>

    );

}

export default SectionHeader;