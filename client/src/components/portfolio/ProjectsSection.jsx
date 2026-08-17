import { getAssetUrl } from "../../utils/assetUrl";

function ProjectsSection({ projects }) {

    return (

        <section>

            <div className="mx-auto max-w-7xl">

                <div className="mb-14 flex items-end justify-between">

                    <div>

                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">

                            PROJECTS

                        </p>

                        <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 dark:text-white">

                            Featured Work

                        </h2>

                    </div>

                    <p className="hidden text-slate-500 lg:block">

                        {projects.length} Project{projects.length !== 1 ? "s" : ""}

                    </p>

                </div>

                {projects.length === 0 ? (

                    <div className="rounded-3xl border border-dashed border-slate-300 p-16 text-center">

                        <p className="text-slate-500">

                            No projects added yet.

                        </p>

                    </div>

                ) : (

                    <div className="grid gap-8 lg:grid-cols-2">

                        {projects.map((project) => (

                            <article
                                key={project._id}
                                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-900"
                            >

                                {(project.image || project.projectImage) && (

                                    <img
src={getAssetUrl(project.image || project.projectImage)} alt={project.title}
                                        className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                                    />

                                )}

                                <div className="p-8">

                                    <div className="mb-5 flex items-center justify-between">

                                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">

                                            {project.title}

                                        </h3>

                                        {project.featured && (

                                            <span className="rounded-full bg-blue-100 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700">

                                                Featured

                                            </span>

                                        )}

                                    </div>

                                    <p className="leading-8 text-slate-600 dark:text-slate-300">

                                        {project.description}

                                    </p>

                                    {project.technologies?.length > 0 && (

                                        <div className="mt-8 flex flex-wrap gap-3">

                                            {project.technologies.map((tech) => (

                                                <span
                                                    key={tech}
                                                    className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                                                >

                                                    {tech}

                                                </span>

                                            ))}

                                        </div>

                                    )}

                                    <div className="mt-10 flex flex-wrap gap-4">

                                        {project.githubLink && (

                                            <a
                                                href={project.githubLink}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="rounded-xl bg-slate-900 px-6 py-3 font-medium text-white transition hover:bg-slate-700"
                                            >

                                                GitHub

                                            </a>

                                        )}

                                        {project.liveLink && (

                                            <a
                                                href={project.liveLink}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="rounded-xl border border-slate-300 px-6 py-3 font-medium transition hover:bg-slate-100 dark:border-slate-600 dark:hover:bg-slate-800"
                                            >

                                                Live Demo

                                            </a>

                                        )}

                                    </div>

                                </div>

                            </article>

                        ))}

                    </div>

                )}

            </div>

        </section>

    );

}

export default ProjectsSection;
