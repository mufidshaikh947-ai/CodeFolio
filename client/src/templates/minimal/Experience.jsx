function Experience({ experiences }) {

    return (

<section className="py-24">
            <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">

                <div className="mb-16 text-center">

                    <p className="font-mono text-base tracking-wide text-slate-500">

                        Professional Journey

                    </p>

                    <h2 className="mt-3 text-6xl font-bold tracking-tight text-slate-900">

                        Experience

                    </h2>

                </div>

                <div className="space-y-10">

                    {experiences?.length > 0 ? (

                        experiences.map((experience) => (

                            <div

                                key={experience._id}

                                className="rounded-[36px] border border-slate-200 bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"

                            >

                                <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">

                                    <div className="flex-1">

                                        <h3 className="text-3xl font-bold text-slate-900">

                                            {experience.position}

                                        </h3>

                                        <p className="mt-2 text-xl font-medium text-blue-600">

                                            {experience.company}

                                        </p>

                                        <p className="mt-4 text-slate-500">

                                            {experience.location}

                                        </p>

                                    </div>

                                    <div className="rounded-full border border-slate-300 px-6 py-3 text-sm font-medium text-slate-600">

                                        {experience.startDate}

                                        {"  —  "}

                                        {experience.currentlyWorking
                                            ? "Present"
                                            : experience.endDate}

                                    </div>

                                </div>

                                {experience.description && (

                                    <p className="mt-10 text-lg leading-9 text-slate-600">

                                        {experience.description}

                                    </p>

                                )}

                                {experience.technologies?.length > 0 && (

                                    <div className="mt-10 flex flex-wrap gap-3">

                                        {experience.technologies.map((tech, index) => (

                                            <span

                                                key={index}

                                                className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700"

                                            >

                                                {tech}

                                            </span>

                                        ))}

                                    </div>

                                )}

                            </div>

                        ))

                    ) : (

                        <div className="rounded-[36px] border border-slate-200 py-20 text-center">

                            <p className="text-xl text-slate-500">

                                No experience added yet.

                            </p>

                        </div>

                    )}

                </div>

            </div>

        </section>

    );

}

export default Experience;