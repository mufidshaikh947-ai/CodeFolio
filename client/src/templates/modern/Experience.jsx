function formatDate(date) {

    if (!date) return "";

    return new Date(date).getFullYear();

}

function Experience({ experiences }) {

    return (

<section className="py-16 lg:py-20">            <div className="mx-auto max-w-6xl px-8">

                {/* Heading */}

                <div className="mb-24 text-center">

                    <p className="text-sm font-semibold uppercase tracking-[0.45em] text-cyan-400">

                        CAREER

                    </p>

                    <h2 className="mt-4 text-5xl font-black text-white">

                        Experience

                    </h2>

                </div>

                {

                    experiences?.length > 0 ? (

                        <div className="relative">

                            {/* Timeline */}

                            <div className="absolute left-5 top-0 h-full w-[2px] bg-gradient-to-b from-cyan-500 via-sky-500 to-violet-500" />

                            <div className="space-y-16">

                                {

                                    experiences.map((experience) => (

                                        <div

                                            key={experience._id}

                                            className="relative pl-20"

                                        >

                                            {/* Timeline Dot */}

                                            <div

                                                className="
                                                    absolute
                                                    left-0
                                                    top-4
                                                    flex
                                                    h-10
                                                    w-10
                                                    items-center
                                                    justify-center
                                                    rounded-full
                                                    border
                                                    border-cyan-400
                                                    bg-[#070B1A]
                                                    shadow-[0_0_25px_rgba(34,211,238,.35)]
                                                "

                                            >

                                                <div className="h-3 w-3 rounded-full bg-cyan-400" />

                                            </div>

                                            {/* Card */}

                                            <div

                                                className="
                                                    rounded-[30px]
                                                    border
                                                    border-white/10
                                                    bg-white/5
                                                    p-8
                                                    backdrop-blur-xl
                                                    transition-all
                                                    duration-300
                                                    hover:-translate-y-2
                                                    hover:border-cyan-400/30
                                                "

                                            >

                                                <div className="flex flex-wrap items-center justify-between gap-4">

                                                    <div>

                                                        <h3 className="text-3xl font-bold text-white">

                                                            {experience.position}

                                                        </h3>

                                                        <p className="mt-2 text-lg text-cyan-300">

                                                            {experience.company}

                                                        </p>

                                                    </div>

                                                    <div

                                                        className="
                                                            rounded-full
                                                            border
                                                            border-white/10
                                                            bg-white/5
                                                            px-5
                                                            py-2
                                                            text-sm
                                                            text-slate-300
                                                        "

                                                    >

                                                        {formatDate(experience.startDate)}

                                                        {" • "}

                                                        {

                                                            experience.currentlyWorking

                                                                ? "Present"

                                                                : formatDate(experience.endDate)

                                                        }

                                                    </div>

                                                </div>

                                                {

                                                    experience.location && (

                                                        <p className="mt-5 text-slate-400">

                                                            📍 {experience.location}

                                                        </p>

                                                    )

                                                }

                                                {

                                                    experience.description && (

                                                        <p className="mt-8 text-lg leading-9 text-slate-300">

                                                            {experience.description}

                                                        </p>

                                                    )

                                                }

                                                {

                                                    experience.technologies?.length > 0 && (

                                                        <div className="mt-8 flex flex-wrap gap-3">

                                                            {

                                                                experience.technologies.map(

                                                                    (tech, index) => (

                                                                        <span

                                                                            key={index}

                                                                            className="
                                                                                rounded-full
                                                                                border
                                                                                border-white/10
                                                                                bg-white/5
                                                                                px-4
                                                                                py-2
                                                                                text-sm
                                                                                text-slate-200
                                                                            "

                                                                        >

                                                                            {tech}

                                                                        </span>

                                                                    )

                                                                )

                                                            }

                                                        </div>

                                                    )

                                                }

                                            </div>

                                        </div>

                                    ))

                                }

                            </div>

                        </div>

                    ) : (

                        <div className="rounded-3xl border border-white/10 bg-white/5 py-20 text-center">

                            <p className="text-xl text-slate-400">

                                No experience available.

                            </p>

                        </div>

                    )

                }

            </div>

        </section>

    );

}

export default Experience;