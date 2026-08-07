function SkillsSection({ skills }) {

    const groupedSkills = {};

    skills.forEach((skill) => {

        const category = skill.category || "Other";

        if (!groupedSkills[category]) {

            groupedSkills[category] = [];

        }

        groupedSkills[category].push(skill);

    });

    return (

        <section>

            <div className="mx-auto max-w-7xl">

                <div className="mb-14">

                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">

                        SKILLS

                    </p>

                    <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 dark:text-white">

                        Technologies & Expertise

                    </h2>

                </div>

                {Object.keys(groupedSkills).length === 0 ? (

                    <div className="rounded-3xl border border-dashed border-slate-300 p-16 text-center">

                        <p className="text-slate-500">

                            No skills added yet.

                        </p>

                    </div>

                ) : (

                    <div className="grid gap-8 lg:grid-cols-2">

                        {Object.entries(groupedSkills).map(

                            ([category, items]) => (

                                <div
                                    key={category}
                                    className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900"
                                >

                                    <h3 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">

                                        {category}

                                    </h3>

                                    <div className="flex flex-wrap gap-3">

                                        {items.map((skill) => (

                                            <span
                                                key={skill._id}
                                                className="rounded-full border border-slate-200 bg-slate-50 px-5 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-500 hover:bg-blue-50 hover:text-blue-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-blue-500 dark:hover:bg-slate-700"
                                            >

                                                {skill.name}

                                            </span>

                                        ))}

                                    </div>

                                </div>

                            )

                        )}

                    </div>

                )}

            </div>

        </section>

    );

}

export default SkillsSection;