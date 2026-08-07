function ExperienceSection({ experiences }) {

    return (

        <section>

            <div className="mx-auto max-w-7xl">

                <div className="mb-14">

                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">

                        EXPERIENCE

                    </p>

                    <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 dark:text-white">

                        Professional Journey

                    </h2>

                </div>

                {experiences.length === 0 ? (

                    <div className="rounded-3xl border border-dashed border-slate-300 p-16 text-center">

                        <p className="text-slate-500">

                            No experience added yet.

                        </p>

                    </div>

                ) : (

                    <div className="relative ml-4 border-l-2 border-blue-200 pl-10">

                        {experiences.map((experience) => (

                            <div
                                key={experience._id}
                                className="relative mb-14"
                            >

                                <div className="absolute -left-[51px] top-2 h-5 w-5 rounded-full border-4 border-white bg-blue-600 shadow" />

                                <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900">

                                    <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">

                                        <div>

                                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">

                                                {experience.jobTitle}

                                            </h3>

                                            <p className="mt-2 text-lg font-medium text-blue-600">

                                                {experience.company}

                                            </p>

                                        </div>

                                        <div className="rounded-full bg-slate-100 px-5 py-2 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300">

                                            {experience.startDate}

                                            {" - "}

                                            {experience.currentlyWorking
                                                ? "Present"
                                                : experience.endDate}

                                        </div>

                                    </div>

                                    {experience.location && (

                                        <p className="mt-5 text-slate-500">

                                            📍 {experience.location}

                                        </p>

                                    )}

                                    {experience.description && (

                                        <p className="mt-6 leading-8 text-slate-600 dark:text-slate-300">

                                            {experience.description}

                                        </p>

                                    )}

                                </div>

                            </div>

                        ))}

                    </div>

                )}

            </div>

        </section>

    );

}

export default ExperienceSection;