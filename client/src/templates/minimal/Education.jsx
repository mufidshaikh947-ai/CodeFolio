function formatDate(date) {

    if (!date) return "";

    return new Date(date).getFullYear();

}

function Education({ educations }) {

    return (

<section className="py-24">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

                <div className="mb-16 text-center">

                    <p className="font-mono text-base tracking-wide text-slate-500">

                        Academic Background

                    </p>

                    <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">

                        Education

                    </h2>

                </div>

                <div className="space-y-10">

                    {educations?.length > 0 ? (

                        educations.map((education) => (

                            <div

                                key={education._id}

                                className="rounded-[36px] border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-10"

                            >

                                <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">

                                    <div className="flex-1">

                                        <h3 className="text-3xl font-bold text-slate-900">

                                            {education.degree}

                                        </h3>

                                        <p className="mt-2 text-xl font-medium text-blue-600">

                                            {education.institution}

                                        </p>

                                        {education.fieldOfStudy && (

                                            <p className="mt-4 text-slate-600">

                                                {education.fieldOfStudy}

                                            </p>

                                        )}

                                    </div>

                                    <div className="rounded-full border border-slate-300 px-6 py-3 text-sm font-medium text-slate-600">

                                        {formatDate(education.startDate)}

                                        {"  —  "}

                                        {

                                            education.currentlyStudying

                                                ? "Present"

                                                : formatDate(education.endDate)

                                        }

                                    </div>

                                </div>

                                {education.grade && (

                                    <div className="mt-8">

                                        <span className="rounded-full bg-slate-100 px-5 py-2 text-sm font-semibold text-slate-700">

                                            Grade : {education.grade}

                                        </span>

                                    </div>

                                )}

                                {education.relevantCoursework?.length > 0 && (

                                    <div className="mt-10 flex flex-wrap gap-3">

                                        {

                                            education.relevantCoursework.map((course, index) => (

                                                <span

                                                    key={index}

                                                    className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700"

                                                >

                                                    {course}

                                                </span>

                                            ))

                                        }

                                    </div>

                                )}

                                {education.description && (

                                    <p className="mt-10 text-lg leading-9 text-slate-600">

                                        {education.description}

                                    </p>

                                )}

                            </div>

                        ))

                    ) : (

                        <div className="rounded-[36px] border border-slate-200 py-20 text-center">

                            <p className="text-xl text-slate-500">

                                No education added yet.

                            </p>

                        </div>

                    )}

                </div>

            </div>

        </section>

    );

}

export default Education;
