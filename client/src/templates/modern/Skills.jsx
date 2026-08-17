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

<section className="py-16 lg:py-20">            <div className="mx-auto max-w-7xl px-4 sm:px-8">

                <div className="mb-20 text-center">

                    <p className="text-sm font-semibold uppercase tracking-[0.45em] text-cyan-400">

                        MY SKILLS

                    </p>

                    <h2 className="mt-4 text-3xl font-black text-white sm:text-5xl">

                        Technologies & Expertise

                    </h2>

                </div>

                {

                    Object.keys(groupedSkills).length > 0 ? (

                        <div className="grid gap-8 lg:grid-cols-2">

                            {

                                Object.entries(groupedSkills).map(

                                    ([category, categorySkills]) => (

                                        <div

                                            key={category}

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

                                            <h3 className="mb-8 text-3xl font-bold text-white">

                                                {category}

                                            </h3>

                                            <div className="space-y-8">

                                                {

                                                    categorySkills.map((skill) => (

                                                        <div key={skill._id}>

                                                            <div className="mb-3 flex justify-between">

                                                                <span className="font-semibold text-white">

                                                                    {skill.name}

                                                                </span>

                                                                <span className="text-slate-400">

                                                                    {skill.level}/5

                                                                </span>

                                                            </div>

                                                            <div className="h-3 overflow-hidden rounded-full bg-slate-700">

                                                                <div

                                                                    className="
                                                                        h-full
                                                                        rounded-full
                                                                        bg-gradient-to-r
                                                                        from-cyan-400
                                                                        via-sky-500
                                                                        to-violet-500
                                                                        transition-all
                                                                        duration-700
                                                                    "

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

                        <div className="rounded-3xl border border-white/10 bg-white/5 py-20 text-center">

                            <p className="text-xl text-slate-400">

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
