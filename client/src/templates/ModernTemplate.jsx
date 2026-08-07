import Hero from "./modern/Hero";
import About from "./modern/About";
import Skills from "./modern/Skills";
import Projects from "./modern/Projects";
import Experience from "./modern/Experience";
import Education from "./modern/Education";
import Certificates from "./modern/Certificates";
import Contact from "./modern/Contact";

function ModernTemplate({ portfolio }) {

    if (!portfolio) return null;

    const {
        profile,
        assets,
        socialLinks,
        skills,
        projects,
        experiences,
        educations,
        certificates
    } = portfolio;

    return (

        <main className="min-h-screen overflow-x-hidden bg-[#060B17] text-white">

            <Hero
                profile={profile}
                assets={assets}
                socialLinks={socialLinks}
                skills={skills}
            />

            <div className="relative overflow-hidden">

                {/* Global Background */}

                <div className="pointer-events-none absolute inset-0">

                    <div className="absolute left-[-10%] top-0 h-[700px] w-[700px] rounded-full bg-cyan-500/5 blur-[180px]" />

                    <div className="absolute right-[-10%] top-[20%] h-[650px] w-[650px] rounded-full bg-violet-500/5 blur-[180px]" />

                    <div className="absolute bottom-0 left-1/3 h-[700px] w-[700px] rounded-full bg-blue-500/5 blur-[200px]" />

                    <div className="absolute bottom-20 right-0 h-[500px] w-[500px] rounded-full bg-indigo-500/5 blur-[180px]" />

                </div>

                {/* Portfolio Content */}

                <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-10 xl:px-12">

                    <section className="py-24">

                        <About profile={profile} />

                    </section>

                    <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                    <section className="py-24">

                        <Skills skills={skills} />

                    </section>

                    <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                    <section className="py-24">

                        <Projects projects={projects} />

                    </section>

                    <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                    <section className="py-24">

                        <Experience experiences={experiences} />

                    </section>

                    <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                    <section className="py-24">

                        <Education educations={educations} />

                    </section>

                    <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                    <section className="py-24">

                        <Certificates certificates={certificates} />

                    </section>

                    <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                    <section className="py-24">

                        <Contact
                            profile={profile}
                            socialLinks={socialLinks}
                        />

                    </section>

                </div>

            </div>

            <footer className="border-t border-white/10 bg-white/[0.015] backdrop-blur-sm">

                <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center justify-between gap-8 px-6 py-14 md:flex-row md:px-10 xl:px-12">

                    <div>

                        <h3 className="text-xl font-bold text-white">

                            {profile?.name}

                        </h3>

                        <p className="mt-2 text-sm text-slate-400">

                            {profile?.headline || profile?.title}

                        </p>

                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-8 text-sm">

                        {socialLinks?.github && (

                            <a
                                href={socialLinks.github}
                                target="_blank"
                                rel="noreferrer"
                                className="transition-colors duration-200 hover:text-cyan-400"
                            >
                                GitHub
                            </a>

                        )}

                        {socialLinks?.linkedin && (

                            <a
                                href={socialLinks.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                className="transition-colors duration-200 hover:text-cyan-400"
                            >
                                LinkedIn
                            </a>

                        )}

                        {socialLinks?.website && (

                            <a
                                href={socialLinks.website}
                                target="_blank"
                                rel="noreferrer"
                                className="transition-colors duration-200 hover:text-cyan-400"
                            >
                                Website
                            </a>

                        )}

                    </div>

                    <div className="text-center md:text-right">

                        <p className="text-sm text-slate-500">

                            Built with CodeFolio

                        </p>

                        <p className="mt-2 text-xs text-slate-600">

                            © {new Date().getFullYear()} {profile?.name}. All Rights Reserved.

                        </p>

                    </div>

                </div>

            </footer>

        </main>

    );

}

export default ModernTemplate;