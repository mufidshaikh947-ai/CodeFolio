function Skills({ skills }) {

    const groupedSkills = {};

    const levelMap = {

        1: 20,
        2: 40,
        3: 60,
        4: 80,
        5: 100

    };

    skills?.forEach((skill) => {

        const category = skill.category || "Other";

        if (!groupedSkills[category]) {

            groupedSkills[category] = [];

        }

        groupedSkills[category].push(skill);

    });

    return (

<section className="py-24">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

                <div className="mb-16 text-center">

                    <p className="font-mono text-base tracking-wide text-slate-500">

                        Explore My

                    </p>

                    <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">

                        Skills

                    </h2>

                </div>

                {

                    Object.keys(groupedSkills).length > 0 ? (

                        <div className="grid gap-10 lg:grid-cols-2">

                            {

                                Object.entries(groupedSkills).map(

                                    ([category, categorySkills]) => (

                                        <div

                                            key={category}

                                            className="rounded-[36px] border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-10"

                                        >

                                            <h3 className="mb-10 text-3xl font-bold text-slate-900">

                                                {category}

                                            </h3>

                                            <div className="space-y-8">

                                                {

                                                    categorySkills.map((skill) => (

                                                        <div key={skill._id}>

                                                            <div className="mb-3 flex items-center justify-between">

                                                                <span className="text-lg font-semibold text-slate-800">

                                                                    {skill.name}

                                                                </span>

                                                                <span className="text-sm font-medium text-slate-500">

                                                                    Level {skill.level}

                                                                </span>

                                                            </div>

                                                            <div className="h-3 overflow-hidden rounded-full bg-slate-200">

                                                                <div

                                                                    className="h-full rounded-full bg-slate-900 transition-all duration-700"

                                                                    style={{

                                                                        width: `${levelMap[skill.level]}%`

                                                                    }}

                                                                />

                                                            </div>

                                                        </div>

                                                    ))

                                                }

                                            </div>

                                        </div>

                                    )

                                )

                            }

                        </div>

                    ) : (

                        <div className="rounded-[36px] border border-slate-200 py-20 text-center">

                            <p className="text-xl text-slate-500">

                                No skills added yet.

                            </p>

                        </div>

                    )

                }

            </div>

        </section>

    );

}

export default Skills;
