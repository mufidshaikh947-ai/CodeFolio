function Projects({ projects }) {
const API_URL = import.meta.env.VITE_API_URL;

    return (

<section className="py-24">
            <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">

                <div className="mb-16 text-center">

                    <p className="font-mono text-base tracking-wide text-slate-500">

                        Browse My Recent

                    </p>

                    <h2 className="mt-3 text-6xl font-bold tracking-tight text-slate-900">

                        Projects

                    </h2>

                </div>

                <div className="space-y-12">

                    {projects?.length > 0 ? (

                        projects.map((project) => (

                            <div

                                key={project._id}

                                className="overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"

                            >

                                <div className="grid lg:grid-cols-[420px_1fr]">

                                    {/* Project Image */}

                                    <div className="bg-slate-50 p-8">

                                        <img

                                            src={

                                               project.projectImage
    ? `${API_URL}/${project.projectImage}`
    : "https://placehold.co/700x500?text=Project"

                                            }

                                            alt={project.title}

                                            className="h-[280px] w-full rounded-3xl object-cover"

                                        />

                                    </div>

                                    {/* Project Details */}

                                    <div className="flex flex-col justify-between p-10">

                                        <div>

                                            <div className="flex items-center gap-3">

                                                <h3 className="text-4xl font-bold text-slate-900">

                                                    {project.title}

                                                </h3>

                                                {project.featured && (

                                                    <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">

                                                        Featured

                                                    </span>

                                                )}

                                            </div>

                                            <p className="mt-6 text-lg leading-9 text-slate-600">

                                                {project.description}

                                            </p>

                                            <div className="mt-8 flex flex-wrap gap-3">

                                                {project.techStack?.map((tech, index) => (

                                                    <span

                                                        key={index}

                                                        className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700"

                                                    >

                                                        {tech}

                                                    </span>

                                                ))}

                                            </div>

                                        </div>

                                        <div className="mt-10 flex flex-wrap gap-4">

                                            {project.githubLink && (

                                                <a

                                                    href={project.githubLink}

                                                    target="_blank"

                                                    rel="noreferrer"

                                                    className="rounded-full border border-slate-300 px-8 py-3 font-semibold transition hover:bg-slate-100"

                                                >

                                                    GitHub

                                                </a>

                                            )}

                                            {project.liveLink && (

                                                <a

                                                    href={project.liveLink}

                                                    target="_blank"

                                                    rel="noreferrer"

                                                    className="rounded-full bg-slate-900 px-8 py-3 font-semibold text-white transition hover:bg-black"

                                                >

                                                    Live Demo

                                                </a>

                                            )}

                                        </div>

                                    </div>

                                </div>

                            </div>

                        ))

                    ) : (

                        <div className="rounded-[36px] border border-slate-200 py-20 text-center">

                            <p className="text-xl text-slate-500">

                                No projects added yet.

                            </p>

                        </div>

                    )}

                </div>

            </div>

        </section>

    );

}

export default Projects;