import Hero from "./minimal/Hero";
import About from "./minimal/About";
import Projects from "./minimal/Projects";
import Experience from "./minimal/Experience";
import Education from "./minimal/Education";
import Skills from "./minimal/Skills";
import Certificates from "./minimal/Certificates";
import Contact from "./minimal/Contact";

function MinimalTemplate({ portfolio }) {

    return (

        <main className="bg-white text-slate-900">

            <Hero
                profile={portfolio.profile}
                assets={portfolio.assets}
                socialLinks={portfolio.socialLinks}
            />

            <About
                profile={portfolio.profile}
                assets={portfolio.assets}
                socialLinks={portfolio.socialLinks}
            />

            <Projects
                projects={portfolio.projects}
            />

            <Experience
                experiences={portfolio.experiences}
            />

            <Education
                educations={portfolio.educations}
            />

            <Skills
                skills={portfolio.skills}
            />

            <Certificates
                certificates={portfolio.certificates}
            />

            <Contact
                profile={portfolio.profile}
                socialLinks={portfolio.socialLinks}
            />

            <footer className="border-t border-slate-200">

                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8">

                    <p className="text-sm text-slate-500">

                        © {new Date().getFullYear()} {portfolio.profile.name}

                    </p>

                    <p className="text-sm text-slate-500">

                        Built with CodeFolio

                    </p>

                </div>

            </footer>

        </main>

    );

}

export default MinimalTemplate;