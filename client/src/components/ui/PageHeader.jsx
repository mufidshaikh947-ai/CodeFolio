function PageHeader({

    title,

    description,

    action

}) {

    return (

        <div className="flex flex-col gap-6 border-b border-slate-200/80 pb-8 lg:flex-row lg:items-center lg:justify-between">

            <div>

                <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">

                    {title}

                </h1>

                {description && (

                    <p className="mt-3 max-w-2xl text-sm font-medium leading-relaxed text-slate-500">

                        {description}

                    </p>

                )}

            </div>

            {action && (

                <div className="shrink-0">

                    {action}

                </div>

            )}

        </div>

    );

}

export default PageHeader;