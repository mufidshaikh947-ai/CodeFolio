function AboutSection({ profile }) {

    return (

        <section>

            <div className="mx-auto max-w-7xl">

                <div className="mb-14">

                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">

                        ABOUT

                    </p>

                    <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 dark:text-white">

                        Get to know me

                    </h2>

                </div>

                <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">

                    <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm dark:border-slate-700 dark:bg-slate-900">

                        <p className="text-lg leading-9 text-slate-600 dark:text-slate-300">

                            {profile.about ||

                                "Passionate software developer focused on building scalable, maintainable and user-centric applications. I enjoy solving complex problems through clean architecture, thoughtful design and modern technologies."}

                        </p>

                    </div>

                    <div className="space-y-5">

                        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">

                            <p className="text-xs uppercase tracking-widest text-slate-500">

                                Location

                            </p>

                            <p className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">

                                {profile.location || "Not specified"}

                            </p>

                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">

                            <p className="text-xs uppercase tracking-widest text-slate-500">

                                Availability

                            </p>

                            <p className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">

                                {profile.availability || "Available"}

                            </p>

                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">

                            <p className="text-xs uppercase tracking-widest text-slate-500">

                                Professional Title

                            </p>

                            <p className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">

                                {profile.title || "Software Developer"}

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

}

export default AboutSection;