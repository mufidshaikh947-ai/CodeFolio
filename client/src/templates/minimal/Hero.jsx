function Hero({ profile, assets, socialLinks }) {

    const API_URL = import.meta.env.VITE_API_URL;
    const imageUrl = assets?.profileImage
    ? `${API_URL}/${assets.profileImage}`
    : "https://placehold.co/500x500?text=Profile";

    const resumeUrl = assets?.resume
    ? `${API_URL}/${assets.resume}`
    : null;

    return (

        <section className="bg-white">

            <div className="mx-auto flex min-h-screen max-w-7xl items-center px-8 py-20">

                <div className="grid w-full items-center gap-20 lg:grid-cols-2">

                    {/* Left */}

                    <div className="flex justify-center">

                        <img
                            src={imageUrl}
                            alt={profile.name}
                            className="h-[430px] w-[430px] rounded-full object-cover shadow-lg"
                        />

                    </div>

                    {/* Right */}

                    <div>

                        <p className="mb-4 font-mono text-lg text-slate-500">

                            Hello, I'm

                        </p>

                        <h1 className="text-7xl font-bold tracking-tight text-slate-900">

                            {profile.name}

                        </h1>

                        <h2 className="mt-5 text-4xl font-medium text-slate-700">

                            {profile.title || "Software Developer"}

                        </h2>

                        <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">

                            {

                                profile.headline ||

                                "Passionate software engineer building modern, scalable and user-centric applications."

                            }

                        </p>

                        <div className="mt-10 flex flex-wrap gap-5">

                            {resumeUrl && (

                                <a

                                    href={resumeUrl}

                                    target="_blank"

                                    rel="noreferrer"

                                    className="rounded-full bg-slate-900 px-8 py-4 font-semibold text-white transition hover:bg-black"

                                >

                                    Download Resume

                                </a>

                            )}

                            <a

                                href="#contact"

                                className="rounded-full border border-slate-400 px-8 py-4 font-semibold transition hover:bg-slate-100"

                            >

                                Contact

                            </a>

                        </div>

                        <div className="mt-10 flex items-center gap-6">

                            {

                                socialLinks?.github && (

                                    <a

                                        href={socialLinks.github}

                                        target="_blank"

                                        rel="noreferrer"

                                        className="text-slate-700 transition hover:text-black"

                                    >

                                        GitHub

                                    </a>

                                )

                            }

                            {

                                socialLinks?.linkedin && (

                                    <a

                                        href={socialLinks.linkedin}

                                        target="_blank"

                                        rel="noreferrer"

                                        className="text-slate-700 transition hover:text-black"

                                    >

                                        LinkedIn

                                    </a>

                                )

                            }

                            {

                                socialLinks?.website && (

                                    <a

                                        href={socialLinks.website}

                                        target="_blank"

                                        rel="noreferrer"

                                        className="text-slate-700 transition hover:text-black"

                                    >

                                        Website

                                    </a>

                                )

                            }

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

}

export default Hero;