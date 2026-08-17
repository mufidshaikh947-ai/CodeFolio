import { getAssetUrl } from "../../utils/assetUrl";

function HeroSection({

    profile,

    assets,

    socialLinks

}) {

   const imageUrl = assets?.profileImage
    ? getAssetUrl(assets.profileImage)
    : "https://placehold.co/300x300?text=Profile";
    
    const resumeUrl = assets?.resume
        ? getAssetUrl(assets.resume)
        : null;

    return (

        <section className="py-24">

            <div className="mx-auto max-w-7xl px-6">

                <div className="grid items-center gap-16 lg:grid-cols-[320px_1fr]">

                    {/* Profile Image */}

                    <div className="flex justify-center lg:justify-start">

                        <img

                            src={imageUrl}

                            alt={profile.name}

                            className="h-72 w-72 rounded-full border border-slate-200 object-cover shadow-xl"

                        />

                    </div>

                    {/* Content */}

                    <div>

                        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">

                            {profile.location || "Software Developer"}

                        </p>

                        <h1 className="mt-5 text-6xl font-black tracking-tight text-slate-900">

                            {profile.name}

                        </h1>

                        <h2 className="mt-5 text-3xl font-semibold text-slate-600">

                            {profile.title || "Full Stack Developer"}

                        </h2>

                        <p className="mt-8 max-w-3xl text-lg leading-9 text-slate-600">

                            {

                                profile.headline ||

                                "Passionate software engineer focused on building clean, scalable and user-centric digital products."

                            }

                        </p>

                        {/* Buttons */}

                        <div className="mt-12 flex flex-wrap gap-4">

                            {resumeUrl && (

                                <a

                                    href={resumeUrl}

                                    target="_blank"

                                    rel="noreferrer"

                                    className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"

                                >

                                    Resume

                                </a>

                            )}

                            {socialLinks?.github && (

                                <a

                                    href={socialLinks.github}

                                    target="_blank"

                                    rel="noreferrer"

                                    className="rounded-xl border border-slate-300 px-8 py-4 font-semibold transition hover:bg-slate-100"

                                >

                                    GitHub

                                </a>

                            )}

                            {socialLinks?.linkedin && (

                                <a

                                    href={socialLinks.linkedin}

                                    target="_blank"

                                    rel="noreferrer"

                                    className="rounded-xl border border-slate-300 px-8 py-4 font-semibold transition hover:bg-slate-100"

                                >

                                    LinkedIn

                                </a>

                            )}

                            {socialLinks?.website && (

                                <a

                                    href={socialLinks.website}

                                    target="_blank"

                                    rel="noreferrer"

                                    className="rounded-xl border border-slate-300 px-8 py-4 font-semibold transition hover:bg-slate-100"

                                >

                                    Website

                                </a>

                            )}

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

}

export default HeroSection;
