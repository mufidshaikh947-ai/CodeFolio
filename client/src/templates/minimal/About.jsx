function About({ profile }) {

    return (

        <section className="py-24">

            <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">

                <div className="mb-16 text-center">

                    <p className="font-mono text-base tracking-wide text-slate-500">

                        Get To Know More

                    </p>

                    <h2 className="mt-3 text-6xl font-bold tracking-tight text-slate-900">

                        About Me

                    </h2>

                </div>

                <div className="grid items-start gap-16 lg:grid-cols-[1.2fr_2fr]">

                    {/* Left Side */}

                    <div>

                        <div className="rounded-[36px] border border-slate-200 bg-white p-10 shadow-sm">

                            <div className="space-y-8">

                                <div>

                                    <p className="text-sm font-medium uppercase tracking-widest text-slate-400">

                                        Location

                                    </p>

                                    <p className="mt-2 text-xl font-semibold text-slate-900">

                                        {profile.location || "Not Specified"}

                                    </p>

                                </div>

                                <div>

                                    <p className="text-sm font-medium uppercase tracking-widest text-slate-400">

                                        Availability

                                    </p>

                                    <p className="mt-2 text-xl font-semibold text-slate-900">

                                        {profile.availability || "Available"}

                                    </p>

                                </div>

                                <div>

                                    <p className="text-sm font-medium uppercase tracking-widest text-slate-400">

                                        Email

                                    </p>

                                    <p className="mt-2 break-all text-lg text-slate-700">

                                        {profile.email}

                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* Right Side */}

                    <div>

                        <div className="grid gap-6 md:grid-cols-2">

                            <div className="rounded-[32px] border border-slate-200 p-8 shadow-sm">

                                <p className="text-sm uppercase tracking-widest text-slate-400">

                                    Professional Title

                                </p>

                                <h3 className="mt-4 text-2xl font-bold text-slate-900">

                                    {profile.title || "Software Developer"}

                                </h3>

                            </div>

                            <div className="rounded-[32px] border border-slate-200 p-8 shadow-sm">

                                <p className="text-sm uppercase tracking-widest text-slate-400">

                                    Username

                                </p>

                                <h3 className="mt-4 text-2xl font-bold text-slate-900">

                                    @{profile.username}

                                </h3>

                            </div>

                        </div>

                        <div className="mt-10">

                            <p className="text-xl leading-10 text-slate-600">

                                {

                                    profile.about ||

                                    "Passionate software developer dedicated to building scalable, maintainable and user-focused applications using modern technologies. I enjoy transforming ideas into clean digital experiences while continuously learning and improving my craft."

                                }

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

}

export default About;