function formatDate(date) {

    if (!date) return "";

    return new Date(date).getFullYear();

}

function Education({ educations }) {

    return (

<section className="py-16 lg:py-20">            <div className="mx-auto max-w-7xl px-4 sm:px-8">

                {/* Heading */}

                <div className="mb-20 text-center">

                    <p className="text-sm font-semibold uppercase tracking-[0.45em] text-cyan-400">

                        EDUCATION

                    </p>

                    <h2 className="mt-4 text-3xl font-black text-white sm:text-5xl">

                        Academic Journey

                    </h2>

                </div>

                {

                    educations?.length > 0 ? (

                        <div className="grid gap-8 lg:grid-cols-2">

                            {

                                educations.map((education) => (

                                    <div

                                        key={education._id}

                                        className="
                                            rounded-[32px]
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

                                        <div className="flex items-center justify-between">

                                            <span

                                                className="
                                                    rounded-full
                                                    bg-cyan-500/15
                                                    px-4
                                                    py-2
                                                    text-sm
                                                    font-semibold
                                                    text-cyan-300
                                                "

                                            >

                                                {

                                                    education.currentlyStudying

                                                        ? "Currently Studying"

                                                        : "Completed"

                                                }

                                            </span>

                                            <span className="text-slate-400">

                                                {formatDate(education.startDate)}

                                                {" - "}

                                                {

                                                    education.currentlyStudying

                                                        ? "Present"

                                                        : formatDate(education.endDate)

                                                }

                                            </span>

                                        </div>

                                        <h3 className="mt-8 text-3xl font-bold text-white">

                                            {education.degree}

                                        </h3>

                                        <p className="mt-3 text-xl text-cyan-300">

                                            {education.institution}

                                        </p>

                                        {

                                            education.fieldOfStudy && (

                                                <p className="mt-5 text-slate-300">

                                                    {education.fieldOfStudy}

                                                </p>

                                            )

                                        }

                                        {

                                            education.grade && (

                                                <div className="mt-8">

                                                    <span

                                                        className="
                                                            rounded-full
                                                            border
                                                            border-white/10
                                                            bg-white/5
                                                            px-4
                                                            py-2
                                                            text-sm
                                                            text-slate-300
                                                        "

                                                    >

                                                        Grade : {education.grade}

                                                    </span>

                                                </div>

                                            )

                                        }

                                        {

                                            education.description && (

                                                <p className="mt-8 leading-9 text-slate-400">

                                                    {education.description}

                                                </p>

                                            )

                                        }

                                    </div>

                                ))

                            }

                        </div>

                    ) : (

                        <div className="rounded-3xl border border-white/10 bg-white/5 py-20 text-center">

                            <p className="text-xl text-slate-400">

                                No education added yet.

                            </p>

                        </div>

                    )

                }

            </div>

        </section>

    );

}

export default Education;
