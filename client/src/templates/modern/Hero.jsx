                    import {
    FaGithub,
    FaLinkedin,
    FaGlobe
} from "react-icons/fa";

import {
    HiDownload,
    HiArrowRight
} from "react-icons/hi";

import { BadgeCheck } from "lucide-react";

function Hero({
    profile,
    assets,
    socialLinks,
    skills = []
}) {

import { API_BASE_URL } from "../../constants/api";

   const imageUrl =
    assets?.profileImage
        ? `${API_BASE_URL}/${assets.profileImage}`
        : "https://placehold.co/800x800";

    const resumeUrl =
    assets?.resume
        ? `${API_BASE_URL}/${assets.resume}`
        : null;

    const topSkills = skills
        .slice()
        .sort((a, b) => a.displayOrder - b.displayOrder)
        .slice(0, 5);

    const socialButton =
        `
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-full
        border
        border-slate-700
        bg-slate-900/40
        text-xl
        text-slate-300
        backdrop-blur
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-cyan-400
        hover:text-cyan-400
        `;

    return (

        <section className="relative overflow-hidden bg-[#070B1A] text-white">

            {/* Grid */}

            <div className="absolute inset-0 opacity-[0.04]">

                <div

                    className="h-full w-full"

                    style={{
                        backgroundImage:
                            `
                            linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)
                            `,
                        backgroundSize: "64px 64px"
                    }}

                />

            </div>

            {/* Cyan Glow */}

            <div className="absolute left-0 top-0 h-[700px] w-[700px] rounded-full bg-cyan-500/10 blur-[170px]" />

            {/* Purple Glow */}

            <div className="absolute bottom-0 right-0 h-[650px] w-[650px] rounded-full bg-violet-600/10 blur-[180px]" />

            <div className="relative mx-auto flex min-h-[100vh] max-w-7xl items-center px-8 py-24">

                <div className="grid w-full items-center gap-24 lg:grid-cols-2">

                    {/* LEFT SIDE */}

                    <div>

                        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.45em] text-cyan-400">

                            HELLO, I'M

                        </p>

                        <div className="flex flex-wrap items-center gap-4">

                            <h1 className="text-6xl font-black leading-none tracking-tight text-white lg:text-7xl xl:text-8xl">

                                {profile?.name}

                            </h1>

                            {profile?.isPro && (

                                <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-cyan-300">

                                    <BadgeCheck size={16} />

                                    Verified Pro

                                </span>

                            )}

                        </div>

                        <h2
                            className="
                                mt-8
                                bg-gradient-to-r
                                from-cyan-400
                                via-sky-400
                                to-violet-400
                                bg-clip-text
                                text-5xl
                                font-black
                                leading-tight
                                text-transparent
                                lg:text-6xl
                                xl:text-7xl
                            "
                        >

                            {profile?.title}

                        </h2>

                        <p className="mt-10 max-w-xl text-lg leading-9 text-slate-400">

                            {

                                profile?.headline ||

                                "Building modern, scalable and user-friendly software solutions."

                            }

                        </p>

                        {profile?.customDomain && (

                            <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-300">

                                <span className="h-2 w-2 rounded-full bg-emerald-400" />

                                Connected domain: {profile.customDomain}

                            </div>

                        )}

                        {/* Buttons */}

                        <div className="mt-14 flex flex-wrap gap-5">

                            {

                                resumeUrl && (

                                    <a

                                        href={resumeUrl}

                                        target="_blank"

                                        rel="noreferrer"

                                        className="
                                            inline-flex
                                            items-center
                                            gap-3
                                            rounded-full
                                            bg-gradient-to-r
                                            from-cyan-400
                                            to-sky-500
                                            px-8
                                            py-4
                                            font-semibold
                                            text-slate-950
                                            shadow-lg
                                            shadow-cyan-500/20
                                            transition-all
                                            duration-300
                                            hover:-translate-y-1
                                            hover:shadow-cyan-500/40
                                        "

                                    >

                                        <HiDownload className="text-xl" />

                                        Download Resume

                                    </a>

                                )

                            }

                            <a

                                href="#contact"

                                className="
                                    inline-flex
                                    items-center
                                    gap-3
                                    rounded-full
                                    border
                                    border-slate-700
                                    bg-slate-900/40
                                    px-8
                                    py-4
                                    font-semibold
                                    backdrop-blur
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                    hover:border-cyan-400
                                    hover:text-cyan-400
                                "

                            >

                                <HiArrowRight />

                                Contact Me

                            </a>

                        </div>

                        {/* Social Icons */}

                        <div className="mt-12 flex gap-5">

                            {

                                socialLinks?.github && (

                                    <a

                                        href={socialLinks.github}

                                        target="_blank"

                                        rel="noreferrer"

                                        className={socialButton}

                                    >

                                        <FaGithub />

                                    </a>

                                )

                            }

                            {

                                socialLinks?.linkedin && (

                                    <a

                                        href={socialLinks.linkedin}

                                        target="_blank"

                                        rel="noreferrer"

                                        className={socialButton}

                                    >

                                        <FaLinkedin />

                                    </a>

                                )

                            }

                            {

                                socialLinks?.website && (

                                    <a

                                        href={socialLinks.website}

                                        target="_blank"

                                        rel="noreferrer"

                                        className={socialButton}

                                    >

                                        <FaGlobe />

                                    </a>

                                )

                            }

                        </div>

                    </div>

                
                    
                    {/* RIGHT SIDE */}

                    <div className="relative flex items-center justify-center">

                        {/* Main Glow */}

                        <div className="absolute h-[620px] w-[620px] rounded-full bg-cyan-500/10 blur-[140px]" />

                        <div className="absolute h-[520px] w-[520px] rounded-full border border-cyan-400/20" />

                        <div className="absolute h-[570px] w-[570px] rounded-full border border-violet-500/10" />

                        {/* Dynamic Skill Badges */}

                        {

                            topSkills.map((skill, index) => {

                                const positions = [

                                    "top-0 left-10",

                                    "top-16 right-0",

                                    "bottom-8 right-8",

                                    "bottom-0 left-8",

                                    "top-1/2 -left-8"

                                ];

                                return (

                                    <div

                                        key={skill._id}

                                        className={`
                                            absolute
                                            ${positions[index]}
                                            rounded-full
                                            border
                                            border-white/10
                                            bg-white/5
                                            backdrop-blur-xl
                                            px-5
                                            py-3
                                            text-sm
                                            font-medium
                                            text-white
                                            shadow-lg
                                            shadow-cyan-500/10
                                            transition-all
                                            duration-300
                                            hover:-translate-y-1
                                            hover:border-cyan-400
                                        `}

                                    >

                                        {skill.name}

                                    </div>

                                );

                            })

                        }

                        {/* Profile Circle */}

                        <div

                            className="
                                relative
                                flex
                                h-[470px]
                                w-[470px]
                                items-center
                                justify-center
                                rounded-full
                                bg-gradient-to-br
                                from-cyan-400
                                via-sky-500
                                to-violet-600
                                p-[8px]
                                shadow-[0_0_100px_rgba(34,211,238,0.20)]
                            "

                        >

                            <div

                                className="
                                    flex
                                    h-full
                                    w-full
                                    items-center
                                    justify-center
                                    overflow-hidden
                                    rounded-full
                                    border
                                    border-white/10
                                    bg-[#0F172A]
                                    backdrop-blur-xl
                                "

                            >

                                <img

                                    src={imageUrl}

                                    alt={profile?.name}

                                    className="
                                        h-full
                                        w-full
                                        object-cover
                                        object-top
                                        transition-all
                                        duration-500
                                        hover:scale-105
                                    "

                                />

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

}

export default Hero;
