import { BadgeCheck } from "lucide-react";
   import { API_BASE_URL } from "../../constants/api";

function Hero({ profile, assets, socialLinks }) {


    const imageUrl = assets?.profileImage
    ? `${API_BASE_URL}/${assets.profileImage}`
    : "https://placehold.co/500x500?text=Profile";

    const resumeUrl = assets?.resume
    ? `${API_BASE_URL}/${assets.resume}`
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

                        <div className="flex flex-wrap items-center gap-3">

                            <h1 className="text-7xl font-bold tracking-tight text-slate-900">

                                {profile.name}

                            </h1>

                            {profile?.isPro && (

                                <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-700">

                                    <BadgeCheck size={16} />

                                    Verified Pro

                                </span>

                            )}

                        </div>

                        <h2 className="mt-5 text-4xl font-medium text-slate-700">

                            {profile.title || "Software Developer"}

                        </h2>

                        <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">

                            {

                                profile.headline ||

                                "Passionate software engineer building modern, scalable and user-centric applications."

                            }

                        </p>

                        {profile?.customDomain && (

                            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">

                                <span className="h-2 w-2 rounded-full bg-emerald-500" />

                                Connected domain: {profile.customDomain}

                            </div>

                        )}

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
